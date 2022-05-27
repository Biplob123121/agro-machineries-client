import React from 'react';

const NotFound = () => {
    return (
        <section className='h-screen flex justify-center items-center'>
            <div>
                <h1 className='text-red-500 text-4xl text-center font-bold '>404</h1>
                <h3 className='text-3xl font-bold text-center'>This page is not Found!!!</h3>
            </div>
        </section>
    );
};

export default NotFound;