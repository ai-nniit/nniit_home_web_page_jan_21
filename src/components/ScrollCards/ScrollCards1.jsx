// import React, { useState, useRef, useEffect } from "react";
// import "tailwindcss/tailwind.css";

// import card2 from "../../assets/card1.webp";
// import card1 from "../../assets/card2.webp";

// const DesktopFeatureSection = () => {
//   const features = [
//     {
//       title: "One-on-One Learning",
//       description:
//         "Choose from fixed, preconfigured questions, or let the candidates respond in their own time.",
//       bgColor: "bg-green-100",
//       icon: "💬",
//       image: card2,
//     },
//     {
//       title: "Personalized Learning",
//       description: "48% of HR managers admit bias affects their candidate choice.",
//       bgColor: "bg-pink-100",
//       icon: "📊",
//       image: card1,
//     },
//     {
//       title: "Comprehensive Analytics",
//       description:
//         "Get detailed insights about candidate performance to make better decisions.",
//       bgColor: "bg-blue-100",
//       icon: "📒",
//       image: card2,
//     },
//     // Add more cards as needed
//   ];

//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     // Optional: Smooth scrolling for desktop users
//     const container = scrollContainerRef.current;
//     container.style.scrollBehavior = "smooth";
//   }, []);

//   return (
//     <div className="relative w-full bg-white py-16 px-8">
//       <div className="mb-10 text-center">
//         <header className="mb-4">
//           <div className="flex items-center space-x-1 mb-0.5 justify-center">
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
//             <p className="text-[10px] text-gray-400 font-serif font-light">
//               DISCOVER NEW PERSPECTIVES
//             </p>
//           </div>
//           <h3 className="text-3xl font-extrabold font-serif text-black">
//             Features We Provide
//           </h3>
//         </header>
//       </div>

//       <div
//         ref={scrollContainerRef}
//         className="flex overflow-x-auto space-x-8 px-8 py-4 scrollbar-hide"
//       >
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className={`feature-card flex-shrink-0 h-[400px] w-[350px] flex flex-col items-center justify-between p-4 md:p-6 rounded-lg shadow-lg ${feature.bgColor}`}
//           >
//             <div className="h-[35%] flex flex-col items-start justify-start w-full px-2">
//               <div className="text-3xl mb-2">{feature.icon}</div>
//               <h2 className="text-lg md:text-xl font-bold mb-1 text-gray-800">
//                 {feature.title}
//               </h2>
//               <p className="text-sm md:text-base text-gray-600">
//                 {feature.description}
//               </p>
//             </div>
//             <div
//               className="h-[55%] w-full bg-cover bg-center rounded-b-lg overflow-hidden"
//               style={{ backgroundImage: `url(${feature.image})` }}
//             ></div>
//           </div>
//         ))}
//       </div>

//       {/* Tailwind CSS Media Query */}
//       <style jsx>{`
//         @media (min-width: 1024px) {
//           .scrollbar-hide {
//             -ms-overflow-style: none; /* IE and Edge */
//             scrollbar-width: none; /* Firefox */
//           }
//           .scrollbar-hide::-webkit-scrollbar {
//             display: none; /* Chrome, Safari, and Opera */
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DesktopFeatureSection;


import React, { useState, useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";

import card2 from "../../assets/card1.webp";
import card1 from "../../assets/card2.webp";

const DesktopFeatureSection = () => {
  const features = [
    {
      title: "One-on-One Learning",
      description:
        "Choose from fixed, preconfigured questions, or let the candidates respond in their own time.",
      bgColor: "bg-green-100",
      icon: "💬",
      image: card2,
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
      image: card2,
    },
    {
        title: "One-on-One Learning",
        description:
          "Choose from fixed, preconfigured questions, or let the candidates respond in their own time.",
        bgColor: "bg-green-100",
        icon: "💬",
        image: card2,
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
        image: card2,
      },
    // Add more cards as needed
  ];

  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: currentIndex * scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / containerWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full bg-white py-16 px-8">
      <div className="mb-10 text-center">
        <header className="mb-4">
          <div className="flex items-center space-x-1 mb-0.5 justify-center">
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
            <p className="text-[10px] text-gray-400 font-serif font-light">
              DISCOVER NEW PERSPECTIVES
            </p>
          </div>
          <h3 className="text-3xl font-extrabold font-serif text-black">
            Features We Provide
          </h3>
        </header>
      </div>

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto space-x-8 px-8 py-4 scrollbar-hide"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card flex-shrink-0 h-[400px] w-[350px] flex flex-col items-center justify-between p-4 md:p-6 rounded-lg shadow-lg ${feature.bgColor}`}
          >
            <div className="h-[35%] flex flex-col items-start justify-start w-full px-2">
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
        @media (min-width: 1024px) {
          .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Chrome, Safari, and Opera */
          }
        }
      `}</style>
    </div>
  );
};

export default DesktopFeatureSection;