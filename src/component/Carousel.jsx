import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

const Carousel = () => {
  const mode = useSelector((state) => state.theme.mode)
  const carouselRef = useRef(null)

  return (
     <section
        className={`py-8 sm:py-12 border-t ${
          mode === "light" ? "bg-gray-50 border-gray-200" : "bg-gray-800 border-gray-700"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${
              mode === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Our Work
          </h2>
          <div
            ref={carouselRef}
            className="flex space-x-4 sm:space-x-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="min-w-[280px] sm:min-w-[300px] h-48 sm:h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 shadow-md flex-shrink-0"
              >
                Project {i}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Carousel