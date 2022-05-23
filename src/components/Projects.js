import React from 'react';
import img1 from '../assets/images/home-service.jpg';
import img2 from '../assets/images/industrial.webp';
import img3 from '../assets/images/mega-package.jpeg';

const Projects = () => {
    return (
        <div className='my-5'>
            <h2 className='mt-8 mb-8 text-center text-primary font-bold text-3xl'>Our Top 3 Projects</h2>
            <div className='gap-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                <div className='w-100'>
                    <h2 className='mt-8 mb-8 text-center text-secondary font-bold text-2xl'>Home Service</h2>
                    <img className='h-4/5' src={img1} />
                </div>
                <div className='w-100'>
                    <h2 className='mt-8 mb-8 text-center text-secondary font-bold text-2xl'>Industrial Service</h2>
                    <img className='h-4/5' src={img2} />
                </div>
                <div className='w-100'>
                    <h2 className='mt-8 mb-8 text-center text-secondary font-bold text-2xl'>Mega Tools Package</h2>
                    <img className='h-4/5' src={img3} />
                </div>
            </div>
        </div>
    );
};

export default Projects;