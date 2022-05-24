import React from "react";
import img404 from "../assets/images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-4xl text-center font-bold text-secondary mt-6 mb-6">
        The page you are searching is not found !!!
      </h2>
      <span >
        <img className="w-100 max-h-fit mx-auto" src={img404} />
      </span>
    </div>
  );
};

export default NotFound;
