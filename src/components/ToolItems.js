import React from "react";
import { useNavigate } from "react-router-dom";

const ToolItems = ({ tools }) => {
  const { _id, name, price, description, qty, url } = tools;
  const navigate = useNavigate();
  const handleBuyNow = (id) => {
    navigate(`/purchase/${id}`);
  };
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
          <button onClick={()=>handleBuyNow(_id)} class="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolItems;
