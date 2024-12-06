import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../assets/learningprogramslogos/iit_coach.jpg';
import img2 from '../../assets/learningprogramslogos/math_nniit.jpeg';
import img3 from '../../assets/learningprogramslogos/nniit_coaching.jpeg';

const ProgramCard = ({ image, title, subtitle, className = '', tag }) => (
  <div className="min-w-[300px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden mx-2">
    <div className="relative">
      {tag && (
        <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-md text-sm">
          {tag}
        </div>
      )}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{subtitle}</h3>
      <h2 className="text-xl font-bold text-purple-800 mt-1">{title}</h2>
      <button className="mt-4 text-purple-600 font-semibold hover:text-purple-800 transition-colors">
        Read more
      </button>
    </div>
  </div>
);

const LearningPrograms = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = 316; // 300px card width + 16px margin
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      container.scrollBy({
        left: scrollAmount * 2, // Scroll 3 cards at a time
        behavior: 'smooth'
      });
    }
  };

  // Extended program list with more cards
  const programs = [
    {
      image: img1,
      title: "Learning App",
      subtitle: "Study Pack",
      tag: "BYJU'S"
    },
    {
      image: img2,
      title: "BYJU'S Live Classes",
      subtitle: "Class 4 - 10",
      tag: "Class 4 - 10"
    },
    {
      image: img3,
      title: "Aakash BYJU'S Foundation Program",
      subtitle: "Class 8 - 10",
      tag: "JEE | NEET"
    },
    {
      image: img1,
      title: "Aakash BYJU'S App Program",
      subtitle: "Class 11 - 12",
      tag: "Class 11 - 12"
    },
    {
      image: img2,
      title: "IIT JEE Course",
      subtitle: "Class 11 - 12",
      tag: "JEE Advanced"
    },
    {
      image: img3,
      title: "NEET Preparation",
      subtitle: "Class 11 - 12",
      tag: "NEET UG"
    },
    {
      image: img2,
      title: "CUET Preparation",
      subtitle: "Class 12",
      tag: "CUET"
    },
    {
      image: img1,
      title: "Board Exams",
      subtitle: "Class 10 & 12",
      tag: "Boards"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Explore our Learning Programs
      </h1>
      
      <div className="relative">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-purple-600" />
        </button>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden scroll-smooth gap-4 pb-4"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {programs.map((program, index) => (
            <div 
              key={index}
              style={{ scrollSnapAlign: 'start' }}
            >
              <ProgramCard {...program} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-purple-600" />
        </button>
      </div>

      {/* Explore All Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-coral-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-coral-600 hover:to-pink-600 transition-all">
          Explore All
        </button>
      </div>
    </div>
  );
};

export default LearningPrograms;