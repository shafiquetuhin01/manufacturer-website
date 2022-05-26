import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/service?orders=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Package Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th className="bg-green-500">Pay</th>
            <th className="bg-orange-500">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {orders.map((order,index) => (
            <tr>
              <th>{index+1}</th>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>${order.price}</td>
              <td><button className="btn btn-primary">Pay</button></td>
              <td><button className="btn btn-secondary">Cancel</button></td>          
             
            </tr>
          ))}
          {/* <!-- row 2 --> */}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
