import React, { useEffect, useState } from 'react';
import ToolItems from '../components/ToolItems';
import Details from './Details';
import Purchase from './Purchase';

const Tools = () => {
    const [tools, setTools] = useState([]);
    const [details, setDetails] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setTools(data))
    },[]);
    
    return (
        <div className='bg-indigo-100 py-8'>
            <h2 className='text-4xl text-center mb-8 font-bold text-primary'>Our Manufacturing Tools</h2>
            <div className='grid gap-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3'>
            {tools.slice(0,6).map((tool)=><ToolItems key={tool._id} tool={tool} setDetails={setDetails}></ToolItems>)}
            </div>
            {details && <Purchase details={details}></Purchase>}
            
        </div>
    );
};

export default Tools;