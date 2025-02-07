// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// //import exp from '../../assets/expert1.jpg';
// import exp from '../../assets/edutech.png'
// import exp1 from '../../assets/expert5.png';
// import exp2 from '../../assets/expert2.png';
// import exp3 from '../../assets/Neet_exp1.png';
// import exp4 from '../../assets/Neet_exp2.png';
// import iitkaragpur from '../../assets/IIT_Kharagpur.png';
// import iitbombay from '../../assets/IIT_Bombay.png';
// import backgroundImg from '../../assets/slide_content_background.png';
// import aiims from '../../assets/AIIMS_Delhi.png';
// import pgimer from '../../assets/PGIMER_Logo.png';

// const CompanyShowcase1 = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const scrollContainerRef = useRef(null);

//   const companies = [
//     {
//       id: "AIIMS",
//       image: exp3,
//       text: "“Becoming a doctor is not just about clearing NEET—it’s about developing the patience, precision, and perseverance that define a true healer”",
//       author: "Uma Devi",
//       position: "Department of Clinical, AIIMS Delhi",
//       slideimg: aiims,
//       iitname: "AIIMS Delhi",
//     },
//         {
//           id: "DHCS",
//           image: exp1,
//           text: "“Every question you solve is a step closer to IIT. Keep pushing, keep refining, and success will follow.”",
//           author: "Indhumathi Nambi",
//           position: "Department of IT, IIT Bombay",
//           slideimg: iitbombay,
//           iitname: "IIT Bombay",
//         },
//         {
//           id: "Sony",
//           image: exp2,
//           text: "“Concepts don’t just need to be memorized—they need to be conquered. Visualize, relate, and apply!”",
//           author: "Ajeesh Onamkuttan",
//           position: "Department of MECH, IIT Delhi",
//           slideimg: iitkaragpur,
//           iitname: "IIT Delhi",
//         },
//         {
//           id: "Kiva",
//           image: exp,
//           text: "“Mastering JEE is not about solving the toughest problems—it’s about building the mindset to break any problem into solvable steps.”",
//           author: "Tulsi",
//           position: "Department of CSE, IIT Karaghpur",
//           slideimg: iitkaragpur,
//           iitname: "IIT Karagpur",
//         },
         
//             {
//               id: "PGIMER",
//               image: exp4,
//               text: "“Your competition is not the lakhs of students appearing for NEET—it’s the part of you that wants to give up. Overcome that, and you will succeed.”",
//               author: "Jane",
//               position: "Surgical Department, PGIMER Vellore",
//               slideimg: pgimer,
//               iitname: "PGIMER Vellore",
//             },
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
           
//           <p className="text-sm uppercase tracking-wide mt-10">IIT-JEE/NEET Experts</p>
//           <h2 className="text-xl md:text-2xl font-serif font-bold mb-4">{selectedData.text}</h2>
//           <p className="font-semibold font-serif">{selectedData.author}</p>
//           <p className="text-gray-400">{selectedData.position}</p>
//         </motion.div>
//       </div>
      
//       <div className="mt-6 mb-4 border-t  border-gray-700 relative z-10"></div>

//       <div className="relative z-10">
//         {/* Scrollable Section */}
//         <div className="relative  py-8">
//           <div
//             ref={scrollContainerRef}
//             className="flex space-x-8 items-center -mt-14 overflow-x-auto scrollbar-hidden"
//             style={{ scrollBehavior: "smooth" }}
//           >
//             {companies.map((company, index) => (
//               <div key={company.id} className="flex flex-col items-center ml-72 relative">
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
//   );
// };

// export default CompanyShowcase1;




import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import exp from "../../assets/edutech.png";
import exp1 from "../../assets/expert5.png";
import exp2 from "../../assets/expert2.png";
import exp3 from "../../assets/Neet_exp1.png";
import exp4 from "../../assets/Neet_exp2.png";
import iitkaragpur from "../../assets/IIT_Kharagpur.png";
import iitbombay from "../../assets/IIT_Bombay.png";
import backgroundImg from "../../assets/slide_content_background.png";
import aiims from "../../assets/AIIMS_Delhi.png";
import pgimer from "../../assets/PGIMER_Logo.png";

const CompanyShowcase1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const companies = [
    {
      id: "AIIMS",
      image: exp3,
      text: "“NEET demands consistent and clear concepts. NNIIT provides live one-on-one coaching, helping students focus better and retain more. For AIIMS-level preparation, NNIIT is highly recommended!”",
      author: "Uma Devi",
      position: "Department of Clinical, AIIMS Delhi",
      slideimg: aiims,
      iitname: "AIIMS Delhi",
    },
    {
      id: "DHCS",
      image: exp1,
      text: "“With NNIIT, students get customized study plans and expert mentorship at their convenience. This personalized approach makes IIT JEE preparation more effective than ever. If you’re serious about cracking IIT, NNIIT is your best bet!”",
      author: "Indhumathi Nambi",
      position: "Department of IT, IIT Bombay",
      slideimg: iitbombay,
      iitname: "IIT Bombay",
    },
    {
      id: "Sony",
      image: exp2,
      text: "“Cracking IIT requires smart learning. NNIIT’s one-on-one guidance and tailored approach eliminate distractions and boost results. For serious JEE aspirants, NNIIT is a game-changer!”",
      author: "Ajeesh Onamkuttan",
      position: "Department of MECH, IIT Delhi",
      slideimg: iitkaragpur,
      iitname: "IIT Delhi",
    },
    {
      id: "Kiva",
      image: exp,
      text: "“Success in IIT JEE requires personalized attention. NNIIT offers one-on-one coaching with flexible scheduling, ensuring students get the best learning experience.NNIIT is the way to go!”",
      author: "Tulsi",
      position: "Department of CSE, IIT Karaghpur",
      slideimg: iitkaragpur,
      iitname: "IIT Karagpur",
    },
    {
      id: "PGIMER",
      image: exp4,
      text: "“Balancing subjects is tough, but NNIIT’s adaptive learning makes it easier. With flexible scheduling and expert mentorship, students improve where it matters most. A must-try for NEET aspirants!”",
      author: "Jane",
      position: "Surgical Department, PGIMER Vellore",
      slideimg: pgimer,
      iitname: "PGIMER Vellore",
    },
  ];

  const handleCompanyClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center text-white h-auto p-4"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
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
          <p className="text-sm uppercase tracking-wide mt-28">IIT-JEE/NEET Experts</p>
          <h2 className="text-xl md:text-xl font-serif font-bold mb-4">{companies[activeIndex].text}</h2>
          <p className="font-semibold font-serif">{companies[activeIndex].author}</p>
          <p className="text-gray-400">{companies[activeIndex].position}</p>
        </motion.div>
      </div>

      <div className="mt-1 mb-4 border-t border-gray-700 relative z-10"></div>

      <div className="relative z-10">
        <div className="relative py-8 -mt-10">
          <div
            className="flex space-x-8 items-center overflow-x-auto scrollbar-hidden"
            style={{ scrollBehavior: "smooth" }}
          >
            {companies.map((company, index) => (
              <div key={company.id} className="flex flex-col items-center ml-72 relative">
                {activeIndex === index && (
                  <motion.div
                    className="h-1 bg-white absolute top-0 left-0 right-0"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                <button
                  onClick={() => handleCompanyClick(index)}
                  className={`shrink-0 transition-all duration-300 p-3 mt-4 px-6 rounded-md text-sm font-medium ${
                    activeIndex === index ? "bg-white text-black" : "bg-black text-gray-300"
                  } hover:bg-blue-400 hover:text-white`}
                >
                  <img
                    src={company.slideimg}
                    alt={`${company.id} logo`}
                    className="h-8 w-8"
                  />
                </button>
                <p className="mt-2 text-center">{company.iitname}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyShowcase1;
