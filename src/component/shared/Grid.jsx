import React from "react";
import { useSelector } from "react-redux";
import { Star } from "lucide-react";

const Grid = ({ data, title }) => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className={` top-0 py-5 ${mode === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      {/* Section Title */}
      <h2
        className={`text-3xl top-0 font-bold text-center p-3 mb-10 ${
          mode === "dark" ? "text-yellow-400" : "text-orange-600"
        }`}
      >
        {title}
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg p-3 text-center transition-all duration-300 hover:scale-105 ${
              mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            {/* Image */}
            <div className="flex justify-center mb-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-full border-2 border-orange-500"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

            {/* ⭐ Star Rating */}
            <div className="flex justify-center mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className={`mx-0.5 ${
                    star <= item.rating
                      ? mode === "dark"
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-orange-500 text-orange-500"
                      : "text-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-4 line-clamp-2">
              {item.description}
            </p>

            {/* View Button */}
            <button
              className={`px-4 py-2 rounded-full font-medium ${
                mode === "dark"
                  ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              } transition`}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
