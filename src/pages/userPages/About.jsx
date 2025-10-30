import React from "react";
import { motion } from "framer-motion";
import smallimg from "../../assets/catagory/Cheese Burst.jpeg"
import bigimg  from "../../assets/catagory/non-veg pizaa.jpeg"

const About = () => {
  return (
    <section className="py-5 lg:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-10"
        >
          <h1 className="text-4xl sm:text-5xl p-5 lg:text-6xl font-bold text-[#D32F2F] ">
            About Us
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-medium font-pj">
            Discover our passion for crafting delicious, 100% vegetarian pizzas that delight every palate.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 rounded-3xl -rotate-3 scale-105 -z-10" />
              
              {/* Main Image Container */}
               <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {/* Large Main Image */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={bigimg}
          alt="Delicious Pizza"
          loading="lazy"
          className="w-full h-64 sm:h-80 lg:h-96  object-fill rounded-2xl shadow-xl"
        />
        {/* Decorative Badge */}
        <div className="absolute top-3 right-3 bg-[#D32F2F] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          100% Veg
        </div>
      </motion.div>

      {/* Small Image */}
      <motion.div
        className="flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={smallimg}
          alt="Pizza Slice"
          loading="lazy"
          className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-xl shadow-lg border-4 border-white"
        />
      </motion.div>
    </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-pj">
                  Crafting Pizza Perfection Since 2010
                </h2>
                
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-pj">
                  <p>
                    At <span className="font-semibold text-[#E64A19] font-pj">PanjabPizza</span>,
                    we're passionate about crafting delicious, 100% vegetarian pizzas
                    that bring together bold, flavorful ingredients to create a truly
                    satisfying experience.
                  </p>

                  <p>
                    Every pizza is made with care, blending tradition with creativity
                    to please every palate. From timeless classics to signature creations,
                    we're dedicated to delivering exceptional quality, taste, and service.
                  </p>

                  <p>
                    What started as a small local kitchen has grown into a favorite
                    destination for pizza lovers who crave something unique, wholesome,
                    and made with love.
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#D32F2F] rounded-full"></div>
                  <span className="text-gray-700 font-medium font-pj">Fresh Ingredients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#D32F2F] rounded-full"></div>
                  <span className="text-gray-700 font-medium font-pj">Homemade Dough</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#D32F2F] rounded-full"></div>
                  <span className="text-gray-700 font-medium font-pj">Family Recipes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#D32F2F] rounded-full"></div>
                  <span className="text-gray-700 font-medium font-pj">Eco-Friendly</span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D32F2F] text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
              >
               Know More →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;