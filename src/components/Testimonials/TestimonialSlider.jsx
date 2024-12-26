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

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] bg-gray-700 overflow-hidden px-6 sm:px-6">
      {/* Background with dynamic colors */}
      <BackgroundShapes
        accentColor={testimonials[currentIndex].accentColor}
        secondaryColor={testimonials[currentIndex].secondaryColor}
      />
      <div className="relative min-h-[90vh] flex flex-col max-w-[90%] mx-auto sm:max-w-[50%]">
        {/* Testimonial Slides */}
        <div className="flex-1 relative">
          {testimonials.map((testimonial, index) => (
            <TestimonialSlide
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === currentIndex}
            />
          ))}
        </div>

        {/* Company Logos Section */}
        <CompanyLogos className="mt-8 sm:mt-8" />
      </div>
    </section>
  );
};

export default TestimonialSlider;
