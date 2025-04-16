import React from "react";
import reslogo from "../../assets/res logo.jpg";
import { Link } from "react-router";

const Hero = () => {
  return (
    <>
      <div className="bg-teal-800 h-150 flex justify-center items-center font-Karla">
        <div className="w-100 h-100 flex flex-col">
          <h1 className="text-yellow-300 font-bold text-6xl m-5 ">
            Little Lemon
          </h1>
          <h2 className="font-bold ml-5 text-white ">Chicago</h2>
          <p className="text-white m-5 ">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <div className="m-5">
            <Link to={"/reserve"} className="p-3 rounded-sm bg-yellow-300">
              Reserve a Table
            </Link>
          </div>
        </div>
        <div>
          <img src={reslogo} alt="" className="rounded-md h-100" />
        </div>
      </div>
    </>
  );
};

export default Hero;
