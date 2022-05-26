import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState({});

    useEffect( () =>{
        const url =`http://localhost:5000/order/${user?.email}`;
        console.log(url);
        fetch(url, {
            method : 'GET',
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setOrder(data));

    }, [user?.email]);

    return (
        <section>
            <h4 className='text-2xl font-bold text-center my-8'>My Order</h4>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>{order.name}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td><button className="btn btn-primary">Pay now</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyOrder;