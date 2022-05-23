import React from "react";

const NewsItems = ({ news }) => {
  const { name, price, description, qty, url } = news;
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
      </div>
    </div>
  );
};

export default NewsItems;
