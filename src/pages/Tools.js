import React from 'react';
import ToolItems from '../components/ToolItems';
import useTools from '../hooks/useTools';

const Tools = () => {
    const [ourTools] = useTools();
    return (
        <div className='bg-indigo-100 py-8'>
            <h2 className='text-4xl text-center mb-8 font-bold text-primary'>Our Manufacturing Tools</h2>
            <div className='grid gap-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3'>
            {ourTools.slice(0,6).map(tools=><ToolItems key={tools._id} tools={tools}></ToolItems>)}
            </div>
            
        </div>
    );
};

export default Tools;