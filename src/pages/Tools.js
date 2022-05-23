import React from 'react';
import useTools from '../hooks/useTools';

const Tools = () => {
    const [ourTools] = useTools();
    return (
        <div>
            <h2>Our Manufacturing Tools</h2>
            My Tools: {ourTools.length}
        </div>
    );
};

export default Tools;