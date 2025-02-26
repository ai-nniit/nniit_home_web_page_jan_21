import React, { useState, useRef, useEffect } from "react";
import EventCard from "./Card1";
import EventImage1 from "../../Blogassets/logo.png"; // Replace with your event image paths
import EventImage2 from "../../Blogassets/tips.jpeg";

const CarouselsUnion1 = () => {
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
        time: "04:00 PM - 05:00 PM",
        linkText: "Register Now",
      },
      {
        imageSrc: EventImage2,
        title: "Masters' Union Mixer",
        tag: "UG",
        mode: "On Campus",
        date: "15th December",
        time: "04:00 PM - 05:00 PM",
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
        imageSrc: EventImage2,
        title: "Masters' Union Mixer",
        tag: "UG",
        mode: "On Campus",
        date: "15th December",
        time: "04:00 PM - 05:00 PM",
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
        imageSrc: EventImage2,
        title: "Masters' Union Mixer",
        tag: "UG",
        mode: "On Campus",
        date: "15th December",
        time: "04:00 PM - 05:00 PM",
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
    <div className="bg-[#EAF0FD] rounded-md h-auto p-0">
  <div className="max-w-7xl mx-auto">
    {/* Tabs */}
    <div className="flex gap-3 mb-3 border-b-5">
      <button
        onClick={() => {
          setActiveTab("events");
          setCurrentIndex(0);
        }}
        className={`pb-2 ${
          activeTab === "events"
            ? "border-b-2 border-black font-semibold"
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
            ? "border-b-2 border-black font-semibold"
            : "text-gray-500"
        }`}
      >
        LATEST NEWS
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
            key={index}
            className={`${
              isMobile
                ? "min-w-[90%] sm:min-w-[95%] px-2"
                : "w-1/2 px-3" // Adjust card spacing for desktop
            } flex-shrink-0`}
          >
            <div
              className="w-60 bg-white rounded-lg shadow-md p-2 shrink-0 cursor-pointer"
              onClick={() => handleVideoClick(item.videoUrl)}
            >
              {/* Image */}
              <div className="relative w-full h-32 rounded-lg overflow-hidden mb-2">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Title and Description */}
              <h2 className="text-xs font-semibold mb-1 text-gray-800">
                {item.title}
              </h2>
              <p className="text-[11px] text-gray-600">{item.description}</p>
            </div>
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

export default CarouselsUnion1;
