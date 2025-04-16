import React from "react";
import { Link } from "react-router";

const MenuCard = (specials) => {
  return (
    <>
      <Link className="m-5">
        <div className="">
          <img
            src={specials.image}
            alt="menu-image"
            className="rounded-t-2xl "
          />
        </div>
        <div className="bg-teal-800 rounded-b-2xl h-75">
          <h1 className="p-5 text-white">{specials.name}</h1>
          <p className="p-5 text-white h-25">{specials.description}</p>
          <div className="p-5">
            <button className="p-5 bg-yellow-300 rounded-2xl">
              See Full Menu
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MenuCard;
