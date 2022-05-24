import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    
    const {perchaseId} = useParams();
    return (
        <div>
            <h1 className='text-center text-primary font-bold text-4xl my-5'>You selected the purchase id : {perchaseId}</h1>
        </div>
    );
};

export default Purchase;