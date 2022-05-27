import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <h1 className="text-primary text-center text-5xl font-bold my-5">
        My Portfolio is as under:{" "}
      </h1>
      <div class="card w-9/12 mx-auto bg-neutral text-neutral-content">
        <div class="card-body text-start">
          <div class="overflow-x-auto">
            <table class="table w-full">
              <tr>
                <th className="text-2xl font-bold">Name : </th>
                <th className="text-2xl font-bold">Mohammad Shafiqul Islam</th>
              </tr>
              <tr>
                <th className="text-2xl font-bold">Email : </th>
                <th className="text-2xl font-bold">sfqtuhin04@gmail.com</th>
              </tr>
              <tr>
                <th className="text-2xl font-bold">
                  Educational Qualification :{" "}
                </th>
                <th className="text-2xl font-bold">Master of Arts (M.A.)</th>
              </tr>
              <tr>
                <th className="text-2xl font-bold">
                  Skills as a Web Developer :{" "}
                </th>
                <th className="text-2xl font-bold">
                  html, css, javascript, bootstrap, telwind, react js, <br />{" "}
                  node js, express, mongodb, php and wordpress
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <h2 className="text-center text-primary font-bold text-3xl my-3 underline">
        My completed Projects
      </h2>
      <div class="card card-compact w-10/12 mx-auto mt-6 bg-base-100 shadow-xl">
        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
          <img className="h-full" src="https://i.ibb.co/bskvSXf/porj1.png" alt=""/>
          <img className="h-full" src="https://i.ibb.co/30761W3/proj2.png" alt=""/>
          <img className="h-full" src="https://i.ibb.co/5vxv0FC/proj3.png" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
