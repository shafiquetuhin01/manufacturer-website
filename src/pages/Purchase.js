import React from "react";
import { useNavigate } from "react-router-dom";

const Purchase = ({ details }) => {
  console.log("is it correct", details);
  const { name, _id, price, qty, url } = details;
  const navigate = useNavigate();
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="details-modal" class="modal-toggle" />
      <label for="details-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <label
            for="details-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-2xl text-primary font-bold">Name : {name}</h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
    </div>
  );
};

export default Purchase;
