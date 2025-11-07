import React from 'react';

const OrderPizza = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side */}
          <div className="text-center lg:text-left mb-8 lg:mb-0 flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Order Pizza Online
            </h1>
            
            <p className="text-xl text-gray-600 mb-4">
              For Delivery or Pickup
            </p>
            
            <p className="text-gray-500 max-w-xl">
              Fresh, delicious pizzas made to order. Delivery available or pick up at your convenience.
            </p>
          </div>
          
          {/* Right Side */}
          <div className="flex flex-col items-center lg:items-end space-y-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-10 rounded-lg text-lg transition-colors duration-300 shadow-lg">
              Order Now
            </button>
                   
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPizza;