import React, { useState } from "react";
import slide1 from '../../../assets/slide1.png';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Bannerr = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [slide1, slide2, slide3];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative  w-screen h-screen flex-shrink items-center justify-center overflow-hidden bg-white-900 mb-0 gap-0 my-0 py-0">
      {/* Slider Container */}
      <div className="relative flex items-center justify-center w-full h-full">
        {slides.map((slide, index) => {
          const isCurrent = index === currentIndex;
          const isPrevious =
            index === (currentIndex - 1 + slides.length) % slides.length;
          const isNext = index === (currentIndex + 1) % slides.length;

          return (
            <div
              key={index}
              className="absolute transition-transform duration-500 ease-in-out"
              style={{
                transform: isCurrent
                  ? "translateX(0%) scale(1)"
                  : isPrevious
                  ? "translateX(-50%) scale(0.8)"
                  : isNext
                  ? "translateX(50%) scale(0.8)"
                  : "translateX(200%) scale(0.8)", // Off-screen
                opacity: isCurrent ? 1 : 0.8,
                zIndex: isCurrent ? 10 : 5,
                width: "70%",
                height: "50%",
                transition: "transform 0.5s ease, opacity 0.5s ease",
              }}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}  // Corrected the alt text with backticks
                className="w-full h-full object-fit rounded-lg shadow-lg"
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-6 z-20">
        <button
          className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
          onClick={handlePrevious}
        >
          <FaChevronLeft size={30} />
        </button>
        <button
          className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
          onClick={handleNext}
        >
          <FaChevronRight size={30} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Bannerr;
