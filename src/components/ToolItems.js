import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ToolItems = ({ tool, setDetails }) => {
  const { _id, name, price, description, qty, url } = tool;
  const navigate = useNavigate();
  const location = useLocation();
  // const handleBuyNow = () => {
  //   navigate('/purchase');
  //   setDetails(tool);
  // };
  return (
    <div class="card bg-base-100 shadow-xl mx-auto lg:mx-3">
      <figure>
        <img
          style={{ width: "400px", height: "250px" }}
          src={url}
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Name: {name}</h2>
        <p>Short description: {description}</p>
        <p className="font-bold">Quantity: {qty}</p>
        <p className="font-bold">Price: ${price}</p>
        <div class="card-actions justify-end">
          <label
            for="details-modal"
            onClick={() => {
              
              setDetails(tool);
            }}
            class="modal-button btn btn-primary"
           
          >
            Buy Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ToolItems;
