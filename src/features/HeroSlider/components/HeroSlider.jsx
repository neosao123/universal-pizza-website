// src/components/HeroSlider.jsx
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaShoppingBag } from 'react-icons/fa';
import { HeroSliderApi } from '../api/HeroSliderApi';

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        setLoading(true);
        const result = await HeroSliderApi.getherosliderData();

        let slidesData = [];
        if (Array.isArray(result)) slidesData = result;
        else if (Array.isArray(result?.data)) slidesData = result.data;

        if (slidesData.length === 0) {
          setError("No slides found");
          return;
        }

        // Fix escaped slashes in URLs
        const fixUrl = (url) => url?.replace(/\\/g, '') || '';

        const mapped = slidesData.map((item) => ({
          id: item.code,
          image: fixUrl(item.background_image),
          image_md: fixUrl(item.background_image_md) || fixUrl(item.background_image),
          image_sm: fixUrl(item.background_image_sm) || fixUrl(item.background_image),
          title: item.title,
          buttonText: item.btnName || "Order Now",
          url: item.url || "#",
        }));

        setSlides(mapped);
      } catch (err) {
        setError("Failed to load slider");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const next = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  if (loading) {
    return (
      <div className="w-full h-96 md:h-[500px] bg-gray-800 flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  if (error || slides.length === 0) {
    return (
      <div className="w-full h-96 md:h-[500px] bg-red-900 flex items-center justify-center text-white text-xl">
        {error} <button onClick={() => window.location.reload()} className="ml-4 underline">Retry</button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <picture>
            <source media="(min-width: 768px)" srcSet={slide.image_md} />
            <img
              src={slide.image_sm}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </picture>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          {/* Content: Title + Button */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
                  {slide.title}
                </h1>

                {/* Order Button - Big & Bold */}
                <a
                  href={slide.url}
                  className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-5 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <FaShoppingBag size={24} />
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur hover:bg-white/50 text-white p-3 rounded-full z-10"
          >
            <FaChevronLeft size={28} />
          </button>
          <button
            onClick={next}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur hover:bg-white/50 text-white p-3 rounded-full z-10"
          >
            <FaChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HeroSlider;