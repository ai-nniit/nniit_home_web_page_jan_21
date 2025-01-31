import React, { useState } from "react";
import { motion } from "framer-motion";
import slide1 from '../../../assets/slide1.png';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import iit_mobile from '../../../assets/iit_mobile_banner_unacad.webp';
import iit_mobile1 from '../../../assets/iit_mobile_banner2_unacad.webp';

const banners = [
  { id: 1, image: iit_mobile, alt: "Banner 1" },
  { id: 2, image: iit_mobile1, alt: "Banner 2" },
  { id: 3, image: iit_mobile, alt: "Banner 3" },
];

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

  const [mobileIndex, setMobileIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX !== null && endX !== null) {
      if (startX - endX > 50) {
        setMobileIndex((prevIndex) =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
      } else if (endX - startX > 50) {
        setMobileIndex((prevIndex) =>
          prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
      }
    }
    setStartX(null);
    setEndX(null);
  };

  return (
    <>
      <div className="hidden md:block relative w-full h-[300px] mt-16 items-center justify-center overflow-hidden bg-[#f5f5f7]/50">
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
                className={`absolute transition-all duration-500 ease-in-out`}
                style={{
                  transform: isCurrent
                    ? "translateX(0%) scale(1)"
                    : isPrevious
                    ? "translateX(-50%) scale(0.9)"
                    : isNext
                    ? "translateX(50%) scale(0.9)"
                    : "translateX(200%) scale(0.8)",
                  opacity: isCurrent ? 1 : 0.7,
                  zIndex: isCurrent ? 10 : 5,
                  width: isCurrent ? "90%" : "50%",
                  height: "95%",
                }}
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
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
            <FaChevronLeft size={20} />
          </button>
          <button
            className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
            onClick={handleNext}
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Slider */}
      <div
        className="block md:hidden relative w-full h-[220px] max-w-3xl mx-auto overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex items-center transition-transform ease-in-out duration-500"
          style={{
            transform: `translateX(-${mobileIndex * 100}%)`,
          }}
        >
          {banners.map((banner) => (
            <motion.div
            key={banner.id}
            className="flex justify-center items-center min-w-full flex-shrink-0 px-2"
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-[340px] h-32 mt-16 rounded-2xl"
            />
          </motion.div>
          
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="absolute -bottom-0 z-40 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setMobileIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === mobileIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
       
      </div>
    </>
  );
};

export default Bannerr;
