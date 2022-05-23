import React from "react";

const Review = () => {
  return (
    <div>
      <h2 className="py-10 text-primary text-3xl text-center font-bold">
        All Reviews
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 py-8">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-2xl font-bold text-black text-center">
              Customer Review
            </h2>
            <p className="text-center text-1xl font-bold">Nice Product</p>
          </div>
          <div class="rating mx-auto">
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <div class="avatar mx-auto mt-3">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-2xl font-bold text-black text-center">
              Customer Review
            </h2>
            <p className="text-center text-1xl font-bold">Nice Product</p>
          </div>
          <div class="rating mx-auto">
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <div class="avatar mx-auto mt-3">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-2xl font-bold text-black text-center">
              Customer Review
            </h2>
            <p className="text-center text-1xl font-bold">Nice Product</p>
          </div>
          <div class="rating mx-auto">
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <div class="avatar mx-auto mt-3">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;