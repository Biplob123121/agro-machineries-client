import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';



const Review = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    console.log(user);

    const onSubmit = d => {
        const supplierData = {
            supplier: `${user.displayName}`,
            sEmail: `${user.email}`
        };
        const data = Object.assign(supplierData, d);

        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged === true) {
                    toast('Review Submitted');
                    reset();
                }
            })
    };
    return (
        <section>
            <h2 className='text-2xl font-bold text-center my-8'>Give Your Review :</h2>
            <div className='w-1/2 mx-auto'>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Name" value={user.displayName} className="input w-full my-4" readOnly disabled />
                    <input type="text" placeholder="Email" value={user.email} className="input w-full" readOnly disabled />
                    <textarea className="textarea textarea-bordered w-full my-4" {...register("review")} placeholder="Give Your Review" required></textarea>
                    <input type="text"  {...register("rating")} placeholder="Give Rating" className="input input-bordered w-full" required />
                    <input type="submit" className='input input-bordered w-full my-4 font-bold uppercase bg-secondary hover:bg-primary' value='Submit' />
                </form>
                <ToastContainer />
            </div>
        </section>
    );
};

export default Review;