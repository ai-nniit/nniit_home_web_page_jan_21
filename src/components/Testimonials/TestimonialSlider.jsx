// import React, { useState, useEffect } from 'react';
// import {testimonials}  from './data'; // Ensure the `data.js` file is correctly exported
// import  BackgroundShapes  from './BackgroundShapes';
// import  TestimonialSlide  from './TestimonialSlide';
// import  CompanyLogos  from './CompanyLogos';

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((current) => (current + 1) % testimonials.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-screen bg-gray-700 overflow-hidden px-10 sm:px-8">
//   <BackgroundShapes
//     accentColor={testimonials[currentIndex].accentColor}
//     secondaryColor={testimonials[currentIndex].secondaryColor}
//   />
//   <div className="relative min-h-screen flex flex-col max-w-[80%] mx-auto">
//     <div className="flex-1 relative">
//       {testimonials.map((testimonial, index) => (
//         <TestimonialSlide
//           key={testimonial.id}
//           testimonial={testimonial}
//           isActive={index === currentIndex}
//         />
//       ))}
//     </div>
//     <CompanyLogos />
//   </div>
// </section>
//   );
// };

// export default TestimonialSlider;




import React, { useState, useEffect } from 'react';
import { testimonials } from './data'; // Ensure the `data.js` file is correctly exported
import BackgroundShapes from './BackgroundShapes';
import TestimonialSlide from './TestimonialSlide';
import CompanyLogos from './CompanyLogos';
import expert1 from '../../assets/expert1.jpg'

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
  className="relative h-full bg-gray-700 overflow-visible px-6 sm:px-4 ml-5 mr-5"
  style={{
    clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)', // Adjusted to lower the slant
  }}
>
  {/* Background with dynamic colors */}
  <BackgroundShapes
    accentColor={testimonials[currentIndex].accentColor}
    secondaryColor={testimonials[currentIndex].secondaryColor}
  />
  <div className="relative min-h-[65vh] flex flex-col max-w-[90%] mx-auto sm:max-w-[50%]">
    {/* Testimonial Slides */}
    <div className="flex-1 relative">
      {testimonials.map((testimonial, index) => (
        <TestimonialSlide
          key={testimonial.id}
          testimonial={testimonial}
          isActive={index === currentIndex}
        />
      ))}

      {/* Image Placement */}
      <div
        className="absolute top-[-10%] sm:top-[-35%] left-[50%] transform -translate-x-1/2"
        style={{
          zIndex: 10, // Ensures the image is in the foreground
        }}
      >
        <img
          src={expert1}
          alt="Testimonial Highlight"
          className="max-w-full h-auto rounded-none shadow-lg"
        />
      </div>
    </div>

    {/* Company Logos Section */}
    <CompanyLogos className="mt-8 sm:mt-8" />
  </div>
</section>

  );
};

export default TestimonialSlider;


