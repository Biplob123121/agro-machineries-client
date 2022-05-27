import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrderList from './MyOrderList';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://dry-spire-96844.herokuapp.com/order/${user?.email}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));

    }, [user?.email]);

    if (!user) {
        return <Loading></Loading>
    }

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
                        {
                            orders.map((order, index)=> <MyOrderList
                            key={order._id}
                            order ={order}
                            index ={index}
                            ></MyOrderList>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyOrder;