import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-primary mt-12'>Ask Your Question</h2>
            <div className='lg:w-1/2 mx-auto'>
                <form className='add-item-form'>
                    <input type="text" placeholder=" Enter Your Name" className="input w-full input-bordered my-4"  required/>
                    <input type="text" placeholder="Enter Your Email" className="input w-full input-bordered" required/>
                    <textarea className="textarea textarea-bordered w-full my-4" placeholder="Ask Your Question" required></textarea>
                    <div className='mb-6 w-1/2 mx-auto'>
                        <button className="btn btn-wide border-0 uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary hover:from-red-500 hover:to-yellow-500">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact; <h2>Contact Us</h2>