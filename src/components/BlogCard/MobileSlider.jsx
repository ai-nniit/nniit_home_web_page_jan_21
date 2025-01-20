import React, { useState, useEffect, useRef } from "react";
import { AiFillRead } from "react-icons/ai";
import { FaNewspaper, FaChartLine, FaUserFriends } from "react-icons/fa";
import { BsFileEarmarkText } from "react-icons/bs";

const MobileSlider = () => {
  const sliderRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Check if content is overflowing
    const checkOverflow = () => {
      setIsOverflowing(slider.scrollWidth > slider.clientWidth);
    };

    // Handle scroll to update progress
    const handleScroll = () => {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      const currentScroll = slider.scrollLeft;

      // Calculate scroll progress as a percentage
      const progress = (currentScroll / maxScrollLeft) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    // Scroll to the third icon
    const scrollToThirdItem = () => {
      const thirdItemWidth = 80 + 16; // Icon min-width + space-x padding (80px + 16px)
      const position = thirdItemWidth * 2; // 0-based index: third item is at 2nd index
      slider.scrollLeft = position;
    };

    // Initial check, set scroll position, and add event listeners
    checkOverflow();
    scrollToThirdItem(); // Set default scroll position
    slider.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkOverflow);

    // Cleanup event listeners
    return () => {
      slider.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-2xl font-serif font-extrabold flex items-center -ml-5 md:text-4xl sm:text-2xl whitespace-nowrap">
          Explore all our{' '}
          <span className="text-blue-600 inline-flex relative ml-2">
            offerings
            <span className="absolute bottom-[-2px] left-0 right-0 bg-gradient-to-r from-yellow-500 to-transparent h-[5px]"></span>
          </span>
        </h1>

        <br/>
        {/* Scrollable Content */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto no-scrollbar relative px-4"
          style={{
            scrollBehavior: "smooth",
            whiteSpace: "nowrap",
          }}
        >
          {/* Navigation Items */}
          <div className="flex space-x-4 items-center">
            <NavItem icon={<FaNewspaper size={16} />} text="JEE" />
            <NavItem icon={<AiFillRead size={16} />} text="NEET" />
            <NavItem icon={<BsFileEarmarkText size={16} />} text="IPMAT" />
            <NavItem icon={<FaChartLine size={16} />} text="SAT" />
            <NavItem icon={<FaUserFriends size={16} />} text="K-12" />
            <NavItem icon={<FaNewspaper size={16} />} text="K-11" />
            <NavItem icon={<AiFillRead size={16} />} text="K-10" />
            <NavItem icon={<BsFileEarmarkText size={16} />} text="K-9" />
            <NavItem icon={<FaChartLine size={16} />} text="K-8" />
            <NavItem icon={<FaUserFriends size={16} />} text="K-7" />
          </div>
        </div>

        {/* Custom Scrollbar */}
        {isOverflowing && (
          <div className="relative mt-2">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
              <div
                className="bg-gray-500 h-full"
                style={{
                  width: `${scrollProgress}%`,
                  transition: "width 0.1s ease",
                }}
              />
            </div>
          </div>
        )}

        {/* Gradient Overlay to Indicate More Content */}
        {isOverflowing && (
          <div
            className="absolute right-0 top-0 h-full w-8 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.8) 100%)",
            }}
          />
        )}
      </div>
    </section>
  );
};

// Nav Item Component
const NavItem = ({ icon, text }) => (
  <div
    className="flex flex-col items-center justify-center cursor-pointer"
    style={{
      minWidth: "80px", // Ensure enough width for each item
    }}
  >
    <div className="text-gray-700">{icon}</div>
    <span className="text-xs font-medium text-black mt-1">{text}</span>
  </div>
);

export default MobileSlider;
