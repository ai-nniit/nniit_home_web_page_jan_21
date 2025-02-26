import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

import card2 from "../../assets/Card1.png";
import card1 from "../../assets/Card2.png";
import card3 from "../../assets/Card4.png";

const ScrollLockedFeatureSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const touchStartX = useRef(0); // Store initial touch position (horizontal)
  const touchStartTime = useRef(0); // Store the time of touch start
  const touchEndX = useRef(0); // Store final touch position (horizontal)
  const touchEndTime = useRef(0); // Store the time of touch end
  const isScrollLocked = useRef(false); // Manage page scroll lock state
  const cardVisibility = useRef([]); // Store visibility state for each card

  const features = [
    {
      title: "One-on-One Learning",
      description:
        "Choose from fixed, preconfigured questions, or let the candidates respond in their own time.",
      bgColor: "bg-green-100",
      icon: "💬",
      image: card2, // Replace with actual image URLs
    },
    {
      title: "Personalized Learning",
      description: "48% of HR managers admit bias affects their candidate choice.",
      bgColor: "bg-pink-100",
      icon: "📊",
      image: card1,
    },
    {
      title: "Comprehensive Analytics",
      description:
        "Get detailed insights about candidate performance to make better decisions.",
      bgColor: "bg-blue-100",
      icon: "📒",
      image: card3,
    },
  ];

  const lockScroll = () => {
    if (!isScrollLocked.current) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      isScrollLocked.current = true;
    }
  };

  const unlockScroll = () => {
    if (isScrollLocked.current) {
      document.body.style.overflow = ""; // Restore scrolling
      isScrollLocked.current = false;
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = new Date().getTime(); // Capture the touch start time
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    touchEndTime.current = new Date().getTime(); // Capture the touch end time

    const deltaX = touchStartX.current - touchEndX.current;
    const swipeDuration = touchEndTime.current - touchStartTime.current;
    const transitionSpeed = Math.max(300, Math.min(1500, swipeDuration)); // Limit transition duration between 300ms and 1500ms

    // Check visibility of current card before locking
    if (deltaX > 50 && currentIndex < features.length - 1) {
      // Swipe left
      if (cardVisibility.current[currentIndex]) {
        lockScroll();
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    } else if (deltaX < -50 && currentIndex > 0) {
      // Swipe right
      if (cardVisibility.current[currentIndex]) {
        lockScroll();
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    } else {
      unlockScroll();
    }

    // Apply the calculated transition speed to cards
    document.documentElement.style.setProperty(
      "--card-transition-duration",
      `${transitionSpeed}ms`
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10); // Card index
          cardVisibility.current[index] = entry.intersectionRatio >= 0.8; // Check if 80% is visible
        });
      },
      {
        threshold: [0.8], // Trigger when 80% is visible
      }
    );

    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    section.addEventListener("touchstart", handleTouchStart, { passive: true });
    section.addEventListener("touchmove", handleTouchMove, { passive: true });
    section.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchmove", handleTouchMove);
      section.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex]);

  return (
    <div
    ref={sectionRef}
    className="relative h-screen w-full bg-white overflow-hidden"
  >
    <div className="mb-10 text-center mt-10">
    <header className="mb-4 px-4">
          <div className="flex items-center space-x-1 mb-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="relative -top-1.2"
            >
              <path
                d="M24 11.9914C19.2924 12.4191 16.5877 12.8125 14.9272 14.1126C12.9757 15.6351 12.5136 18.4234 12 24C11.4693 18.2181 10.99 15.4469 8.85021 13.9587C7.18973 12.7954 4.50214 12.4191 0 12.0086C4.69044 11.5809 7.41227 11.1875 9.05564 9.90449C11.0243 8.36493 11.4864 5.59373 12 0C12.4793 5.14897 12.9073 7.90306 14.4993 9.49394C16.0913 11.0848 18.8645 11.5296 24 11.9914Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="12"
                  y1="0"
                  x2="12"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#39B6D8" />
                  <stop offset="0.5" stopColor="#F7D344" />
                  <stop offset="1" stopColor="#E38330" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-[10px] text-gray-400 mt-2 font-serif font-light">
              DISCOVER NEW PERSPECTIVES
            </p>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-black -mt-0 text-left">
            Features We Provide
          </h3>
        </header>
    </div>
  
    <div className="absolute inset-0 mt-10 flex flex-row items-center justify-center">
      {features.map((feature, index) => (
        <div
          key={index}
          data-index={index} // Add data attribute for indexing
          className={`feature-card absolute h-[90%] w-[70%] flex flex-col items-center justify-center p-4 md:p-8 rounded-lg shadow-lg ${feature.bgColor} transform transition-transform duration-[var(--card-transition-duration,1500ms)] ease-in-out ${
            index === currentIndex
              ? "translate-x-0 opacity-100 scale-100 z-10"
              : index < currentIndex
              ? "-translate-x-[30%] opacity-80 scale-90 z-0"
              : "translate-x-[30%] opacity-80 scale-90 z-0"
          }`}
          style={{
            zIndex: features.length - index, // Ensure overlapping order
          }}
        >
          <div className="h-[35%] flex flex-col items-start justify-start w-full px-4">
            <div className="text-3xl mb-2">{feature.icon}</div>
            <h2 className="text-lg md:text-xl font-bold mb-1 text-gray-800">
              {feature.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              {feature.description}
            </p>
          </div>
          <div
            className="h-[55%] w-full bg-cover bg-center rounded-b-lg overflow-hidden"
            style={{ backgroundImage: `url(${feature.image})` }}
          ></div>
        </div>
      ))}
    </div>
  
    {/* Tailwind CSS Media Query */}
    <style jsx>{`
      @media (max-width: 768px) {
        .feature-card {
          width: 75%;
          height: 80%;
          padding: 2rem;
        }
        .feature-card .h-[35%] {
          height: 40%;
        }
        .feature-card .h-[55%] {
          height: 50%;
        }
      }
      @media (max-width: 640px) {
        .feature-card {
          width: 90%;
          height: 75%;
          padding: 1.5rem;
        }
        .feature-card .h-[35%] {
          height: 40%;
        }
        .feature-card .h-[55%] {
          height: 50%;
        }
      }
    `}</style>
  </div>
  
  );
};

export default ScrollLockedFeatureSection;
