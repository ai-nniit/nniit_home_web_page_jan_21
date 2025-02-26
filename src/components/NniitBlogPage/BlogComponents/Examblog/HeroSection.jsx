// import React from 'react';
// import { FaPhoneAlt, FaBell } from 'react-icons/fa';
// import karagpur from '../../assets/iit_karagpur.jpg';

// const HeroSection = () => {
//   return (
//     <div 
//       className="bg-cover bg-center text-black py-2 mt-12 sm:mt-0" // mt-12 for mobile, reset to mt-0 for desktop
//       style={{ backgroundImage: `url(${karagpur})` }} // Use the imported image variable here
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col space-y-4">
//           {/* Breadcrumbs */}
//           <div className="flex items-center space-x-2 text-sm">
//             <a href="/" className="hover:text-blue-400">Home</a>
//             <span>/</span>
//             <a href="/engineering-exams" className="hover:text-blue-400">Engineering Exams</a>
//             <span>/</span>
//             <span>JEE Main Exam</span>
//           </div>
          
//           {/* Title */}
//           <h1 className="text-2xl sm:text-3xl font-bold">
//             JEE Main 2025: Exam Date (Jan 22-31), City Slip, Admit Card, Syllabus, Pattern Question Papers & More
//           </h1>
          
//           {/* Update Info */}
//           <div className="flex items-center space-x-4 text-sm">
//             <span>Updated By</span>
//             <span className="font-semibold">Diksha Sharma</span>
//             <span>on</span>
//             <span>13 Dec, 2024 13:12</span>
//           </div>
          
//           {/* Buttons */}
//           <div className="flex space-x-4 pt-2">
//             {/* Request a Callback Button */}
//             <button 
//               className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md hover:from-green-500 hover:to-blue-600 transition-colors sm:px-2 sm:py-1.0"
//             >
//               <span className="hidden sm:inline text-base">Request a callback</span>
//               <span className="sm:hidden flex items-start space-x-1 text-sm">
//                 <FaPhoneAlt />
//                 <span>Callback</span>
//               </span>
//             </button>

//             {/* Set Exam Alert Button */}
//             <button 
//               className="flex items-center space-x-2 px-3 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors sm:px-3 sm:py-1.0"
//             >
//               <span className="hidden sm:inline text-base">Set Exam Alert</span>
//               <span className="sm:hidden flex items-start space-x-0 text-sm">
//                 <FaBell />
//                 <span>Exam Alert</span>
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import React from 'react';
// import { FaPhoneAlt, FaBell } from 'react-icons/fa';
// import karagpur from '../../assets/iit_karagpur.jpg';

// const HeroSection = () => {
//   return (
//     <div 
//       className="relative overflow-hidden bg-cover bg-center text-white py-12 mt-12 sm:mt-0"
//       style={{
//         backgroundImage: `url(${karagpur})`,
//         animation: "zoomBackground 15s infinite alternate",
//       }}
//     >
//       {/* Overlay to reduce image intensity */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       {/* Content Section */}
//       <div className="relative container mx-auto px-4">
//         <div className="flex flex-col space-y-4">
//           {/* Breadcrumbs */}
//           <div className="flex items-center space-x-2 text-sm">
//             <a href="/" className="hover:text-blue-400">Home</a>
//             <span>/</span>
//             <a href="/engineering-exams" className="hover:text-blue-400">Engineering Exams</a>
//             <span>/</span>
//             <span>JEE Main Exam</span>
//           </div>
          
//           {/* Title */}
//           <h1 className="text-2xl sm:text-3xl font-bold">
//             JEE Main 2025: Exam Date (Jan 22-31), City Slip, Admit Card, Syllabus, Pattern Question Papers & More
//           </h1>
          
//           {/* Update Info */}
//           <div className="flex items-center space-x-4 text-sm">
//             <span>Updated By</span>
//             <span className="font-semibold">Diksha Sharma</span>
//             <span>on</span>
//             <span>13 Dec, 2024 13:12</span>
//           </div>
          
//           {/* Buttons */}
//           <div className="flex space-x-4 pt-2">
//             {/* Request a Callback Button */}
//             <button 
//               className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md hover:from-green-500 hover:to-blue-600 transition-colors"
//             >
//               <span className="hidden sm:inline text-base">Request a callback</span>
//               <span className="sm:hidden flex items-start space-x-1 text-sm">
//                 <FaPhoneAlt />
//                 <span>Callback</span>
//               </span>
//             </button>

//             {/* Set Exam Alert Button */}
//             <button 
//               className="flex items-center space-x-2 px-3 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
//             >
//               <span className="hidden sm:inline text-base">Set Exam Alert</span>
//               <span className="sm:hidden flex items-start space-x-0 text-sm">
//                 <FaBell />
//                 <span>Exam Alert</span>
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Background Animation */}
//       <style>
//         {`
//           @keyframes zoomBackground {
//             0% {
//               transform: scale(1);
//             }
//             100% {
//               transform: scale(1.1);
//             }
//           }
//           .bg-cover {
//             background-size: cover;
//             background-position: center;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaBell } from 'react-icons/fa';
import karagpur from '../../Blogassets/iit_karagpur.jpg';
import vedantu from '../../Blogassets/vedantu.jpg';
import digital from '../../Blogassets/digital_ocean.jpg';



const HeroSection = () => {
  const [liked, setLiked] = useState(false);
    const [previousDate, setPreviousDate] = useState("");
  
    useEffect(() => {
      const currentDate = new Date(); // Get current date and time
      currentDate.setDate(currentDate.getDate() - 7); // Subtract 7 days (1 week)
  
      const formattedDate = currentDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
  
      const formattedTime = currentDate.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
  
      setPreviousDate(`${formattedDate} ${formattedTime}`); // Combine date and time
    }, []); // Runs once when the component mounts
  return (
    <div className="relative overflow-hidden text-black py-2 mt-12 sm:mt-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-moveBackground"
        style={{ backgroundImage: `url(${karagpur})` }}
      >
       {/* Black Shadow Gradient from Top Left */}
       <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.99) 10%, transparent 120%)',
            transform: 'skewY(-5deg)',
            top: '-30%',
            left: '-50%',
            height: '150%',
            width: '220%',
            position: 'absolute',
          }}
        ></div>
      </div>

      {/* Static Content */}
      <div className="relative container mx-auto px-4 z-0">
        <div className="flex flex-col space-y-4">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="hover:text-blue-400">Home</a>
            <span>/</span>
            <a href="/engineering-exams" className="hover:text-blue-400">Engineering Exams</a>
            <span>/</span>
            <span className='text-white'>JEE Main Exam</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-xl font-extrabold text-white font-serif">
            Newton's Law of Motion
          </h1>

          {/* Update Info */}
          <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-6 text-white text-sm font-medium">
      {/* Heart Icon and Like Count */}
      <div className="flex items-center space-x-1 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill={liked ? "red" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          onClick={() => setLiked(!liked)}
          className="transition duration-200 ease-in-out"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span>{liked ? '1.1M' : '1M'}</span> {/* Dynamic count */}
      </div>

      {/* Impressions */}
      <div className="flex items-center space-x-1">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="4" x2="4" y2="20" strokeWidth="2"></line>
          <line x1="9" y1="8" x2="9" y2="20" strokeWidth="2"></line>
          <line x1="14" y1="12" x2="14" y2="20" strokeWidth="2"></line>
          <line x1="19" y1="6" x2="19" y2="20" strokeWidth="2"></line>
        </svg>
        <span>3.5M</span> {/* Static impression count */}
      </div>

      {/* Share Icon */}
      <div className="flex items-center space-x-1 cursor-pointer">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6M16 6l-4-4-4 4M12 2v13" />
        </svg> */}
        {/* <span>100K</span> Static share count */}
      </div>
    </div>
    <span className='text-white text-sm'>{previousDate}</span>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 pt-0">
          <button
  className="relative inline-flex items-center justify-center text-black font-semibold rounded-full"
  style={{
    background: "linear-gradient(to right, #00C6FF, #FF930F)", // Gradient background
    padding: "1.25px", // Thin border effect all around
  }}
>
  <span
    className="w-full h-full px-2 py-2 bg-white rounded-full flex items-center justify-center"
  >
    <span className="hidden sm:inline text-base">Request a callback</span>
    <span className="sm:hidden flex items-start space-x-2 text-sm">
      <FaPhoneAlt />
      <span>Callback</span>
    </span>
  </span>
</button>
<button
  className="relative inline-flex items-center justify-center  text-black font-semibold rounded-full"
  style={{
    background: "linear-gradient(to right, #00C6FF, #FF930F)", // Gradient background
    padding: "1.25px", // Thin border effect all around
  }}
>
  <span
    className="w-full h-full px-2 py-2 bg-white rounded-full flex items-center justify-center"
  >
    <span className="hidden sm:inline text-base">Request a callback</span>
    <span className="sm:hidden flex items-start space-x-2 text-sm">
      <FaBell />
      <span>Exam Alert</span>
    </span>
  </span>
</button>

          </div>
        </div>
      </div>

      {/* Background Animation */}
      <style>
        {`
          @keyframes moveBackground {
            0% {
              background-position: center top;
            }
            100% {
              background-position: center bottom;
            }
          }

          .animate-moveBackground {
            animation: moveBackground 8s infinite alternate ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
