import React from "react";
import heroimg from "../assets/images/hero-main.jpg";

const Hero = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={heroimg} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold py-6">
            We are manufacturing tools with world class quality !{" "}
          </h1>

          <button class="btn btn-primary">Visit Products</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
