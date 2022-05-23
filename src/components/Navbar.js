import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  const menuBar = (
    <>
      <li>
        <NavLink to="/" className="rounded-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/purchase" className="rounded-lg">
          Purchase
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="rounded-lg">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="rounded-lg">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="rounded-lg">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="rounded-lg">
          Login
        </NavLink>
      </li>
    </>
  );
  const searchBtn = (
    <>
      <div class="form-control">
        <div class="input-group">
          <input type="text" placeholder="Search…" class="input" />
          <button class="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="w-full lg:px-20 navbar bg-base-300">
          <div class="flex-1 px-2 mx-2 font-bold text-2xl">BD TOOLS</div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal gap-x-2">
              {/* <!-- Navbar menu content here --> */}
              {menuBar}
              {searchBtn}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 mt-16">
          {/* <!-- Sidebar content here --> */}
          {searchBtn}
          {menuBar}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
