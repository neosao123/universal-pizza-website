import React from "react";

const PreviewWindow = ({
  image,
  label,
  price = 0,
  quantity,
  onQuantityChange,
  onAddToCart,
  selectedSize,
  selectedOptions = [],
}) => {
  // 🧮 Calculate total price (base price + selected options)
  const optionsTotal = selectedOptions.reduce(
    (acc, option) => acc + (option?.price || 0),
    0
  );
  const finalPrice = price + optionsTotal;
  const total = finalPrice * quantity;

  return (
    <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* ---- Image Section ---- */}
      <div className="relative w-auto h-30 bg-gradient-to-b from-orange-50 to-white flex items-center justify-center p-4 overflow-hidden">
        <div className="bg-white rounded-xl shadow-sm ">
          <img
            src={image}
            alt={label || "Preview"}
            className="object-contain w-auto h-20 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* ---- Content Section ---- */}
      <div className="p-6 flex flex-col items-center text-center space-y-5">
        {/* Product Label */}
        {label && (
          <h3 className="text-2xl font-semibold text-gray-800 tracking-wide">
            {label}
          </h3>
        )}

        {/* Selected Options */}
        {selectedOptions.length > 0 && (
          <div className="w-full text-sm text-gray-700 bg-orange-50 p-3 rounded-lg text-left">
            <p className="font-semibold mb-1 text-gray-800">Selected Options:</p>
            <ul className="list-disc list-inside space-y-1">
              {selectedOptions.map((option, index) => (
                <li key={index}>
                  {option.text
                    ? `${option.text} (${option.portion || "Full"}) - ₹${option.price}`
                    : option}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Price */}
        {/* <div className="text-center">
          <p className="text-lg text-gray-500">Base Price:</p>
          <p className="text-2xl font-bold text-orange-600 mt-1">
            ₹{finalPrice.toFixed(2)}
          </p>
        </div> */}

        {/* Quantity Controller */}
        <div className="flex items-center gap-5 mt-2">
          <button
            onClick={() => onQuantityChange("dec")}
            className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95 font-bold text-xl flex items-center justify-center shadow-sm"
          >
            –
          </button>
          <span className="text-xl font-semibold text-gray-800 min-w-[30px] text-center">
            {quantity}
          </span>
          <button
            onClick={() => onQuantityChange("inc")}
            className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95 font-bold text-xl flex items-center justify-center shadow-sm"
          >
            +
          </button>
        </div>

        {/* Total */}
        <div className="mt-2">
          <p className="text-gray-600 text-lg">
            Total:{" "}
            <span className="text-orange-600 font-bold text-2xl">
              ₹{total.toFixed(2)}
            </span>
          </p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          disabled={!label}
          className={`w-full py-3 rounded-xl font-semibold text-white shadow-md transition-all duration-300 ${
            label
              ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PreviewWindow;
