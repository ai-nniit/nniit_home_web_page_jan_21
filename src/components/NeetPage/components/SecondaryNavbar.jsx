import React, { useState, useEffect } from "react";

const SecondaryNavbar1 = () => {
  const [activeSection, setActiveSection] = useState("get-started");

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  // Highlight the active section based on scroll position
  useEffect(() => {
    const handleScrollChange = () => {
      const sectionIds = [
        "get-started",
        "guidence",
        "courses",
        "iit-experts",
        "concept-mapping",
        "custom-curriculum",
        "personalized-sprint",
      ];

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
    };

    window.addEventListener("scroll", handleScrollChange);

    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, []);

  const sections = [
    { name: "Get started", id: "get-started" },
    { name: "Guidence", id: "guidence" },
    { name: "Courses", id: "courses" },
    { name: "NEET-Experts", id: "iit-experts" },
    { name: "Concept Mapping", id: "concept-mapping" },
    { name: "Custom Curriculum", id: "custom-curriculum" },
    { name: "Personalized Sprint", id: "personalized-sprint" },
  ];

  return (
    <div className="sticky top-[64px] mt-16 md:top-[70px] bg-white z-40 shadow-none">

      <nav
        className="flex items-center justify-start ml-4 space-x-4 border-b overflow-x-auto md:overflow-x-visible scrollbar-hide md:ml-20"
        style={{
          WebkitOverflowScrolling: "touch", // For smooth scrolling on mobile
        }}
      >
        {sections.map((section) => (
          <button
            key={section.id}
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

export default SecondaryNavbar1;
