import React from 'react';
import Business from '../components/Business';
import Hero from './Hero';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='sm:mx-4 lg:mx-20'>
            <Hero />
            <Tools />
            <Business />
        </div>
    );
};

export default Home;