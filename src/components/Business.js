import React from "react";
import img from "../assets/images/bg3.jpg";
const Business = () => {
  const bgimg = {
    backgroundImage: `url(${img})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={bgimg}>
      <h2 className="pt-14 pb-4 text-center uppercase text-4xl text-primary font-bold">
        our manufacturing Business summary
      </h2>
      <h5 className="pb-4 text-2xl uppercase text-center">
        try to understand user expectation
      </h5>
      <div className="w-40 mx-auto border-2 border-black-900 font-bold mb-16">
        <span>
          <hr></hr>
        </span>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2">
        <div className="card text-center">
          <div className="card-body">
            <h2 className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 mx-auto text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </h2>
            <h2 className="font-bold text-5xl text-center">48</h2>
            <p className="text-primary text-center text-2xl font-bold">
              Countries
            </p>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h2 className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 mx-auto text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </h2>
            <h2 className="font-bold text-5xl text-center">
              5000<span className="text-3xl">+</span>
            </h2>
            <p className="text-primary text-center text-2xl font-bold">
              Delivery/Year
            </p>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h2 className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 mx-auto text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </h2>
            <h2 className="font-bold text-5xl text-center">
              100<span className="text-3xl">%</span>
            </h2>
            <p className="text-primary text-center text-2xl font-bold">
              Happy Clients
            </p>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h2 className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 mx-auto text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </h2>
            <h2 className="font-bold text-5xl text-center">
              1000<span className="text-3xl">+</span>
            </h2>
            <p className="text-primary text-center text-2xl font-bold">
              Feedbacks
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg w-10/12 grid lg:grid-cols-2 sm:grid-cols-1 bg-base-100 shadow-xl mx-auto">
        <div className="card card-body">
          <h2 className="text-3xl text-primary font-bold">Have any question about us or get a products request ?</h2>
          <h4 className="text-2xl font-bold">Don't hasitate to contact us !</h4>
        </div>
        <div className="flex justify-end items-center w-11/12">
          <button className="btn btn-primary mr-4">Request For Quote</button>
          <button className="btn btn-secondary">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Business;
