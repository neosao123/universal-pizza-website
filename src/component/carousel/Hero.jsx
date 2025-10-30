import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const mode = useSelector((state) => state.theme.mode);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStart = useRef(null);

  const slides = [
    { id: 1, image: "/src/assets/hero/pizaa3.png" },
    { id: 2, image: "/src/assets/hero/pizaa1.png" },
    { id: 3, image: "/src/assets/hero/pizaa2.png" },
  ];

  // Auto Slide
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection("next");
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length, isAutoPlaying]);

  // Swipe gestures
  const handleTouchStart = (e) => (touchStart.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (diff > 75) prevSlide();
    else if (diff < -75) nextSlide();
    touchStart.current = null;
  };

  const nextSlide = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className={`relative w-full overflow-hidden flex items-center justify-center transition-all duration-700 ${
        mode === "light" ? "bg-white text-gray-900" : "bg-gray-950 text-gray-100"
      }`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Carousel Wrapper */}
      <div
        className="relative w-full h-[32vh] md:h-[80vh] xl:h-[92vh] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        {slides.map((slide, i) => {
          let position = "translate-x-full opacity-0 scale-105";
          if (i === index) position = "translate-x-0 opacity-100 scale-100 ";
          else if (
            direction === "next" &&
            i === (index - 1 + slides.length) % slides.length
          )
            position = "-translate-x-full opacity-0 scale-105 z-10";
          else if (direction === "prev" && i === (index + 1) % slides.length)
            position = "translate-x-full opacity-0 scale-105 z-10";

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 mt-9 transition-all duration-1000 ease-in-out transform ${position}`}
            >
              <img
                src={slide.image}
                alt={`Slide ${i + 1}`}
                className="w-full h-[30vh] md:h-full md:object-cover object-fill  md:object-center rounded-none"
                loading="lazy"
              />
              {/* Optional Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-40 bg-black/40 backdrop-blur-md rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center hover:bg-black/70 transition-all duration-300 border border-white/30"
          aria-label="Previous Slide"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 bg-black/40 backdrop-blur-md rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center hover:bg-black/70 transition-all duration-300 border border-white/30"
          aria-label="Next Slide"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2 sm:gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
