import React from "react";
import heroimg from "../assets/images/hero-main.jpg";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={heroimg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold py-6">
            We are manufacturing tools with world class quality !{" "}
          </h1>

          <button className="btn btn-primary">Visit Products</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
