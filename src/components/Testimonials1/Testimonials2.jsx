import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
//import exp from '../../assets/expert1.jpg';
import exp from '../../assets/edutech.png'
import exp1 from '../../assets/expert5.png';
import exp2 from '../../assets/expert2.png';
import exp3 from '../../assets/Neet_exp1.png';
import exp4 from '../../assets/Neet_exp2.png';
import iitkaragpur from '../../assets/IIT_Kharagpur.png';
import iitbombay from '../../assets/IIT_Bombay.png';
import backgroundImg from '../../assets/slide_content_background.png';
import aiims from '../../assets/AIIMS_Delhi.png';
import pgimer from '../../assets/PGIMER_Logo.png';

const CompanyShowcase1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const companies = [
    {
      id: "Kiva",
      image: exp,
      text: "“We’re a global workforce, and Atlassian helps us stay in sync while doing async work. It’s been a big win for us.”",
      author: "Brit Heiring",
      position: "Department of CSE, IIT Karaghpur",
      slideimg: iitkaragpur,
      iitname: "IIT Karagpur",
    },
    {
      id: "DHCS",
      image: exp1,
      text: "“Using Atlassian tools, we’ve streamlined operations and achieved higher efficiency in our workflows.”",
      author: "John Doe",
      position: "Department of IT, IIT Bombay",
      slideimg: iitbombay,
      iitname: "IIT Bombay",
    },
    {
      id: "Sony",
      image: exp2,
      text: "“Atlassian's collaborative tools are a game changer for our music publishing operations.”",
      author: "Jane",
      position: "Department of MECH, IIT Delhi",
      slideimg: iitkaragpur,
      iitname: "IIT Delhi",
    },
    {
      id: "AIIMS",
      image: exp3,
      text: "“Atlassian's collaborative tools are a game changer for our music publishing operations.”",
      author: "Jane",
      position: "Department of MECH, IIT Delhi",
      slideimg: aiims,
      iitname: "AIIMS Delhi",
    },
    {
      id: "PGIMER",
      image: exp4,
      text: "“Atlassian's collaborative tools are a game changer for our music publishing operations.”",
      author: "Jane",
      position: "Department of MECH, IIT Delhi",
      slideimg: pgimer,
      iitname: "PGIMER Vellore",
    },
  ];

  const selectedData = companies[activeIndex];

  const handleCompanyClick = (index) => {
    setActiveIndex(index);

    // Scroll to center the clicked image
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / companies.length;
      const scrollPosition = itemWidth * index - container.clientWidth / 2 + itemWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Center the active image on load
    handleCompanyClick(activeIndex);
  }, [activeIndex]);

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
          key={selectedData.image}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 z-10"
        >
          <img
            src={selectedData.image}
            alt={selectedData.id}
            className="rounded-md w-full h-auto"
          />
        </motion.div>

        <motion.div
          key={selectedData.text}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 z-10"
        >
           
          <p className="text-sm uppercase tracking-wide mt-5">Small Medium Business</p>
          <h2 className="text-xl md:text-2xl font-serif font-bold mb-4">{selectedData.text}</h2>
          <p className="font-semibold font-serif">{selectedData.author}</p>
          <p className="text-gray-400">{selectedData.position}</p>
        </motion.div>
      </div>
      
      <div className="mt-6 mb-4 border-t  border-gray-700 relative z-10"></div>

      <div className="relative z-10">
        {/* Scrollable Section */}
        <div className="relative  py-8">
          <div
            ref={scrollContainerRef}
            className="flex space-x-8 items-center -mt-14 overflow-x-auto scrollbar-hidden"
            style={{ scrollBehavior: "smooth" }}
          >
            {companies.map((company, index) => (
              <div key={company.id} className="flex flex-col items-center ml-72 relative">
                {/* Thin white line for active item */}
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
                  className={`shrink-0 transition-all duration-300 p-3  mt-4 px-6 rounded-md text-sm font-medium ${
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
