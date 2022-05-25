import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { productId } = useParams();
    const [user] = useAuthState(auth);
    const numRef = useRef(0);
    const [product, setProduct] = useState({});
    const [orderQuantity, setOrderQuantity] = useState(100);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                if (data.price) {
                    setTotalPrice(data.price * 100);
                }
            });
    }, [productId]);

    const decreasingQuantity = () => {
        const currenQuantity = numRef.current.value;
        if (currenQuantity > product.minOrder) {
            const newQuantity = parseInt(currenQuantity) - 1;
            setOrderQuantity(newQuantity);
            setTotalPrice(newQuantity * product.price);
        }
        else{
            toast.error('You can not decrease quantity number. It is your minimum quantity to order!!')
        }
     };

    const increasingQuantity = () => {
        const currenQuantity = numRef.current.value;
        if (currenQuantity < product.quantity) {
            const newQuantity = parseInt(currenQuantity) + 1;
            setOrderQuantity(newQuantity);
            setTotalPrice(newQuantity * product.price);
        }
        else{
            toast.error('You can not increase quantity number. Our stock is over!!')
        }
    };

    const placeOrder = () =>{
        const data = {
            name : `${product.name}`,
            quantity : orderQuantity,
            price : totalPrice,
            email : `${user.email}`
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged === true) {
                    toast('Order completed. To make payment go to Dashboard');
                }
            })
    }

    return (
        <section>
            <h2 className="text-4xl text-primary font-bold text-center py-8">Order Your Product</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={product.picture} className="max-w-sm rounded-lg bg-slate-50 shadow-2xl" alt='' />
                            <div>
                                <h2 className='text-3xl font-bold'>{product.name}</h2>
                                <p className='text-xl'>Available Quantity :{product.quantity}</p>
                                <p className='text-xl'>Minimum Order : {product.minOrder}</p>
                                <p className='text-lg font-bold'>Price : BDT {product.price} per piece</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='text-2xl text-center font-bold'>Manage Your Product Quantity</h4>
                    <div className='flex justify-center items-center max-w-screen'>
                        <div className="grid sm:grid-cols-1">
                            <button onClick={decreasingQuantity} className="btn bg-sky-500/75 border-0 font-bold text-white text-3xl my-2 px-12">-</button>
                            <input ref={numRef} className='text-center border-4 py-2' type="number" value={orderQuantity} name='quantity' readOnly />
                            <button onClick={increasingQuantity} className="btn bg-sky-500/75 border-0 font-bold text-white text-3xl my-2 px-12">+</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-4xl text-primary font-bold text-center py-8'>Order Overview :</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>{product.name}</td>
                            <td>{orderQuantity}</td>
                            <td>{totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center py-12'>
                <button onClick={placeOrder} className="btn btn-wide border-0 uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary hover:from-red-500 hover:to-yellow-500">Order Now</button>
            </div>
        </section>
    );
};

export default Purchase;