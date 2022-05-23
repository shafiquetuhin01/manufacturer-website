import React from 'react';
import img from '../assets/images/bg3.jpg';
const Business = () => {
    const bgimg = {
        backgroundImage:`url(${img})`,
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div style={bgimg}>
            <h2>our manufacturing Business summary</h2>
            <h5>try to understand user expectation</h5>
            <div>Dotted----</div>
            <div>
                <div>card.....</div>
                <div>{img}</div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div>
                    <h2>Have any question about us or get a products request</h2>
                    <h4>Don't hasitate to contact us</h4>
                </div>
                <div>
                    <button className="btn btn-primary">Request For Quote</button>
                    <button className="btn btn-secondary">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Business;