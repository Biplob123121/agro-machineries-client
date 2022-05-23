import React from 'react';
import Banner from './Banner';
import History from './History';
import Products from './Products';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Products></Products>
            <History></History>
        </section>
    );
};

export default Home;