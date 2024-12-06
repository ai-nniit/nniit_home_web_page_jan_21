import React from 'react';
import { ArrowRight } from 'lucide-react'; // Ensure this package is installed: `npm install lucide-react` or `yarn add lucide-react`
// Import the type definition for clarity, though in .jsx files, type annotations won't apply.
// You can remove the `Testimonial` type if not strictly needed.

const TestimonialSlide = ({ testimonial, isActive }) => {
  return (
    <div
  className={`absolute inset-0 flex items-center transition-opacity duration-500 transform ${
    isActive ? 'opacity-100 translate-x-[-10%]' : 'opacity-0 pointer-events-none'
  }`}
>
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Image */}
      <div className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0">
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
        <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm text-white/80 mb-6">
          LARGE ENTERPRISE
        </div>
        <blockquote className="text-2xl md:text-4xl font-medium text-white mb-8 leading-relaxed">
          "{testimonial.quote}"
        </blockquote>
        <div className="space-y-2">
          <div className="text-xl font-semibold text-white">
            {testimonial.name}
          </div>
          <div className="text-white/60">
            {testimonial.role}, {testimonial.company}
          </div>
          <a
            href={testimonial.caseStudyUrl}
            className="inline-flex items-center text-sm text-white/60 hover:text-white transition-colors mt-4"
          >
            Read {testimonial.company}'s case study
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default TestimonialSlide;
