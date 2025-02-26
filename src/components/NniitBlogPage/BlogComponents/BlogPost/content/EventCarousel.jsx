import React, { useState, useRef, useEffect } from "react";
import EventCard from "../../MastersUnion/Card1"; // Import your EventCard component

const EventCarousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    const maxIndex = data.length - (isMobile ? 1 : 2);
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    const maxIndex = data.length - (isMobile ? 1 : 2);
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
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
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
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
            {data.map((item, index) => (
              <div
                className={`${
                  isMobile
                    ? "min-w-[90%] sm:min-w-[95%] px-2"
                    : "w-1/2 px-4"
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

export default EventCarousel;
