import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";
import Details from "./Details";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { purchaseId } = useParams();
  const [detailItem, setDetailsItem] = useState([]);
  const { name, price, qty, _id, url } = detailItem;

  useEffect(() => {
    fetch(`http://localhost:5000/service/${purchaseId}`)
      .then((res) => res.json())
      .then((data) => setDetailsItem(data));
  }, [purchaseId]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const itemBooking = {
      itemId: _id,
      price,
      name,
      qty,
      url,
      userName: user.displayName,
      user: user.email,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };
  };
  return (
    <div>
      <h1 className="text-center text-primary font-bold text-4xl my-5">
        Purchasing Description
      </h1>
      <div className="mx-auto card w-4/12 bg-indigo-100 shadow-xl my-8">
        <div className="card-body">
          <h2 className="card-title text-xl font-bold text-primary">
            Purchasing for : <span className="text-black"> {name}</span>
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 justify-items-center gap-2 mt-2"
          >
            <input
              type="text"
              name="name"
              readOnly
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              readOnly
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone No"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="quantity"
              placeholder="01 Set (you can choose upto 05 set)"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="price"
              readOnly
              value={`$${price}`}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-primary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
