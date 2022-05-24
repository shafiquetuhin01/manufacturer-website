import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details';

const Purchase = () => {
    const {purchaseId} = useParams();
    const [detailsItem, setDetailsItem] = useState([]);
        useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setDetailsItem(data));
    },[purchaseId]);
    return (
        <div>
            <h1 className='text-center text-primary font-bold text-4xl my-5'>You selected the purchase id : {purchaseId}</h1>
            
        </div>
    );
};

export default Purchase;