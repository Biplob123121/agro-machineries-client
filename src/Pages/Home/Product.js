import React from 'react';

const Product = ({product}) => {
    const {name, price, picture, quantity, minOrder, description} = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className='bg-slate-50'><img src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className='font-bold text-lg'>Price : BDT {price} per piece</p>
                <p className='text-lg'>Quantity : {quantity} pieces</p>
                <p className='text-lg'>Min Order : {minOrder} pieces</p>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-wide border-0 uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary hover:from-red-500 hover:to-yellow-500">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product; 