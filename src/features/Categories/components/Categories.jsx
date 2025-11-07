import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import 'swiper/css';

// Import your images
import SignaturePizza from "../../../assets/images/SignaturePizza-1.png";
import createPizza from "../../../assets/images/Createyourown-1.png";
import Sides from "../../../assets/images/Sides.png";
import dips from "../../../assets/images/dips.png";
import drinks from "../../../assets/images/drinks.png";
import Deals from "../../../assets/images/Deals-1.png";

const CategoryPizza = () => {
    const navigate = useNavigate();

    const categories = [
        { id: 6, name: 'Deals', image: Deals, path: 'specialoffer', alt: 'Deals' },
        { id: 1, name: 'Signature Pizza', image: SignaturePizza, path: 'signaturepizza', alt: 'Signature Pizza' },
        { id: 2, name: 'Sides', image: Sides, path: 'sides', alt: 'Sides' },
        { id: 3, name: 'Dips', image: dips, path: 'dips', alt: 'Dips' },
        { id: 4, name: 'Drink', image: drinks, path: 'drinks', alt: 'Drinks' },
        { id: 5, name: 'Create Your Own', image: createPizza, path: 'create-your-own', alt: 'Create Your Own' },
    ];

    const handleCategorySelect = (path) => {
        navigate(`/${path}`);
    };

    return (
        <section className="py-12 ">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider block mb-2">
                        CHOOSE YOUR FLAVOR
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Shop By Category
                    </h2>
                </div>

                {/* Categories Swiper */}
                <div className="max-w-7xl mx-auto">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={16}
                        breakpoints={{
                            0: { slidesPerView: 2, spaceBetween: 12 },
                            480: { slidesPerView: 3, spaceBetween: 12 },
                            640: { slidesPerView: 4, spaceBetween: 16 },
                            768: { slidesPerView: 5, spaceBetween: 16 },
                            1024: { slidesPerView: 6, spaceBetween: 20 },
                        }}
                        modules={[A11y]}
                        className="category-swiper"
                    >
                        {categories.map((category) => (
                            <SwiperSlide key={category.id}>
                                <div 
                                    className="group cursor-pointer flex flex-col items-center text-center p-4 transition-all duration-300  rounded-2xl"
                                    onClick={() => handleCategorySelect(category.path)}
                                >
                                    {/* Image Container */}
                                    <div className="w-24 h-24 md:w-28 md:h-28 lg:w-42 lg:h-42 mb-4 relative">
                                        <div className="absolute inset-0  rounded-2xl transform group-hover:scale-110 transition-transform duration-300"></div>
                                        <img
                                            src={category.image}
                                            alt={category.alt}
                                            className="w-full h-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    
                                    {/* Category Name */}
                                    <h3 className="font-semibold text-gray-800 text-sm md:text-base lg:text-lg group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                                        {category.name}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

      
            <style jsx global>{`
                .category-swiper {
                    padding: 20px 10px;
                }
                
                .category-swiper .swiper-slide {
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </section>
    );
};

export default CategoryPizza;