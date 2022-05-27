import React from 'react';

const Blogs = () => {
    return (
        <section>
            <h2 className='text-4xl text-primary font-bold text-center my-8'>Question and Answer :</h2>

            <div className="card lg:w-3/4 mx-auto  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                    <ol>
                        <li>1. We should keep the component in th local whrere necessary.</li>
                        <li>2. We need to use the image which property is less. I can modify our image before use.</li>
                        <li>3. We should not send unnessary props.</li>
                        <li>4. We should prevent unnessary re-rendering.</li>
                        <li>5. We should not repeat our code.</li>
                    </ol>
                </div>
            </div>

            <div className="card lg:w-3/4 mx-auto my-8 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>There are four main ways to manage a state in  a React Aplication. These are Local state, Global state, Server state and Url state. In the local state, we can manage a state in a component, in the global state we can manage our data in various components. In the Server state, we can manage our data from the external source and In  the Url state We can manage our data from our url which are come from react query etc.</p>
                </div>
            </div>
            <div className="card lg:w-3/4 mx-auto mb-8 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. When we need to access the properies of another boject, then we used this method.</p>
                </div>
            </div>
            <div className="card lg:w-3/4 mx-auto mb-8 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <p>If we set the value directly, we assign the value like a variable, But it dosen't change the state imidiately, only we can change the value of variable. If we want to change the state, we need to refress it. Again, we lose our control in the other components. </p>
                </div>
            </div>

            <div className="card lg:w-3/4 mx-auto mb-8 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>The algorithm of the Question given below :</p>
                    <ol>
                        <li>Firstly, We need to take an array of objects</li>
                        <li>Seondly, We need to take the key and value for the each object.</li>
                        <li>Thirdly, We need to map the array and take the every object.</li>
                        <li>Fourthly, We should use inlude method with the name and find the object.</li>
                        <li>Finally, We can show the object.</li>
                    </ol>
                </div>
            </div>

            <div className="card lg:w-3/4 mx-auto mb-8 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>Unit test is the testing a smallest part of code from a large application. It is mainly used by the software Developer. At the time of working in a large projects, software developers are used to unit test. </p>
                </div>
            </div>

        </section>
    );
};

export default Blogs;