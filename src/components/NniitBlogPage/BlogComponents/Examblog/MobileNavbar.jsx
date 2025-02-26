// import React, { useState, useEffect, useRef } from "react";
// import { AiFillRead } from "react-icons/ai"; // Quick Reads Icon
// import { FaNewspaper, FaChartLine, FaUserFriends } from "react-icons/fa"; // Other icons
// import { BsFileEarmarkText } from "react-icons/bs"; // E-Paper Icon

// const MobileSlider = () => {
//   const [scrollProgress, setScrollProgress] = useState(0); // Horizontal scroll progress
//   const sliderRef = useRef(null);

//   // Update scroll progress based on horizontal scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (sliderRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
//         const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
//         setScrollProgress(progress);
//       }
//     };

//     const slider = sliderRef.current;
//     slider.addEventListener("scroll", handleScroll);

//     // Cleanup listener
//     return () => slider.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className="fixed top-[57px] left-0 w-full shadow-md md:hidden z-50"
//       style={{
//         backgroundColor: "rgba(255, 255, 255, 0.95)", // Slight opacity
//         height: "53px", // Thin section
//       }}
//     >
//       {/* Scrollable Content */}
//       <div
//         ref={sliderRef}
//         className="flex overflow-x-auto no-scrollbar relative"
//         style={{
//           scrollBehavior: "smooth",
//           whiteSpace: "nowrap", // Prevent items from wrapping
//         }}
//       >
//         {/* Navigation Items */}
//         <div className="flex space-x-4 px-2 py-2 items-center">
//           <NavItem icon={<FaNewspaper size={16} />} text="Today's News" />
//           <NavItem icon={<AiFillRead size={16} />} text="Quick Reads" />
//           <NavItem icon={<BsFileEarmarkText size={16} />} text="E-Paper" />
//           <NavItem icon={<FaChartLine size={16} />} text="Stock" />
//           <NavItem icon={<FaUserFriends size={16} />} text="Recos" />
//           <NavItem icon={<FaNewspaper size={16} />} text="News" />
//           <NavItem icon={<AiFillRead size={16} />} text="Reads" />
//           <NavItem icon={<BsFileEarmarkText size={16} />} text="Paper" />
//           <NavItem icon={<FaChartLine size={16} />} text="Market" />
//           <NavItem icon={<FaUserFriends size={16} />} text="Social" />
//         </div>

//         {/* Full-width Red Scroll Bar */}
//         <div
//           className="absolute bottom-0 left-0 h-1 bg-red-500"
//           style={{
//             width: `${scrollProgress}%`, // Dynamic scroll width
//             transition: "width 0.1s ease-out", // Smooth transition
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// // Nav Item Component
// const NavItem = ({ icon, text }) => (
//   <div
//     className="flex flex-col items-center justify-center cursor-pointer"
//     style={{
//       minWidth: "80px", // Ensure enough width for each item
//     }}
//   >
//     <div className="text-gray-700">{icon}</div>
//     <span className="text-xs font-medium text-black mt-1">{text}</span>
//   </div>
// );

// export default MobileSlider;





// import React, { useState, useEffect, useRef } from "react";
// import { AiFillRead } from "react-icons/ai"; // Quick Reads Icon
// import { FaNewspaper, FaChartLine, FaUserFriends } from "react-icons/fa"; // Other icons
// import { BsFileEarmarkText } from "react-icons/bs"; // E-Paper Icon

// const MobileSlider = () => {
//   const sliderRef = useRef(null);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (!slider) return;

//     const handleScroll = () => {
//       const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
//       const currentScroll = slider.scrollLeft;
      
//       // Calculate scroll progress as a percentage
//       const progress = (currentScroll / maxScrollLeft) * 100;
//       setScrollProgress(Math.min(Math.max(progress, 0), 100));
//     };

//     // Add scroll event listener
//     slider.addEventListener('scroll', handleScroll);

//     // Cleanup event listener
//     return () => {
//       slider.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className="fixed top-[57px] left-0 w-full shadow-md md:hidden z-50"
//       style={{
//         backgroundColor: "rgba(255, 255, 255, 0.95)", // Slight opacity
//         height: "53px", // Thin section
//       }}
//     >
//       {/* Scrollable Content */}
//       <div
//         ref={sliderRef}
//         className="flex overflow-x-auto no-scrollbar relative"
//         style={{
//           scrollBehavior: "smooth",
//           whiteSpace: "nowrap", // Prevent items from wrapping
//         }}
//       >
//         {/* Navigation Items */}
//         <div className="flex space-x-4 px-2 py-2 items-center">
//           <NavItem icon={<FaNewspaper size={16} />} text="Today's News" />
//           <NavItem icon={<AiFillRead size={16} />} text="Quick Reads" />
//           <NavItem icon={<BsFileEarmarkText size={16} />} text="E-Paper" />
//           <NavItem icon={<FaChartLine size={16} />} text="Stock" />
//           <NavItem icon={<FaUserFriends size={16} />} text="Recos" />
//           <NavItem icon={<FaNewspaper size={16} />} text="News" />
//           <NavItem icon={<AiFillRead size={16} />} text="Reads" />
//           <NavItem icon={<BsFileEarmarkText size={16} />} text="Paper" />
//           <NavItem icon={<FaChartLine size={16} />} text="Market" />
//           <NavItem icon={<FaUserFriends size={16} />} text="Social" />
//         </div>
//       </div>

//       {/* Thin Default Slider */}
//       <div
//         className="absolute bottom-0 left-0 h-[5px] bg-gray-700"
//         style={{
//           width: `${scrollProgress}%`, // Dynamic width based on scroll
//           opacity: 0.4, // Subtle visual cue
//           transition: 'width 0.1s ease', // Smooth width transition
//         }}
//       />
//     </div>
//   );
// };

// // Nav Item Component
// const NavItem = ({ icon, text }) => (
//   <div
//     className="flex flex-col items-center justify-center cursor-pointer"
//     style={{
//       minWidth: "80px", // Ensure enough width for each item
//     }}
//   >
//     <div className="text-gray-700">{icon}</div>
//     <span className="text-xs font-medium text-black mt-1">{text}</span>
//   </div>
// );

// export default MobileSlider;










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
    <div
      className="fixed top-[57px] left-0 w-full shadow-md md:hidden z-50"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        height: "53px",
      }}
    >
      {/* Scrollable Content */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto no-scrollbar relative"
        style={{
          scrollBehavior: "smooth",
          whiteSpace: "nowrap",
        }}
      >
        {/* Navigation Items */}
        <div className="flex space-x-4 px-2 py-2 items-center">
          <NavItem icon={<FaNewspaper size={16} />} text="TRENDING" />
          <NavItem icon={<AiFillRead size={16} />} text="LATEST" />
          <NavItem icon={<BsFileEarmarkText size={16} />} text="JEE" />
          <NavItem icon={<FaChartLine size={16} />} text="NEET" />
          <NavItem icon={<FaUserFriends size={16} />} text="1:1 Learning" />
          <NavItem icon={<FaNewspaper size={16} />} text="Topper Notes" />
          <NavItem icon={<AiFillRead size={16} />} text="FAQs" />
          <NavItem icon={<BsFileEarmarkText size={16} />} text="PYQs" />
          <NavItem icon={<FaChartLine size={16} />} text="Mock Tests" />
          <NavItem icon={<FaUserFriends size={16} />} text="Road Maps" />
        </div>
      </div>

      {/* Custom Scrollbar */}
      {isOverflowing && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
          <div
            className="bg-gray-500 h-full"
            style={{
              width: `${scrollProgress}%`,
              transition: "width 0.1s ease",
            }}
          />
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
