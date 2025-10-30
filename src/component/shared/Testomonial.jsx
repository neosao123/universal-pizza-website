import React from 'react';
import { testimonials } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testomonial = () => {
  const renderStars = (stars) => {
    return Array.from({ length: stars }, (_, index) => (
      <svg
        key={index}
        className="w-5 h-5 text-[#FDB241]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
  <section className="bg-gray-50 sm:py-4">
    <div className="mx-auto max-w-7xl sm:px-6">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <p className="text-lg font-medium p-3 text-gray-600 font-pj">
            2,157 people have said how good Rareblocks
          </p>
          <h2 className="mt-1 text-3xl font-bold p-2 text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Our happy clients say
          </h2>
        </div>

        <div className="relative mt-2  md:order-2 p-2 w-full">
          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="relative max-w-7xl mt-2 mx-auto"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex p-3 flex-col overflow-hidden">
                  <div className="flex flex-col justify-between flex-1 p-1 bg-white lg:px-1">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <div className="ml-4">
                          <p className="text-base font-bold text-gray-900 font-pj">
                            {testimonial.name}
                          </p>
                          <p className="mt-0.5 text-sm font-pj text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          {testimonial.quote}
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex mt-5 items-center">
                      {renderStars(testimonial.stars)}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </section>
);

};

export default Testomonial;
