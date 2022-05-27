import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dry-spire-96844.herokuapp.com/product')
        .then(res =>res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <section>
            <h2 className='text-4xl text-primary text-center font-bold pb-8'>Our Products</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product =><Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
        </section>
    );
};

export default Products;