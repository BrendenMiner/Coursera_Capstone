import React from "react";
import logo from "../assets/little lemon logo.jpg";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="flex h-20 items-center justify-around  font-Karla text-teal-800">
        <div className="">
          <Link to={"/"}>
            <img src={logo} alt="little-lemon" className="h-10" />
          </Link>
        </div>
        <div className="flex">
          <Link to={"/"} className="p-1 font-bold">
            Home
          </Link>
          <p className="p-1 text-black">|</p>
          <Link to={"/about"} className="p-1 font-bold">
            About
          </Link>
          <p className="p-1 text-black">|</p>
          <Link to={"/reserve"} className="p-1 font-bold">
            Book Table{" "}
          </Link>
          <p className="p-1 text-black">|</p>
          <Link to={"/login"} className="p-1 font-bold">
            Log In
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
