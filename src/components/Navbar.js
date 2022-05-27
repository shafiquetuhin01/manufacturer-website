import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
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
        <NavLink to="/portfolio" className="rounded-lg">
          Portfolio
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
      {user && <li>
        <NavLink to="/dashboard" className="rounded-lg">
          Dashboard
        </NavLink>
      </li>}
      <li>
        {user ? (
          <div className="flex items-center p-0">
            <h2 className="text-primary font-bold text-2xl flex items-center p-0">
              {user.displayName}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </h2>
            <button className="btn btn-ghost" onClick={logout}>
              Sign Out
            </button>
          </div>
        ) : (
          <NavLink to="/login" className="rounded-lg">
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  const searchBtn = (
    <>
      <div className="form-control">
        <div className="input-group">
          <input type="text" placeholder="Search…" className="input" />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
  return (
    <div className="'flex' : mobileMenuOpen , 'hidden' : !mobileMenuOpen">
      <div className="flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full lg:px-20 navbar bg-base-300">
          <div className="flex-1 px-2 mx-2 font-bold text-2xl">BD TOOLS</div>
          <div className="flex-none lg:hidden">
            <label  htmlFor="" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-x-2">
              {/* <!-- Navbar menu content here --> */}
              {menuBar}
              {searchBtn}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="">
        <label  htmlFor="" className=""></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 mt-16">
          {/* <!-- Sidebar content here --> */}
          {/* {searchBtn}
          {menuBar} */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
