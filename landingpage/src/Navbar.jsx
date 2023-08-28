import React from "react";
import "preline";
import img1 from "./images/img1.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-green-500 text-sm py-4 ">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between font-custom"
          aria-label="Global"
        >
          {/* <a className="flex-none text-2xl font-semibold text-white" href="#">
            L1 Nursery
          </a> */}

          <img className="  w-16 h-14 " src={img1} alt="nursery" />
          <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
            <NavLink
              className="font-bold text-white font-custom text-lg capitalize "
              to="/home"
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              className="font-medium text-white hover:border-b-2 text-lg capitalize"
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              className="font-medium text-white hover:border-b-2  text-lg capitalize"
              to="/about"
            >
              Buy
            </NavLink>
            <NavLink
              className="font-medium text-white hover:border-b-2  text-lg capitalize"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
