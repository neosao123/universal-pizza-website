import React from "react";

const categories = [
  { name: "Veg Pizza", image: "/src/assets/catagory/veg pizaa.jpeg" },
  { name: "Non-Veg Pizza", image: "/src/assets/catagory/non-veg pizaa.jpeg" },
  { name: "Cheese Burst", image: "/src/assets/catagory/Cheese Burst.jpeg" },
  { name: "Margherita", image: "/src/assets/catagory/Margherita pizaa.jpeg" },
  { name: "Spicy Delight", image: "/src/assets/catagory/Spicy Delight pizaa.jpeg" },
  { name: "Margherita", image: "/src/assets/catagory/Margherita pizaa.jpeg" },
 
];

const PizzaCategoryCard = () => {
  return (
  <div className="bg-gray-50 py-5">
    <h1 className="text-3xl font-bold text-center p-5  md:mt-4 text-[#D32F2F]">
      Our Pizza Categories 🍕
    </h1>

    <div className="flex flex-wrap justify-center items-center gap-3 mt-2 max-w-7xl mx-auto">
      {categories.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-2xl hover:shadow-xl transition duration-300 p-5 w-40 sm:w-44 md:w-48"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full mb-3"
          />
          <h3 className="text-center text-base md:text-lg font-semibold text-gray-800">
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  </div>
);

};

export default PizzaCategoryCard;
