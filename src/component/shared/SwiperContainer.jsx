// components/Swiper/SwiperContainer.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const SwiperContainer = ({
  slides = [],
  renderSlide,
  swiperProps = {},
  navigation = true,
  pagination = true,
  autoplay = true,
  effect = 'slide',
  className = '',
  slideClassName = ''
}) => {
  const defaultSwiperProps = {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    effect,
    speed: 800,
    autoplay: autoplay ? { delay: 5000, disableOnInteraction: false } : false,
    navigation: navigation ? {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    } : false,
    pagination: pagination ? {
      clickable: true,
      el: '.swiper-pagination',
    } : false,
    loop: true,
    spaceBetween: 20,
    ...swiperProps
  };

  return (
    <div className={`relative ${className}`}>
      <Swiper {...defaultSwiperProps} className="h-full">
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id || index} className={slideClassName}>
            {renderSlide ? renderSlide(slide, index) : slide}
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        {navigation && (
          <>
            <div className="swiper-button-prev !w-12 !h-12 !bg-white/80 !text-gray-800 !rounded-full !shadow-lg hover:!bg-white hover:!scale-110 after:!text-lg"></div>
            <div className="swiper-button-next !w-12 !h-12 !bg-white/80 !text-gray-800 !rounded-full !shadow-lg hover:!bg-white hover:!scale-110 after:!text-lg"></div>
          </>
        )}

        {/* Pagination */}
        {pagination && (
          <div className="swiper-pagination !bottom-4"></div>
        )}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;