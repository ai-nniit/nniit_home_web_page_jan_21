// import React, { useState } from 'react';
// import img1 from '../../../assets/vipkid/image_1.png';
// import img2 from '../../../assets/vipkid/image_22.png';
// import img3 from '../../../assets/vipkid/image_3.png';
// import img4 from '../../../assets/vipkid/image_4.png';
// import img5 from '../../../assets/vipkid/image_5.png';

// const NeetCustomCurriculum = () => {
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

// export default NeetCustomCurriculum;


import React, { useState } from 'react';
import img1 from '../../../assets/vipkid/image_1.png';
import img2 from '../../../assets/vipkid/image_22.png';
import img3 from '../../../assets/vipkid/image_3.png';
import img4 from '../../../assets/vipkid/image_4.png';
import img5 from '../../../assets/vipkid/image_5.png';

const NeetCustomCurriculum = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 py-8">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-4xl font-bold font-sf mt-0">
        NNIIT's Academic Structure
      </h2>

      {/* Image Carousel */}
      <div className="overflow-hidden flex justify-center">
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

export default NeetCustomCurriculum;
