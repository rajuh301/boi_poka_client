import React from 'react';
import Navbar from '../shaired/Navbar';
import Carusol from '../pages/Carusol';
import SecondNav from '../shaired/SecondNav';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SecondNav></SecondNav>
            <Carusol></Carusol>
        </div>
    );
};

export default Home;