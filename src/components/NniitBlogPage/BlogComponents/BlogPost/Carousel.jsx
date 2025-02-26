import React, { useState } from 'react';

const Carousel = ({ ads }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Carousel Content */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={ads[currentIndex].image}
          alt={ads[currentIndex].alt}
          className="w-full h-auto"
        />
        <div className="p-4 bg-gray-800 text-white text-center">
          <p>{ads[currentIndex].text}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
        onClick={handlePrev}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
        onClick={handleNext}
      >
        &#8250;
      </button>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {ads.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
