// import React, { useState } from 'react';
// import img1 from '../../../assets/vipkid/image_1.png';
// import img2 from '../../../assets/vipkid/image_22.png';
// import img3 from '../../../assets/vipkid/image_3.png';
// import img4 from '../../../assets/vipkid/image_4.png';
// import img5 from '../../../assets/vipkid/image_5.png';

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [img1, img2, img3, img4, img5];

//   const goToSlide = (index) => {
//     if (index !== currentIndex) {
//       setCurrentIndex(index);
//     }
//   };

//   return (
//     <div className="relative w-full overflow-hidden bg-gray-100 py-8">
//       {/* Heading */}
//       <h2 className="text-center text-4xl md:text-4xl font-bold font-sf mt-0">
//         NNIIT's Academic Structure
//       </h2>

//       {/* Image Carousel */}
//       <div className="overflow-hidden flex justify-center">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 100}%` }}
//         >
//           {images.map((image, index) => (
//             <div key={index} className="w-full flex-shrink-0 flex justify-center">
//               <img
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover max-w-[700px] rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Left Arrow (Desktop Only) */}
//       <button
//         onClick={() => goToSlide((currentIndex - 1 + images.length) % images.length)}
//         className="hidden sm:block absolute top-1/2 left-3 sm:left-12 md:left-24 transform -translate-y-1/2 bg-gray-800 text-white p-2 sm:p-3 rounded-full hover:bg-gray-700 focus:outline-none"
//       >
//         &#10094;
//       </button>

//       {/* Right Arrow (Desktop Only) */}
//       <button
//         onClick={() => goToSlide((currentIndex + 1) % images.length)}
//         className="hidden sm:block absolute top-1/2 right-3 sm:right-12 md:right-24 transform -translate-y-1/2 bg-gray-800 text-white p-2 sm:p-3 rounded-full hover:bg-gray-700 focus:outline-none"
//       >
//         &#10095;
//       </button>

//       {/* Dots */}
//       <div className="flex justify-center -mt-3 md:-mt-10 space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-4 w-4 rounded-full cursor-pointer transition-all focus:outline-none flex items-center justify-center ${
//               index === currentIndex ? 'bg-gray-800 scale-125' : 'bg-gray-400'
//             }`}
//           >
//             <span className="sr-only">Go to slide {index + 1}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;


import React, { useState, useRef } from 'react';
import img1 from '../../../assets/vipkid/image_1.png';
import img2 from '../../../assets/vipkid/image_22.png';
import img3 from '../../../assets/vipkid/image_3.png';
import img4 from '../../../assets/vipkid/image_4.png';
import img5 from '../../../assets/vipkid/image_5.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5];
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToSlide = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50; // Minimum swipe distance
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (swipeDistance > swipeThreshold) {
      goToSlide((currentIndex + 1) % images.length); // Swipe left
    } else if (swipeDistance < -swipeThreshold) {
      goToSlide((currentIndex - 1 + images.length) % images.length); // Swipe right
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 py-8">
      {/* Heading */}
       {/* Header */}
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
            <p className="text-center text-[10px] text-gray-400 mt-1 font-serif font-light">
              DISCOVER NEW PERSPECTIVES
            </p>
          </div>
          <h2 className="text-start text-2xl md:text-4xl font-bold font-sf mt-0 mr-10">
        NNIIT's Academic Structure
      </h2>
        </header>
     

      {/* Image Carousel */}
      <div className="overflow-hidden flex -mt-10 md justify-center" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 100}%` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover max-w-[700px] rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow (Desktop Only) */}
      <button
        onClick={() => goToSlide((currentIndex - 1 + images.length) % images.length)}
        className="hidden sm:block absolute top-1/2 left-3 sm:left-12 md:left-24 transform -translate-y-1/2 bg-gray-800 text-white p-2 sm:p-3 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &#10094;
      </button>

      {/* Right Arrow (Desktop Only) */}
      <button
        onClick={() => goToSlide((currentIndex + 1) % images.length)}
        className="hidden sm:block absolute top-1/2 right-3 sm:right-12 md:right-24 transform -translate-y-1/2 bg-gray-800 text-white p-2 sm:p-3 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="flex justify-center -mt-3 md:-mt-10 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-4 w-4 rounded-full cursor-pointer transition-all focus:outline-none flex items-center justify-center ${
              index === currentIndex ? 'bg-gray-800 scale-125' : 'bg-gray-400'
            }`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
