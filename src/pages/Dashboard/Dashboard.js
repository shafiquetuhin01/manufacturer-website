import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
      <h2 className="text-primary uppercase text-3xl font-bold mt-4">This is your Dashboard</h2>
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to='/dashboard'>My Profile</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/orders'>My Orders</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/review'>Add Review</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
