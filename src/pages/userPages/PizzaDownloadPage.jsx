import React from 'react';
import mobile2 from "../../assets/downloades/mobileimg1.png";
import mobile1 from "../../assets/downloades/mobile1.png";
import android from "../../assets/downloades/google pay store.svg"
import apple from "../../assets/downloades/apple store.svg"

const PizzaDownloadPage = () => {
  return (
    <div className="md:min-h-[60vh]lg:min-h-[20vh] min-h-[40] text-white py-4 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-center gap-4 ">
          {/* Header Section */}
          <div className="flex-1 max-w-6xl mx-auto md:mx-0 md:text-center">
            <h1 className="text-3xl sm:text-2xl md:text-3xl text-orange-500  lg:text-4xl font-bold mb-4 md:mb-6">
              Download Our
              <span className="block text-orange-500 mt-2">Exclusive Pizza App</span>
            </h1>
            <p className="text-base sm:text-md text-gray-500 leading-relaxed mb-6 md:mb-8">
              Enjoy exclusive offers, seamless ordering, <br/>and track your delivery — all from the palm of your hand.
            </p>
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center md:justify-center items-center">
              <img
                src={android}
                alt='Google Play Store'
                className="w-40 sm:w-44 md:w-48 cursor-pointer transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src={apple}
                alt='Apple App Store'
                className="w-40 sm:w-44 md:w-48 cursor-pointer transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          

          {/* Mobile Phone Images */}
          <div className="flex-1 relative flex items-center justify-center">
            {/* Subtle Glow Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/10 blur-3xl rounded-full" />
            </div>

            {/* Overlapping Phones */}
            <div className="relative flex items-center justify-center">
              <img
                src={mobile1}
                alt="Mobile App Home"
                className="h-80 sm:h-48 md:h-56 lg:h-94 w-auto rounded-xl sm:rounded-2xl shadow-xl transform rotate-[-8deg] hover:rotate-0 transition-transform duration-500 z-10"
              />
              <img
                src={mobile2}
                alt="Mobile App Menu"
                className="h-80 sm:h-48 md:h-56 lg:h-94 w-auto rounded-xl sm:rounded-2xl shadow-xl -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10 transform rotate-[8deg] hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaDownloadPage;