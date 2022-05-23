import React from 'react';
import Hero from './Hero';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='sm:mx-4 lg:mx-20'>
            <Hero />
            <Tools />
        </div>
    );
};

export default Home;