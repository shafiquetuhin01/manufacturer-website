import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import auth from '../firebase.init';

const ToolItems = ({tools}) => {
  const [user] = useAuthState(auth);
  const {name,price,description,qty,url} = tools;
  const navigate = useNavigate();
  const handleBuyNow = () =>{
    if(user){
      navigate('/purchase');
    }
    else{
      navigate('/login');
    }
  }
  return (
    <div class="card bg-base-100 shadow-xl mx-auto lg:mx-3">
      <figure>
        <img style={{width:'400px',height:'250px'}}
          src={url} alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Name: {name}</h2>
        <p>Short description: {description}</p>
        <p className="font-bold">Quantity: {qty}</p>
        <p className="font-bold">Price: ${price}</p>
        <div class="card-actions justify-end">
          <button onClick={handleBuyNow} class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ToolItems;
