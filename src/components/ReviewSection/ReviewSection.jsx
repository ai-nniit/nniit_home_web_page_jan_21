import React, { useRef, useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import backgroundImage from '../../assets/gradient1.jpg'; // Import the background image
import double from '../../assets/doubleface.png';
import a1 from '../../assets/a1.png'
import a2 from '../../assets/a2.png';
import a3 from '../../assets/a3.png';
import a4 from '../../assets/a4.png';

const reviews = [
  {
    title: 'OUR TOP REVIEWS',
    text: " The one-on-one coaching of NNIIT helped my son to understand tough IIT JEE topics easily and boosted his confidence! ",
    reviewer: {
      name: 'Rajesh Sharma',
      role: 'Manager at Infosys',
      avatar: a1,
    },
  },
  {
    title: 'OUR TOP REVIEWS',
    text: "We’re so thankful to NNIIT for all the support they’ve given our daughter. The personalized tutoring and the ability for her to learn at her own pace has made a huge difference.",
    rating: 4.9,
    reviewer: {
      name: 'Saurabh Tiwari, Pooja Tiwari ',
      role: 'Product Manager at Apple & Marketing Specialist at Microsoft',
      avatar: a4,
    },
    variant: 'image', // Use 'image' variant for the second card
  },
  {
    title: 'OUR TOP REVIEWS',
    text: "As a teacher at this organization, NNIIT's approach not only simplifies complex concepts but also ensures that learning fits smoothly into each student’s unique schedule.",
    reviewer: {
      name: 'Chaitanya Krishna',
      role: '11th SSC',
      avatar: a3,
    },
  },
  {
    title: 'OUR TOP REVIEWS',
    text: "Having a tutor always available at my time made IIT JEE prep stress-free and super effective!",
    reviewer: {
      name: 'Anusha Priya',
      role: 'XII ICSE',
      avatar: a2,
    },
  },
  {
    title: 'OUR TOP REVIEWS',
    text: "Whether for IIT JEE, NEET, or any exam, the personal coaching made everything clear and easy to understand!",
    rating: 4.9,
    reviewer: {
      name: 'Ishan Gupta & Usha Gupta',
      role: '',
      avatar: double,
    },
    variant: 'image', // Use 'image' variant for the second card
  },
  // Other reviews...
];

export default function ReviewSection() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalItems = reviews.length;

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      const index = Math.round(progress * (totalItems - 1)) + 1;
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='mt-10 ml-5 md:ml-5 mx-auto'>
    <header className="mb-4 px-3 -ml-[-1] md:ml-6">
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
        <p className="text-[10px] text-gray-400 mt-2 font-sf font-light">
          DISCOVER NEW PERSPECTIVES
        </p>
      </div>
  
      <h3 className="text-2xl md:text-3xl font-extrabold font-sf text-black -mt-0 text-left">
        #Wall Of Love
      </h3>
    </header>

    <div className="py-2 md:px-10 px-4 md:m-10 ">
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto pb-8 scrollbar-hide"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {reviews.map((review, index) => {
          const isSecondCard = index === 1 || (index > 1 && (index - 1) % 3 === 0);
          const bgImage = isSecondCard && review.variant === 'image' ? backgroundImage : null;
  
          return (
            <div
              key={index}
              className="snap-start"
              style={{ scrollSnapAlign: 'start' }}
            >
              <ReviewCard
                {...review}
                isSecondCard={isSecondCard}
                backgroundImage={bgImage}
              />
            </div>
          );
        })}
      </div>
  
      <div className="flex justify-center mt-1 mb-4">
        <p className="text-sm text-gray-400">
          {currentIndex} / {totalItems}
        </p>
      </div>
    </div>

  </div>
  
  );
}





