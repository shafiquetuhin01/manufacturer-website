import React from 'react';
import Business from '../components/Business';
import News from '../components/News';
import Projects from '../components/Projects';
import Review from '../components/Review';
import Hero from './Hero';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='sm:mx-4 lg:mx-20'>
            <Hero />
            <Tools />
            <Business />
            <Review />
            <News />
            <Projects />
        </div>
    );
};

export default Home;