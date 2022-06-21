import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51L3keWF4SoqMxoQLeTf3GaNQvbPw07dwZXRd6aQMqJ0dLKQDIo4aoGyNgDyZynBFloOtyHne8Rl1r6yOPjlayGX4007DWveh7Z');

const Payment = () => {
    const {payId} =useParams();
    const url = `https://safe-hollows-65617.herokuapp.com/order/${payId}`;

    const {data : order, isLoading} = useQuery(['order', payId], () => fetch(url,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
            <div>
                <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <div class="card-body">
                        <h2 class="card-title">Please Pay for : {order.name}</h2>
                        <p className='text-xl'> Your ordered Quantity : {order.quantity}</p>
                        <p className='text-xl'> Total Price: {order.price}</p>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        );
};

export default Payment;