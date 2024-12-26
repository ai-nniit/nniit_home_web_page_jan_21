import React from 'react';
import { ArrowRight } from 'lucide-react'; // Ensure this package is installed: `npm install lucide-react` or `yarn add lucide-react`

const TestimonialSlide = ({ testimonial, isActive }) => {
  return (
    <div
      className={`absolute inset-0 flex items-center transition-opacity duration-500 transform ${
        isActive ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 flex-shrink-0">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs sm:text-sm text-white/80 mb-4 sm:mb-6">
              LARGE ENTERPRISE
            </div>
            <blockquote className="text-lg sm:text-2xl md:text-4xl font-medium text-white mb-6 md:mb-8 leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
            <div className="space-y-2 sm:space-y-4">
              <div className="text-base sm:text-xl font-semibold text-white">
                {testimonial.name}
              </div>
              <div className="text-sm sm:text-base text-white/60">
                {testimonial.role}, {testimonial.company}
              </div>
              <a
                href={testimonial.caseStudyUrl}
                className="inline-flex items-center text-sm text-white/60 hover:text-white transition-colors mt-2 sm:mt-4"
              >
                Read {testimonial.company}'s case study
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
