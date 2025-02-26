// import React, { useState, useEffect, useRef } from "react";

// const SecondaryNavbar = () => {
//   const [activeSection, setActiveSection] = useState("get-started");
//   const navRef = useRef(null);
//   const buttonRefs = useRef({});

//   const handleScroll = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setActiveSection(id);
//     scrollActiveButtonIntoView(id);
//   };

//   const scrollActiveButtonIntoView = (id) => {
//     if (buttonRefs.current[id] && navRef.current) {
//       const button = buttonRefs.current[id];
//       const nav = navRef.current;
      
//       const buttonLeft = button.offsetLeft;
//       const buttonWidth = button.offsetWidth;
//       const navScrollLeft = nav.scrollLeft;
//       const navWidth = nav.offsetWidth;

//       // Calculate the target scroll position to center the button
//       const targetScroll = buttonLeft - (navWidth / 2) + (buttonWidth / 2);

//       nav.scrollTo({
//         left: targetScroll,
//         behavior: 'smooth'
//       });
//     }
//   };

//   // Highlight the active section based on scroll position
//   useEffect(() => {
//     const handleScrollChange = () => {
//       const sectionIds = [
//         "get-started",
//         "guidance",
//         "courses",
//         "iit-experts",
//         "concept-mapping",
//         "custom-curriculum",
//         "personalized-sprint",
//         "Features"
//       ];

//       let active = "get-started"; // Default to "Get started"
//       for (let id of sectionIds) {
//         const section = document.getElementById(id);
//         if (section) {
//           const rect = section.getBoundingClientRect();
//           if (rect.top <= 150 && rect.bottom >= 150) {
//             active = id;
//             break;
//           }
//         }
//       }
      
//       setActiveSection(active);
//       scrollActiveButtonIntoView(active);
//     };

//     window.addEventListener("scroll", handleScrollChange);

//     return () => {
//       window.removeEventListener("scroll", handleScrollChange);
//     };
//   }, []);

//   const sections = [
//     { name: "Get started", id: "get-started" },
//     { name: "Guidence", id: "guidence" },
//     { name: "Courses", id: "courses" },
//     { name: "IIT-Experts", id: "iit-experts" },
//     { name: "Concept Mapping", id: "concept-mapping" },
//     { name: "Custom Curriculum", id: "custom-curriculum" },
//     { name: "Personalized Sprint", id: "personalized-sprint" },
//     { name: "Features", id: "features"},
//   ];

//   return (
//     <div className="sticky top-14 md:top-[70px] bg-white z-50 shadow-none">
//       <nav
//         ref={navRef}
//         className="flex items-center justify-start ml-4 space-x-4 border-b overflow-x-auto scrollbar-hide md:ml-20"
//         style={{
//           WebkitOverflowScrolling: "touch",
//         }}
//       >
//         {sections.map((section) => (
//           <button
//             key={section.id}
//             ref={(el) => (buttonRefs.current[section.id] = el)}
//             className={`relative py-3 md:py-2 px-0.5 text-[#7c8a92] font-poppins text-sm hover:text-black focus:outline-none transition duration-200 whitespace-nowrap ${
//               activeSection === section.id ? "font-bold text-black" : ""
//             }`}
//             onClick={() => handleScroll(section.id)}
//           >
//             {section.name}
//             {activeSection === section.id && (
//               <span className="absolute left-0 right-0 bottom-0 h-[5px] rounded-md bg-black"></span>
//             )}
//           </button>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default SecondaryNavbar;

import React, { useState, useEffect, useRef } from "react";

const SecondaryNavbar = () => {
  const [activeSection, setActiveSection] = useState("get-started");
  const navRef = useRef(null);
  const buttonRefs = useRef({});

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    scrollActiveButtonIntoView(id);
  };

  const scrollActiveButtonIntoView = (id) => {
    if (buttonRefs.current[id] && navRef.current) {
      const button = buttonRefs.current[id];
      const nav = navRef.current;
      
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      const navScrollLeft = nav.scrollLeft;
      const navWidth = nav.offsetWidth;

      // Calculate the target scroll position to center the button
      const targetScroll = buttonLeft - (navWidth / 2) + (buttonWidth / 2);

      nav.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const sections = [
    { name: "Get started", id: "get-started" },
    { name: "Guidance", id: "guidance" },
    { name: "Courses", id: "courses" },
    { name: "IIT-Experts", id: "iit-experts" },
    { name: "Concept Mapping", id: "concept-mapping" },
    { name: "Custom Curriculum", id: "custom-curriculum" },
    { name: "Personalized Sprint", id: "personalized-sprint" },
    { name: "Features", id: "features" },
    { name: "Refer & Win", id: "refer-and-win" },
    { name: "Competitor Analysis", id: "competitor-analysis" }
  ];

  // Highlight the active section based on scroll position
  useEffect(() => {
    const handleScrollChange = () => {
      // Use the same IDs as defined in the sections array
      const sectionIds = sections.map(section => section.id);

      let active = "get-started"; // Default to "Get started"
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            active = id;
            break;
          }
        }
      }
      
      setActiveSection(active);
      scrollActiveButtonIntoView(active);
    };

    window.addEventListener("scroll", handleScrollChange);

    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, []);

  return (
    <div className="sticky top-14 md:top-[70px] bg-white z-40 shadow-none">
      <nav
        ref={navRef}
        className="flex items-center justify-start ml-4 space-x-4 border-b overflow-x-auto scrollbar-hide md:ml-20"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {sections.map((section) => (
          <button
            key={section.id}
            ref={(el) => (buttonRefs.current[section.id] = el)}
            className={`relative py-3 md:py-2 px-0.5 text-[#7c8a92] font-poppins text-sm hover:text-black focus:outline-none transition duration-200 whitespace-nowrap ${
              activeSection === section.id ? "font-bold text-black" : ""
            }`}
            onClick={() => handleScroll(section.id)}
          >
            {section.name}
            {activeSection === section.id && (
              <span className="absolute left-0 right-0 bottom-0 h-[5px] rounded-md bg-black"></span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SecondaryNavbar;