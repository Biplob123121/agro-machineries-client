import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const url = `https://dry-spire-96844.herokuapp.com/product`;
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
                    toast('Item is Added');
                    reset();
                }
            })
    };
    return (
        <section >
            <div>
                <h2 className='text-center text-primary'>Add A New Product :</h2>
                <div className='w-1/2 mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("name")} placeholder="Product Name" className="input input-bordered w-full my-4" required />

                        <input type="number" {...register("price")} placeholder="Product Price/ unit" className="input input-bordered w-full mb-4" required />

                        <textarea className="textarea textarea-bordered w-full mb-4" {...register("description")} placeholder="Product description" required></textarea>

                        <input type="number"  {...register("quantity")} placeholder="Availabe Quantity" className="input input-bordered w-full mb-4" required />

                        <input type="number"  {...register("minOrder")} placeholder="Minimum order Quantity" className="input input-bordered w-full mb-4" required />

                        <input type="text"  {...register("picture")} placeholder="Photo Url" className="input input-bordered w-full" required />

                        <input type="submit" className='input input-bordered w-full my-4 font-bold uppercase bg-secondary hover:bg-primary' value='Add' />
                    </form>
                </div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default AddProduct;