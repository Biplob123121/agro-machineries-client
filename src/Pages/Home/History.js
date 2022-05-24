import React from 'react';
import company from '../../images/company.jpg';

const History = () => {
    return (
        <section>
            <h2 className='text-4xl font-bold text-center text-primary mt-16 '>About Agro Machineries</h2>
            <div className="hero my-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={company} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div className='mr-8'>
                        <p className="p-6">Agro Machineries is established on 1995. It is situated at Bogra in Bangladesh. Our Company is manufactured various machineries parts. Our workers are very dedicated and hard worker. We provide our products many countries in the world. </p>
                        <button className="btn btn-primary border-0 uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary hover:from-red-500 hover:to-yellow-500 px-6">Join Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;