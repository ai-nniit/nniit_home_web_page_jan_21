import React, { useRef } from "react";
import "tailwindcss/tailwind.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import card1 from "../../assets/Card1.png";
import card2 from "../../assets/Card2.png";
import card3 from "../../assets/Card5.png";
import card4 from "../../assets/Card4.png";
import card5 from "../../assets/Card3.png";

const DesktopFeatureSection = () => {
  const images = [card1, card2, card3, card4, card5];
  const scrollContainerRef = useRef(null);

  // Scroll left function
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full bg-[#f5f5f7] py-16 px-8">
      <div className="mb-9 text-center">
      <header className="mb-4 px-3 -ml-[-1] md:ml-6">
      <div className="flex items-center space-x-1 mb-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className="relative -top-1.2"
        >
          <path
            d="M24 11.9914C19.2924 12.4191 16.5877 12.8125 14.9272 14.1126C12.9757 15.6351 12.5136 18.4234 12 24C11.4693 18.2181 10.99 15.4469 8.85021 13.9587C7.18973 12.7954 4.50214 12.4191 0 12.0086C4.69044 11.5809 7.41227 11.1875 9.05564 9.90449C11.0243 8.36493 11.4864 5.59373 12 0C12.4793 5.14897 12.9073 7.90306 14.4993 9.49394C16.0913 11.0848 18.8645 11.5296 24 11.9914Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="12"
              y1="0"
              x2="12"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#39B6D8" />
              <stop offset="0.5" stopColor="#F7D344" />
              <stop offset="1" stopColor="#E38330" />
            </linearGradient>
          </defs>
        </svg>
        <p className="text-[10px] text-gray-400 mt-2 font-serif font-light">
          DISCOVER NEW PERSPECTIVES
        </p>
      </div>
  
      <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-black -mt-0 text-left">
        Features We Provide
      </h3>
    </header>
      </div>

      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition hidden md:block"
      >
        <IoIosArrowBack size={24} />
      </button>

      {/* Scrollable Cards Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-2 md:px-28 px-0 py-2 scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 h-[370px] ${image === card2 ? "w-[300px]" : "w-[330px]"} rounded-3xl shadow-md overflow-hidden`}
          >
            <div
              className="h-full w-full bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition hidden md:block"
      >
        <IoIosArrowForward size={24} />
      </button>

      {/* Hide Scrollbar (for WebKit browsers) */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default DesktopFeatureSection;
