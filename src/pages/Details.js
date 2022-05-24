import React from 'react';

const Details = ({details}) => {
    const {name, url, price} = details;
    return (
        <div>
            <h2>Name: {name}</h2>
        </div>
    );
};

export default Details;