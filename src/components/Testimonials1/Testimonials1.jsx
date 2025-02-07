// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import exp from '../../assets/edutech.png';
// import exp1 from '../../assets/expert5.png';
// import exp2 from '../../assets/expert2.png';
// import iitkaragpur from '../../assets/IIT_Kharagpur.png';
// import iitbombay from '../../assets/IIT_Bombay.png';
// import backgroundImg from '../../assets/slide_content_background.png'; // Replace with your background image path
// import aiims from '../../assets/AIIMS_Delhi.png';
// import pgimer from '../../assets/PGIMER_Logo.png';
// import exp3 from '../../assets/Neet_exp1.png';
// import exp4 from '../../assets/Neet_exp2.png';


// const CompanyShowcase = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const scrollContainerRef = useRef(null);

//   const companies = [
//     {
//       id: "Kiva",
//       image: exp,
//       text: "“Mastering JEE is not about solving the toughest problems—it’s about building the mindset to break any problem into solvable steps.”",
//       author: "Tulsi",
//       position: "Department of CSE, IIT Karaghpur",
//       slideimg: iitkaragpur,
//       iitname: "IIT Karagpur",
//     },
//     {
//       id: "DHCS",
//       image: exp1,
//       text: "“Every question you solve is a step closer to IIT. Keep pushing, keep refining, and success will follow.”",
//       author: "Indhumathi Nambi",
//       position: "Department of IT, IIT Bombay",
//       slideimg: iitbombay,
//       iitname: "IIT Bombay",
//     },
//     {
//       id: "Sony",
//       image: exp2,
//       text: "“Concepts don’t just need to be memorized—they need to be conquered. Visualize, relate, and apply!”",
//       author: "Ajeesh Onamkuttan",
//       position: "Department of MECH, IIT Delhi",
//       slideimg: iitkaragpur,
//       iitname: "IIT Delhi",
//     },
//      {
//           id: "AIIMS",
//           image: exp3,
//           text: "“Becoming a doctor is not just about clearing NEET—it’s about developing the patience, precision, and perseverance that define a true healer”",
//           author: "Uma Devi",
//           position: "Department of Clinical, AIIMS Delhi",
//           slideimg: aiims,
//           iitname: "AIIMS Delhi",
//         },
//         {
//           id: "PGIMER",
//           image: exp4,
//           text: "“Your competition is not the lakhs of students appearing for NEET—it’s the part of you that wants to give up. Overcome that, and you will succeed.”",
//           author: "Jane",
//           position: "Surgical Department, PGIMER Vellore",
//           slideimg: pgimer,
//           iitname: "PGIMER Vellore",
//         },
//   ];

//   const selectedData = companies[activeIndex];

//   const handleCompanyClick = (index) => {
//     setActiveIndex(index);

//     // Scroll to center the clicked image
//     if (scrollContainerRef.current) {
//       const container = scrollContainerRef.current;
//       const itemWidth = container.scrollWidth / companies.length;
//       const scrollPosition = itemWidth * index - container.clientWidth / 2 + itemWidth / 2;

//       container.scrollTo({
//         left: scrollPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   useEffect(() => {
//     // Center the active image on load
//     handleCompanyClick(activeIndex);
//   }, [activeIndex]);

//   return (
//     <div>
//       <header className="mb-4 px-4">
//           <div className="flex items-center space-x-1 mb-0.5">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               className="relative -top-1.2"
//             >
//               <path
//                 d="M24 11.9914C19.2924 12.4191 16.5877 12.8125 14.9272 14.1126C12.9757 15.6351 12.5136 18.4234 12 24C11.4693 18.2181 10.99 15.4469 8.85021 13.9587C7.18973 12.7954 4.50214 12.4191 0 12.0086C4.69044 11.5809 7.41227 11.1875 9.05564 9.90449C11.0243 8.36493 11.4864 5.59373 12 0C12.4793 5.14897 12.9073 7.90306 14.4993 9.49394C16.0913 11.0848 18.8645 11.5296 24 11.9914Z"
//                 fill="url(#paint0_linear)"
//               />
//               <defs>
//                 <linearGradient
//                   id="paint0_linear"
//                   x1="12"
//                   y1="0"
//                   x2="12"
//                   y2="24"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stopColor="#39B6D8" />
//                   <stop offset="0.5" stopColor="#F7D344" />
//                   <stop offset="1" stopColor="#E38330" />
//                 </linearGradient>
//               </defs>
//             </svg>
//             <p className="text-[10px] text-gray-400 mt-2 font-serif font-light">
//               DISCOVER NEW PERSPECTIVES
//             </p>
//           </div>
//           <h3 className="text-[18px] md:text-3xl font-extrabold font-serif text-black -mt-1">
//             POWERD BY KNOWLEDGE OF IITIANS
//           </h3>
//         </header>
//     <div
//       className="relative bg-cover bg-center text-white h-auto p-4"
//       style={{
//         backgroundImage: `url(${backgroundImg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >

//       <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto relative">
//         <motion.div
//           key={selectedData.image}
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="w-full md:w-1/2 z-10"
//         >
//           <img
//             src={selectedData.image}
//             alt={selectedData.id}
//             className="rounded-md w-full h-auto"
//           />
//         </motion.div>

//         <motion.div
//           key={selectedData.text}
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="w-full md:w-1/2 z-10"
//         >
//           <p className="text-sm uppercase tracking-wide mb-2">Small Medium Business</p>
//           <h2 className="text-xl md:text-2xl font-serif font-bold mb-4">{selectedData.text}</h2>
//           <p className="font-semibold font-serif">{selectedData.author}</p>
//           <p className="text-gray-400">{selectedData.position}</p>
//         </motion.div>
//       </div>
      
//       <div className="mt-6 mb-4 border-t  border-gray-700 relative z-10"></div>

//       <div className="relative z-10">
//         {/* Scrollable Section */}
//         <div className="relative py-8">
//           <div
//             ref={scrollContainerRef}
//             className="flex space-x-8 items-center -mt-14 overflow-x-auto scrollbar-hidden"
//             style={{ scrollBehavior: "smooth" }}
//           >
//             {companies.map((company, index) => (
//               <div key={company.id} className="flex flex-col items-center relative">
//                 {/* Thin white line for active item */}
//                 {activeIndex === index && (
//                   <motion.div
//                     className="h-1 bg-white absolute top-0 left-0 right-0"
//                     initial={{ width: 0 }}
//                     animate={{ width: "100%" }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 )}
//                 <button
//                   onClick={() => handleCompanyClick(index)}
//                   className={`shrink-0 transition-all duration-300 p-3  mt-4 px-6 rounded-md text-sm font-medium ${
//                     activeIndex === index
//                       ? "bg-white text-black"
//                       : "bg-black text-gray-300"
//                   } hover:bg-blue-400 hover:text-white`}
//                 >
//                   <img
//                     src={company.slideimg}
//                     alt={`${company.id} logo`}
//                     className="h-8 w-8"
//                   />
//                 </button>
//                 <p className="mt-2 text-center">{company.iitname}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default CompanyShowcase;

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import exp from '../../assets/edutech.png';
import exp1 from '../../assets/expert5.png';
import exp2 from '../../assets/expert2.png';
import iitkaragpur from '../../assets/IIT_Kharagpur.png';
import iitbombay from '../../assets/IIT_Bombay.png';
import backgroundImg from '../../assets/slide_content_background.png';
import aiims from '../../assets/AIIMS_Delhi.png';
import pgimer from '../../assets/PGIMER_Logo.png';
import exp3 from '../../assets/Neet_exp1.png';
import exp4 from '../../assets/Neet_exp2.png';

const CompanyShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const companies = [
    {
      id: "Kiva",
      image: exp,
      text: "“Mastering JEE is not about solving the toughest problems—it’s about building the mindset to break any problem into solvable steps.”",
      author: "Tulsi Das",
      position: "Department of CSE, IIT Karaghpur",
      slideimg: iitkaragpur,
      iitname: "IIT Karaghpur",
    },
    {
      id: "DHCS",
      image: exp1,
      text: "“Every question you solve is a step closer to IIT. Keep pushing, keep refining, and success will follow.”",
      author: "Indhumathi Nambi",
      position: "Department of IT, IIT Bombay",
      slideimg: iitbombay,
      iitname: "IIT Bombay",
    },
    {
      id: "Sony",
      image: exp2,
      text: "“Concepts don’t just need to be memorized—they need to be conquered. Visualize, relate, and apply!”",
      author: "Ajeesh Onamkuttan",
      position: "Department of MECH, IIT Delhi",
      slideimg: iitkaragpur,
      iitname: "IIT Delhi",
    },
    {
      id: "AIIMS",
      image: exp3,
      text: "“Becoming a doctor is not just about clearing NEET—it’s about developing the patience, precision, and perseverance that define a true healer”",
      author: "Uma Devi",
      position: "Department of Clinical, AIIMS Delhi",
      slideimg: aiims,
      iitname: "AIIMS Delhi",
    },
    {
      id: "PGIMER",
      image: exp4,
      text: "“Your competition is not the lakhs of students appearing for NEET—it’s the part of you that wants to give up. Overcome that, and you will succeed.”",
      author: "Jane",
      position: "Surgical Department, PGIMER Vellore",
      slideimg: pgimer,
      iitname: "PGIMER Vellore",
    },
  ];

  const handleCompanyClick = (index) => {
    setActiveIndex(index);
    resetAutoSlide();
  };

  // Function to start the auto-scroll
  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 5000);
  };

  // Auto-slide effect
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Reset auto-slide on manual click
  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  return (
    <div>
      <header className="mb-4 px-4">
        <h3 className="text-3xl font-extrabold font-serif text-black">
          POWERED BY KNOWLEDGE OF IITIANS
        </h3>
      </header>
      <div
        className="relative bg-cover bg-center text-white h-auto p-4"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto relative">
          <motion.div
            key={companies[activeIndex].image}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 z-10"
          >
            <img
              src={companies[activeIndex].image}
              alt={companies[activeIndex].id}
              className="rounded-md w-full h-auto"
            />
          </motion.div>
          <motion.div
            key={companies[activeIndex].text}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 z-10"
          >
            <h2 className="text-2xl font-serif font-bold mb-4">
              {companies[activeIndex].text}
            </h2>
            <p className="font-semibold font-serif">
              {companies[activeIndex].author}
            </p>
            <p className="text-gray-400">{companies[activeIndex].position}</p>
          </motion.div>
        </div>
        <div className="mt-6 mb-4 border-t border-gray-700 relative z-10"></div>
        <div className="relative z-10">
          <div className="relative py-8">
            <div className="flex space-x-8 items-center overflow-x-auto scrollbar-hidden">
              {companies.map((company, index) => (
                <button
                  key={company.id}
                  onClick={() => handleCompanyClick(index)}
                  className={`shrink-0 transition-all duration-300 p-3 mt-4 px-6 rounded-md text-sm font-medium ${
                    activeIndex === index
                      ? "bg-white text-black"
                      : "bg-black text-gray-300"
                  } hover:bg-blue-400 hover:text-white`}
                >
                  <img
                    src={company.slideimg}
                    alt={`${company.id} logo`}
                    className="h-8 w-8"
                  />
                  <p className="mt-2 text-center">{company.iitname}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyShowcase;
