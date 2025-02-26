import React, { useRef } from "react";
import "tailwindcss/tailwind.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import card1 from "../../assets/Card1.png";
import card2 from "../../assets/Card2.png";
import card3 from "../../assets/Card5.png";
import card4 from "../../assets/Card4.png";
import card5 from "../../assets/Card3.png";

const MobileFeatureSection = () => {
  const images = [card1, card2, card3, card4, card5];
  const scrollContainerRef = useRef(null);

  // Scroll left function
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full bg-[#f5f5f7] py-10 px-2 md:hidden">
      <div className="mb-6 text-center">
        <header className="mb-4 px-3">
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
          <h3 className="text-lg font-extrabold font-serif text-black text-left">
            Features We Provide
          </h3>
        </header>
      </div>

      {/* Scrollable Cards Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-3 px-0 py-0 scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 h-[350px] ${
              image === card2 ? "w-[250px]" : "w-[310px]"
            } rounded-xl shadow-md overflow-hidden`}
          >
            <div
              className="h-full w-full bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Hide Scrollbar (for WebKit browsers) */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MobileFeatureSection;
