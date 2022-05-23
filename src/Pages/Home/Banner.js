import React from 'react';
import banner from '../../images/Banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Welcome to Agro Machineries</h1>
                    <p className="py-6">Agro Machineries is the best machineries parts manufacturer company in Bangladesh. From 1995, It has been kept it's goodwill in the world wide. We create various machineries parts and provide 32 countries in the world.</p>
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;