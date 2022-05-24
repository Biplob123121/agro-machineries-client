import React from 'react';
import Banner from './Banner';
import History from './History';
import Products from './Products';
import Summary from './Summary';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Products></Products>
            <History></History>
            <Summary></Summary>
        </section>
    );
};

export default Home;