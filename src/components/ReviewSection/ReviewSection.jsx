// import React, { useRef, useState, useEffect } from 'react';
// import ReviewCard from './ReviewCard';
// import backgroundImage from '../../assets/gradient1.jpg'; // Import the background image
// import double from '../../assets/doubleface.png';

// const reviews = [
//   {
//     title: 'NEW VISIT BY MEDICAL CENTER',
//     text: "The cosmetician isn't just about enhancing beauty, but crafting confidence.",
//     reviewer: {
//       name: 'Jenna Milton',
//       role: 'Visit Cosmetician',
//       avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
//     },
//   },
//   {
//     title: 'MEDICAL CENTER PATIENT',
//     text: "In the realm of care, my doctor here isn't just a practitioner; they're a guardian of health.",
//     rating: 4.9,
//     reviewer: {
//       name: 'Maria Reed',
//       role: 'Visit Female Doctor - Dr. Mila Milana',
//       avatar: double,
//     },
//     variant: 'image', // Use 'image' variant for the second card
//   },
//   {
//     title: 'NEW VISIT BY MEDICAL CENTER',
//     text: "The cosmetician isn't just about enhancing beauty, but crafting confidence.",
//     reviewer: {
//       name: 'Jenna Milton',
//       role: 'Visit Cosmetician',
//       avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
//     },
//   },
//   {
//     title: 'NEW VISIT BY MEDICAL CENTER',
//     text: "The cosmetician isn't just about enhancing beauty, but crafting confidence.",
//     reviewer: {
//       name: 'Jenna Milton',
//       role: 'Visit Cosmetician',
//       avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
//     },
//   },
//   {
//     title: 'NEW VISIT BY MEDICAL CENTER',
//     text: "The cosmetician isn't just about enhancing beauty, but crafting confidence.",
//     reviewer: {
//       name: 'Jenna Milton',
//       role: 'Visit Cosmetician',
//       avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
//     },
//   },
//   // Other reviews...
// ];

// export default function ReviewSection() {
//   const scrollRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const totalItems = reviews.length;

//   const handleScroll = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       const progress = scrollLeft / (scrollWidth - clientWidth);
//       const index = Math.round(progress * (totalItems - 1)) + 1;
//       setCurrentIndex(index);
//     }
//   };

//   useEffect(() => {
//     const scrollElement = scrollRef.current;
//     if (scrollElement) {
//       scrollElement.addEventListener('scroll', handleScroll);
//       return () => scrollElement.removeEventListener('scroll', handleScroll);
//     }
//   }, []);

//   return (
//     <div className='mt-10 ml-5 md:ml-10'>
//   <header className="mb-4 px-4 -ml-[-1] md:ml-6">
//     <div className="flex items-center space-x-1 mb-0.5">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="14"
//         height="14"
//         viewBox="0 0 24 24"
//         fill="none"
//         className="relative -top-1.2"
//       >
//         <path
//           d="M24 11.9914C19.2924 12.4191 16.5877 12.8125 14.9272 14.1126C12.9757 15.6351 12.5136 18.4234 12 24C11.4693 18.2181 10.99 15.4469 8.85021 13.9587C7.18973 12.7954 4.50214 12.4191 0 12.0086C4.69044 11.5809 7.41227 11.1875 9.05564 9.90449C11.0243 8.36493 11.4864 5.59373 12 0C12.4793 5.14897 12.9073 7.90306 14.4993 9.49394C16.0913 11.0848 18.8645 11.5296 24 11.9914Z"
//           fill="url(#paint0_linear)"
//         />
//         <defs>
//           <linearGradient
//             id="paint0_linear"
//             x1="12"
//             y1="0"
//             x2="12"
//             y2="24"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#39B6D8" />
//             <stop offset="0.5" stopColor="#F7D344" />
//             <stop offset="1" stopColor="#E38330" />
//           </linearGradient>
//         </defs>
//       </svg>
//       <p className="text-[10px] text-gray-400 mt-2 font-serif font-light">
//         DISCOVER NEW PERSPECTIVES
//       </p>
//     </div>
    
//     <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-black -mt-0 text-left">
//       #Wall Of Love
//     </h3>
//   </header>
//   <div className="py-2 -px-1 md:px-4 md:m-10">
//     <div
//       ref={scrollRef}
//       className="flex gap-2 overflow-x-auto pb-8 scrollbar-hide"
//       style={{
//         scrollSnapType: 'x mandatory',
//         WebkitOverflowScrolling: 'touch',
//       }}
//     >
//       {reviews.map((review, index) => {
//         const isSecondCard = index === 1 || (index > 1 && (index - 1) % 2 === 0);
//         const backgroundImage2 = isSecondCard && review.variant === 'image' ? review.backgroundImage : null;

//         return (
//           <div
//             key={index}
//             className="snap-start"
//             style={{ scrollSnapAlign: 'start' }}
//           >
//             <ReviewCard
//               {...review}
//               isSecondCard={isSecondCard}
//               backgroundImage={backgroundImage2}
//             />
//           </div>
//         );
//       })}
//     </div>

//     <div className="flex justify-center mt-4">
//       <p className="text-sm text-gray-400">
//         {currentIndex} / {totalItems}
//       </p>
//     </div>
//   </div>
// </div>

//   );
// }


import React, { useRef, useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import backgroundImage from '../../assets/gradient1.jpg'; // Import the background image
import double from '../../assets/doubleface.png';

const reviews = [
  {
    title: 'NEW VISIT BY MEDICAL CENTER',
    text: "The cosmetician isn't just about enhancing beauty, but crafting confidence.",
    reviewer: {
      name: 'Jenna Milton',
      role: 'Visit Cosmetician',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    },
  },
  {
    title: 'MEDICAL CENTER PATIENT',
    text: "In the realm of care, my doctor here isn't just a practitioner; they're a guardian of health.",
    rating: 4.9,
    reviewer: {
      name: 'Maria Reed',
      role: 'Visit Female Doctor - Dr. Mila Milana',
      avatar: double,
    },
    variant: 'image', // Use 'image' variant for the second card
  },
  {
    title: 'NEW VISIT BY MEDICAL CENTER',
    text: "The cosmetician isn't just about enhancing beauty, but crafting confidence.",
    reviewer: {
      name: 'Jenna Milton',
      role: 'Visit Cosmetician',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    },
  },
  {
    title: 'NEW VISIT BY MEDICAL CENTER',
    text: "The cosmetician isn't just about enhancing beauty, but crafting confidence.",
    reviewer: {
      name: 'Jenna Milton',
      role: 'Visit Cosmetician',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    },
  },
  {
    title: 'MEDICAL CENTER PATIENT',
    text: "In the realm of care, my doctor here isn't just a practitioner; they're a guardian of health.",
    rating: 4.9,
    reviewer: {
      name: 'Maria Reed',
      role: 'Visit Female Doctor - Dr. Mila Milana',
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
    <div className='mt-10 ml-5 md:ml-10'>
      <header className="mb-4 px-4 -ml-[-1] md:ml-6">
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
          #Wall Of Love
        </h3>
      </header>
      <div className="py-2 -px-1 md:px-4 md:m-10">
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

        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-400">
            {currentIndex} / {totalItems}
          </p>
        </div>
      </div>
    </div>
  );
}
