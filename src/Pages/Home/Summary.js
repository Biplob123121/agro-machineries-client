import React from 'react';
import flag from '../../images/icon/flag.png';
import useR from '../../images/icon/user.png';
import delivery from '../../images/icon/delivery.png';
import feedback from '../../images/icon/feedback.png';

const Summary = () => {
    return (
        <section>
            <h2 className='text-4xl font-bold text-center text-primary my-12'>Connected With Us</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4">

                <div className="">
                    <div><img src={flag} alt="" /></div>
                    <div className="stat-value">32</div>
                    <div className="text-2xl font-bold">Countries</div>
                </div>

                <div className="py-4">
                    <div><img src={useR} alt="" /></div>
                    <div className="stat-value">1200+</div>
                    <div className="text-2xl font-bold"> Clients</div>
                </div>

                <div className="py-4">
                    <div><img src={delivery} alt="" /></div>
                    <div className="stat-value">1500+</div>
                    <div className="text-2xl font-bold">Deliveried</div>
                </div>
                <div className="py-4">
                    <div><img src={feedback} alt="" /></div>
                    <div className="stat-value">500+</div>
                    <div className="text-2xl font-bold">Feedback</div>
                </div>

            </div>
        </section>
    );
};

export default Summary;