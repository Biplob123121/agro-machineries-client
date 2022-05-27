import React from 'react';
import pic from '../../images/portfolio.png';

const Portfolio = () => {
    return (
        <section>
            <div className='grid lg:grid-cols-2'>
                <div className='flex justify-center items-center'>
                    <div>
                        <h2 className='text-2xl font-bold my-4'>I am Biplob Kumar Barmon.</h2>
                        <p>I am a junior Web Developer. I am trying to develop my knowledge in Web Development. My goal to become a high level web developer. I am inspired by Jhankar Mahbub</p>
                    </div>
                </div>
                <img className='w-1/2 mx-auto' src={pic} alt="" />
            </div>
            <div>
                <h2 className='text-2xl font-bold text-center mt-12'>EDUCATION : </h2>
                <h4 className='text-xl mt-4'>University : Rajshahi University of Engineering and Technology</h4>
                <p className='text-xl mt-2'>Subject : Computer Science and Engineering.</p>
            </div>
            <div className='my-12'>
                <h2 className='text-2xl text-center font-bold'>TECHNICAL SKILLS :</h2>
                <ul className='text-center'>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li>Reactjs</li>
                    <li>Firebase</li>
                    <li>Nodejs</li>
                    <li>Expressjs</li>
                    <li>MongoDb</li>
                    <li>Heroku</li>
                    <li>C</li>
                </ul>
            </div>
        </section>
    );
};

export default Portfolio;