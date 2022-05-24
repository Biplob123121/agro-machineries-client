import React from 'react';
import flag from '../../images/icon/flag.png';
import useR from '../../images/icon/user.png';
import delivery from '../../images/icon/delivery.png';
import feedback from '../../images/icon/feedback.png';

const Summary = () => {
    return (
        <section>
            <h2 className='text-4xl font-bold text-center text-primary'>Connected With Us</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">

                <div className="">
                    <div><img src={flag} alt="" /></div>
                    <div className="stat-value">32</div>
                    <div className="stat-desc">Countries</div>
                </div>

                <div className="">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </section>
    );
};

export default Summary;