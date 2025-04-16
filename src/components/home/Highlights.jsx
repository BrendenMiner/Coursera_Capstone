import React from "react";
import MenuCard from "../MenuCard";
import pasta from "../../assets/bigpasta.jpg";
import salad from "../../assets/bigsalad.jpg";
// import fish from "../../assets/fish.jpg";
import tomato from "../../assets/bigtomatobread.jpg";

const specials = [
  {
    name: "Pasta",
    description: "Delicious penne pasta served with white or red sauce",
    image: [pasta],
  },
  {
    name: "Salad",
    description: "Delicious greens served with ceaser or ranch dressing",
    image: [salad],
  },
  // {
  //   name: "Fish",
  //   description: "Delicious white fish served with side of your choice",
  //   image: [fish],
  // },
  {
    name: "Appetizer of the month",
    description: "Delicious bread and tomato XD",
    image: [tomato],
  },
];

const Highlights = () => {
  return (
    <div className="font-Karla font-medium">
      <div className="h-35 flex justify-around items-center">
        <h1 className="text-2xl">Weekly Specials!</h1>
        <button className="bg-yellow-300 p-4 rounded-2xl font-medium">
          See Full Menu
        </button>
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 w-225">
          {specials.map((specials) => (
            <MenuCard
              key={specials.name}
              name={specials.name}
              description={specials.description}
              image={specials.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
