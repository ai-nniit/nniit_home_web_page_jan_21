import React, { useState, useRef, useEffect } from "react";
import EventCard from "./Card1";
import EventImage1 from "../../Blogassets/logo.png"; // Replace with your event image paths
import EventImage2 from "../../Blogassets/tips.jpeg";

const CarouselsUnion = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const carouselRef = useRef(null);

  // Dummy data for each tab
  const tabsData = {
    events: [
      {
        imageSrc: EventImage2,
        title: "Masters' Union Mixer",
        tag: "UG",
        mode: "On Campus",
        date: "15th December",
        linkText: "Register Now",
      },
      {
        imageSrc: EventImage2,
        title: "Design Thinking 101",
        tag: "PGP Rise",
        mode: "Online",
        date: "15th December",
        linkText: "Register Now",
      },
      {
        imageSrc: EventImage2,
        title: "Masters' Union Mixer",
        tag: "UG",
        mode: "On Campus",
        date: "15th December",
        linkText: "Register Now",
      },
      {
        imageSrc: EventImage2,
        title: "Design Thinking 101",
        tag: "PGP Rise",
        mode: "Online",
        date: "15th December",
        linkText: "Register Now",
      },
    ],
    latestNews: [
      {
        imageSrc: EventImage2,
        title: "Big Tech Innovations",
        tag: "Tech",
        mode: "Read Now",
        date: "14th December",
        time: "All Day",
        linkText: "Read More",
      },
      {
        imageSrc: EventImage1,
        title: "Masters' Union Mixer",
        tag: "UG",
        mode: "On Campus",
        date: "15th December",
        linkText: "Register Now",
      },
      {
        imageSrc: EventImage2,
        title: "Design Thinking 101",
        tag: "PGP Rise",
        mode: "Online",
        date: "15th December",
        time: "11:00 AM - 12:00 PM",
        linkText: "Register Now",
      },
    ],
    admissions: [
      {
        imageSrc: EventImage2,
        title: "Admissions Open",
        tag: "PGP",
        mode: "Online",
        date: "Until 31st December",
        time: "24/7",
        linkText: "Apply Now",
      },
      {
        imageSrc: EventImage1,
        title: "Masters' Union Mixer",
        tag: "UG",
        mode: "On Campus",
        date: "15th December",
        time: "04:00 PM - 05:00 PM",
        linkText: "Register Now",
      },
      {
        imageSrc: EventImage2,
        title: "Design Thinking 101",
        tag: "PGP Rise",
        mode: "Online",
        date: "15th December",
        time: "11:00 AM - 12:00 PM",
        linkText: "Register Now",
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < tabsData[activeTab].length - (isMobile ? 1 : 2)) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the start
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(tabsData[activeTab].length - (isMobile ? 1 : 2)); // Loop to the end
    }
  };

  const handleTouchStart = (e) => {
    carouselRef.current.startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!carouselRef.current.startX) return;
    const deltaX = e.touches[0].clientX - carouselRef.current.startX;
    if (deltaX > 50) {
      handlePrev();
      carouselRef.current.startX = null;
    } else if (deltaX < -50) {
      handleNext();
      carouselRef.current.startX = null;
    }
  };

  return (
    <div className="relative bg-white h-auto p-5">
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 left-0 z-0"
  >
    <defs>
      <pattern
        id="grid-pattern"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 20 0 L 0 0 0 20"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>

  <div className="max-w-7xl mx-auto md:px-12 relative z-0"> {/* Added relative z-10 here to stack on top of the SVG */}
    {/* Tabs */}
    <div className="flex gap-3 mb-3 sm:rounded-lg border-b-5">
      <button
        onClick={() => {
          setActiveTab("events");
          setCurrentIndex(0);
        }}
        className={`pb-2 ${
          activeTab === "events"
            ? "border-b-2 border-black font-bold"
            : "text-gray-500"
        }`}
      >
        EVENTS
      </button>
      <button
        onClick={() => {
          setActiveTab("latestNews");
          setCurrentIndex(0);
        }}
        className={`pb-2 ${
          activeTab === "latestNews"
            ? "border-b-2 border-black font-bold"
            : "text-gray-500"
        }`}
      >
        LATEST NEWS
      </button>
      <button
        onClick={() => {
          setActiveTab("admissions");
          setCurrentIndex(0);
        }}
        className={`pb-2 ${
          activeTab === "admissions"
            ? "border-b-2 border-black font-bold"
            : "text-gray-500"
        }`}
      >
        ADMISSIONS
      </button>
    </div>

    {/* Carousel */}
    <div
      className="overflow-hidden relative"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * (100 / (isMobile ? 1 : 2))}%)`,
        }}
      >
        {tabsData[activeTab].map((item, index) => (
          <div
            className={`${
              isMobile
                ? "min-w-[80%] sm:min-w-[85%] px-2" // Reduced the min-width of mobile cards
                : "w-1/3 px-4" // Reduced the width of desktop cards
            } flex-shrink-0`}
            key={index}
          >
            <EventCard
              imageSrc={item.imageSrc}
              title={item.title}
              tag={item.tag}
              mode={item.mode}
              date={item.date}
              time={item.time}
              linkText={item.linkText}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Only on Desktop */}
      {!isMobile && (
        <div className="flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
          <button
            onClick={handlePrev}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white border shadow"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white border shadow"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  </div>
</div>

  
  );
};

export default CarouselsUnion;
