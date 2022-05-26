import React from 'react';
import Footer from '../Shared/Footer';
import AllReview from './AllReview';
import Banner from './Banner';
import Contact from './Contact';
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
            <AllReview></AllReview>
            <Contact></Contact>
            <Footer></Footer>
        </section>
    );
};

export default Home;