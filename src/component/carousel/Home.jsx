import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";


export const Home6 = ({ data, tital }) => {
  const mode = useSelector((state) => state.theme.mode);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Scroll to current index
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * 320,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      className="bg-black text-white py-12 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col items-center"
    >
      {/* Section Title */}
      <h2 className="text-3xl font-extrabold text-center mb-10 uppercase tracking-wide text-orange-500">
        {tital}
      </h2>

      {/* Carousel Section */}
      <div className="relative w-full max-w-7xl mx-auto">
        <div
          ref={carouselRef}
          className="flex space-x-6 sm:space-x-8 overflow-x-hidden scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {data.map((slide, i) => (
            <div
              key={slide.id || i}
              className={`${
                mode === "dark" ? "bg-black text-white" : "bg-white text-black"
              } shadow-xl rounded-2xl overflow-hidden w-72 sm:w-80 flex-shrink-0 transition-transform duration-300 ${
                i === index ? "scale-105" : "scale-100"
              }`}
            >
              {/* Image */}
              <div className="w-full h-48 sm:h-56">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col items-center justify-between text-center bg-[#fff8f3] dark:bg-black">
                <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                  {slide.title}
                </h3>
                <button className="bg-[#ff7b00] hover:bg-black hover:text-white text-white text-sm font-semibold rounded-full px-6 py-2 transition-all shadow-lg">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                i === index ? "bg-[#ff7b00] scale-125" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Manual Navigation Arrows */}
        <button
          onClick={() => setIndex((prev) => (prev - 1 + data.length) % data.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#ff7b00] transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % data.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#ff7b00] transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};




 

export const Home5 = ({ data = [], tital }) => {
  const mode = useSelector((state) => state.theme.mode);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Scroll to current index
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * 320,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      className="bg-black text-white mt-12 px-4 sm:px-6 md:px-10 py-10 transition-colors duration-300"
    >
      {/* Section Title */}
      <h2 className="text-3xl font-extrabold text-center mb-10 tracking-wide text-[#ff7b00] uppercase">
        {tital}
      </h2>

      {/* Carousel Section */}
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={carouselRef}
          className="flex space-x-6 sm:space-x-8 overflow-x-hidden scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {data.map((slide, i) => (
            <div
              key={slide.id || i}
              className={`${
                mode === "dark"
                  ? "bg-black"
                  : "bg-white"
              } rounded-2xl shadow-xl overflow-hidden w-72 sm:w-80 flex-shrink-0 transition-all duration-500 ${
                i === index ? "scale-105" : "scale-95"
              } hover:scale-105 hover:shadow-orange-500/40`}
            >
              {/* Image */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 text-center flex flex-col items-center justify-between bg-[#fff8f3] dark:bg-black">
                <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                  {slide.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-2">
                  {slide.description || "Taste the authentic Italian flavor in every bite."}
                </p>
                <button className="mt-5 bg-[#ff7b00] hover:bg-black text-white font-medium rounded-full px-6 py-2 transition-all shadow-md hover:shadow-[#ff7b00]/60">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-[#ff7b00] scale-125"
                  : "bg-gray-400 hover:bg-[#ff7b00]/60"
              }`}
            ></button>
          ))}
        </div>

        {/* Manual Navigation Arrows */}
        <button
          onClick={() => setIndex((prev) => (prev - 1 + data.length) % data.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#ff7b00] transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % data.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#ff7b00] transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};






 






  

export const Home4Left = ({ data = [], title }) => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * 360,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      className="relative overflow-hidden py-14 px-4 sm:px-6 md:px-10 lg:px-14 bg-black text-white transition-colors duration-300"
    >
      {/* Background Orange Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/10 via-transparent to-[#ff7b00]/5 pointer-events-none" />

      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 uppercase tracking-wide text-[#ff7b00]">
        {title}
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Carousel Row */}
        <div
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth pb-6"
        >
          {data.map((slide, i) => (
            <div
              key={slide.id || i}
              className={`group flex-shrink-0 w-[360px] h-[260px] rounded-2xl overflow-hidden bg-white dark:bg-black backdrop-blur-xl shadow-[0_6px_25px_rgb(0,0,0,0.25)] transition-all duration-700 ${
                i === index ? "scale-100 opacity-100" : "scale-95 opacity-90"
              } hover:scale-105 hover:shadow-[0_8px_35px_rgb(255,123,0,0.35)]`}
            >
              <div className="flex h-full">
                {/* Image Left */}
                <div className="flex-shrink-0 w-1/2 h-full relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                </div>

                {/* Content Right */}
                <div className="flex-1 flex flex-col justify-center px-4 md:px-6 py-3">
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
                    {slide.description ||
                      "Freshly baked perfection with cheesy, spicy goodness."}
                  </p>
                  <button className="text-sm md:text-base bg-[#ff7b00] hover:bg-black text-white font-semibold rounded-full px-5 py-2 shadow-md hover:shadow-[#ff7b00]/60 transition-all duration-300">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-[#ff7b00] scale-125 shadow-md"
                  : "bg-gray-400 hover:bg-[#ff7b00]/60"
              }`}
            ></button>
          ))}
        </div>

        {/* Manual Navigation Arrows */}
        <button
          onClick={() => setIndex((prev) => (prev - 1 + data.length) % data.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#ff7b00] transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % data.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#ff7b00] transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};



  

export const Home4Right = ({ data = [], title }) => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Smooth scroll when index changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * 380,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div className="relative overflow-hidden py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-black text-white">
      {/* Orange glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/10 via-transparent to-[#ff7b00]/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-[#ff7b00] mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-[#ff7b00] mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Row */}
          <div
            ref={carouselRef}
            className="flex space-x-8 overflow-x-auto no-scrollbar scroll-smooth pb-8"
          >
            {data.map((slide, i) => (
              <div
                key={slide.id || i}
                className={`group flex-shrink-0 w-[480px] h-[300px] rounded-3xl overflow-hidden bg-white dark:bg-black backdrop-blur-xl shadow-[0_6px_25px_rgb(0,0,0,0.25)] transition-all duration-500 ${
                  i === index
                    ? "scale-105 opacity-100 shadow-[0_8px_30px_rgb(255,123,0,0.3)] ring-2 ring-[#ff7b00]/30"
                    : "scale-95 opacity-85"
                } hover:scale-[1.02]`}
              >
                <div className="flex h-full w-full">
                  {/* Left Content */}
                  <div className="flex-1 flex flex-col justify-between p-6 md:p-7">
                    <div>
                      {/* Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#ff7b00]/10 border border-[#ff7b00]/30 mb-4">
                        <span className="text-xs font-medium text-[#ff7b00]">
                          Featured
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3 leading-tight">
                        {slide.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                        {slide.description ||
                          "Hot, fresh, and delicious — crafted to perfection!"}
                      </p>
                    </div>

                    {/* Button */}
                    <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold transition-all bg-[#ff7b00] text-white rounded-full hover:bg-black hover:text-white shadow-md hover:shadow-[#ff7b00]/60 duration-300">
                      Explore
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Right Image */}
                  <div className="flex-shrink-0 w-[35%] h-full relative overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-10 space-x-3">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-[#ff7b00] scale-125 shadow-lg"
                    : "bg-gray-400 hover:bg-[#ff7b00]/60"
                }`}
              ></button>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => setIndex((prev) => (prev - 1 + data.length) % data.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-black border border-[#ff7b00]/40 rounded-full flex items-center justify-center hover:bg-[#ff7b00] hover:text-white transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => setIndex((prev) => (prev + 1) % data.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-black border border-[#ff7b00]/40 rounded-full flex items-center justify-center hover:bg-[#ff7b00] hover:text-white transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};





  


export const Home3 = ({ data, tital }) => {
  const mode = useSelector((state) => state.theme.mode);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Scroll to current index
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * 340,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      className="bg-black text-white p-4 sm:p-6 md:p-8 lg:p-14 rounded-3xl shadow-lg mt-10 transition-all duration-500"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#ff7b00] to-orange-600 bg-clip-text text-transparent uppercase tracking-wider drop-shadow-md">
        {tital}
      </h2>

      {/* Carousel Section */}
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={carouselRef}
          className="flex space-x-8 overflow-x-hidden scroll-smooth px-2 sm:px-4"
          style={{ scrollbarWidth: "none" }}
        >
          {data.map((slide, i) => (
            <div
              key={slide.id || i}
              className={`relative bg-white rounded-3xl shadow-2xl w-72 sm:w-80 flex-shrink-0 overflow-hidden transition-all duration-700 ${
                i === index
                  ? "scale-105 shadow-[#ff7b00]/40"
                  : "scale-100 opacity-90"
              } hover:scale-105 hover:shadow-[#ff7b00]/60 hover:opacity-100`}
            >
              {/* Image Section */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-3xl">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col items-center text-center bg-white">
                <h3 className="text-lg font-bold text-black mb-1 uppercase">
                  {slide.title}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-2 mb-3">
                  {slide.description ||
                    "Fresh, hot & cheesy! Taste our best pizza selection."}
                </p>
                <button className="mt-2 px-8 py-2 text-sm font-semibold rounded-full text-white bg-[#ff7b00] hover:bg-orange-600 transition-all shadow-md hover:shadow-orange-500/50">
                  View
                </button>
              </div>

              {/* Border Accent */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent hover:ring-[#ff7b00]/50 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                i === index
                  ? "bg-[#ff7b00] scale-125 shadow-md"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>

        {/* Manual Navigation Arrows */}
        <button
          onClick={() => setIndex((prev) => (prev - 1 + data.length) % data.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#ff7b00] transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % data.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#ff7b00] transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};





  


export const Home2 = ({ data, tital }) => {
  const mode = useSelector((state) => state.theme.mode);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Scroll to current index
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * 320,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      className="bg-black text-white mt-8 p-4 sm:p-6 md:p-8 lg:p-12 mx-2 sm:mx-4 md:mx-10 lg:mx-20 rounded-3xl shadow-2xl border border-[#ff7b00]/20 transition-all duration-500"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#ff7b00] to-orange-600 bg-clip-text text-transparent uppercase tracking-wide drop-shadow-md">
          {tital}
        </h2>
        <div className="w-24 h-1 bg-[#ff7b00] mx-auto rounded-full mt-2"></div>
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={carouselRef}
          className="flex space-x-8 overflow-x-hidden scroll-smooth px-4 py-6"
          style={{ scrollbarWidth: "none" }}
        >
          {data.map((slide, i) => (
            <div
              key={slide.id || i}
              className={`relative bg-white rounded-2xl w-72 sm:w-80 flex-shrink-0 overflow-hidden shadow-lg transition-all duration-500 group ${
                i === index
                  ? "scale-105 ring-2 ring-[#ff7b00]/40 shadow-[#ff7b00]/30"
                  : "scale-100 hover:scale-105"
              } hover:shadow-xl hover:ring-1 hover:ring-[#ff7b00]/30`}
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#ff7b00]/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm shadow-md">
                    Featured
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between min-h-[180px] bg-white">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-black uppercase">
                    {slide.title}
                  </h3>
                  <p className="text-gray-700 text-sm line-clamp-2 mb-4">
                    {slide.description ||
                      "Enjoy our handcrafted pizzas made with authentic ingredients."}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#ff7b00] rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">Available</span>
                  </div>
                  <button className="bg-[#ff7b00] hover:bg-orange-600 text-white font-semibold text-sm rounded-xl px-6 py-2 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px] active:translate-y-0">
                    View Details
                  </button>
                </div>
              </div>

              {/* Subtle Glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent hover:ring-[#ff7b00]/40 transition-all duration-500 pointer-events-none" />

              {/* Shine on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative w-12 h-2 rounded-full transition-all duration-500 overflow-hidden ${
                i === index
                  ? "bg-[#ff7b00] shadow-lg scale-110"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + data.length) % data.length)
          }
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl border border-[#ff7b00]/30 transition-all duration-300 hover:scale-110"
        >
          <svg
            className="w-5 h-5 text-[#ff7b00]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => setIndex((prev) => (prev + 1) % data.length)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl border border-[#ff7b00]/30 transition-all duration-300 hover:scale-110"
        >
          <svg
            className="w-5 h-5 text-[#ff7b00]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};





export const Home = ({ data, tital }) => {
  const mode = useSelector((state) => state.theme.mode);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(328);

  // Update item width based on screen size
  useEffect(() => {
    const updateItemWidth = () => {
      if (window.innerWidth < 640) setItemWidth(window.innerWidth * 0.85);
      else if (window.innerWidth < 768) setItemWidth(280);
      else if (window.innerWidth < 1024) setItemWidth(300);
      else setItemWidth(328);
    };
    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);
    return () => window.removeEventListener("resize", updateItemWidth);
  }, []);

  // 🔹 Manual Scroll Tracking (no auto-scroll)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const totalWidth = carousel.scrollWidth - carousel.clientWidth;
      const progress = scrollLeft / totalWidth;
      const newIndex = Math.round(progress * (data.length - 1));
      setIndex(newIndex);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [data]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div
        className="relative bg-white text-black mt-4 sm:mt-6 lg:mt-8 p-4 sm:p-6 lg:p-8 xl:p-16 mx-auto rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 transition-all duration-700 max-w-7xl w-full"
      >
        {/* Header */}
        <div className="relative text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              Featured Pizzas
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-black via-gray-800 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6 tracking-tight">
            {tital}
          </h2>
          <div className="flex justify-center items-center gap-3 sm:gap-4">
            <div className="w-12 h-0.5 sm:w-16 sm:h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-bounce"></div>
            <div className="w-12 h-0.5 sm:w-16 sm:h-1 bg-gradient-to-l from-gray-300 to-gray-400 rounded-full"></div>
          </div>
        </div>

        {/* Manual Scroll Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div
            ref={carouselRef}
            className="flex space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto scroll-smooth px-2 sm:px-4 py-4 sm:py-6 lg:py-8 no-scrollbar"
          >
            {data.map((slide, i) => (
              <div
                key={i}
                className={`relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex-shrink-0 overflow-hidden shadow-xl transition-all duration-500 group cursor-pointer w-[85vw] sm:w-72 md:w-80 lg:w-80 ${
                  i === index
                    ? "scale-105 ring-2 ring-orange-400/30"
                    : "hover:scale-105 hover:ring-1 hover:ring-orange-400/20"
                }`}
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      NEW
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col justify-between min-h-[150px]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {slide.title}
                    </h3>
                    <span className="text-amber-500">★★★★☆</span>
                  </div>
                  <div className="flex items-center justify-between pt-3">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      $12.99
                    </span>
                    <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Progress */}
          <div className="flex justify-center mt-8 space-x-3">
            {data.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  i === index
                    ? "bg-orange-500 scale-110"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


