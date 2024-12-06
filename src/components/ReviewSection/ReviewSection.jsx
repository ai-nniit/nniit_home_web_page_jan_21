// import React, { useRef, useState, useEffect } from 'react';
// import ReviewCard from './ReviewCard';

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
//       avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
//     },
//   },
//   {
//     title: 'BRUNCH 047',
//     text: "Trust isn't given; it's earned. And my surgeon here didn't just earn my trust, but my admiration.",
//     reviewer: {
//       name: 'Michiko Miller',
//       role: 'Surgeon Clinic',
//       avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150',
//     },
//   },
//   {
//     title: 'DENTIST VISIT',
//     text: "My dental clinic isn't just about fixing smiles; it's about creating them.",
//     reviewer: {
//       name: 'Sharon Roberts',
//       role: 'Dental Clinic',
//       avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
//     },
//   },
  
  
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
//     <div className="py-12 px-4 ">
//       <div 
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
//         style={{
//           scrollSnapType: 'x mandatory',
//           WebkitOverflowScrolling: 'touch',
//         }}
//       >
//         {reviews.map((review, index) => (
//           <div
//             key={index}
//             className="snap-start"
//             style={{ scrollSnapAlign: 'start' }}
//           >
//             <ReviewCard {...review} />
//           </div>
//         ))}
//       </div>
      
//       <div className="flex justify-center mt-4">
//         <p className="text-sm text-gray-400">
//           {currentIndex} / {totalItems}
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import img from '../../assets/logos/Forbes.png';
const reviews = [
  {
    title: "New Visit by Medical Center",
    text: "The cosmetician isn't just about enhancing beauty, but crafting confidence.",
    name: "Jenna Milton",
    role: "Visit Cosmetician",
    rating: null,
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    title: "Medical Center Patient",
    text: "In the realm of care, my doctor here isn't just a practitioner; they're a guardian of health.",
    name: "Maria Reed",
    role: "Dr. Nillo Millana",
    rating: 4.2,
    image: img,
  },
  {
    title: "Brunch 047",
    text: "Trust isn't given; it's earned. And my surgeon here didn't just earn my trust, but my admiration.",
    name: "Michiko Miller",
    role: "Surgeon Clinic",
    rating: null,
    image: "https://via.placeholder.com/50",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Add a YouTube video URL
  },
  {
    title: "Dentist Visit",
    text: "My dental clinic isn't just about fixing smiles; it's about creating them.",
    name: "Sharon Roberts",
    role: "Dental Clinic",
    rating: null,
    image: "https://via.placeholder.com/50",
  },
];

const ReviewSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const openVideo = (videoUrl) => {
    setIsVideoOpen(true);
    setCurrentVideoUrl(videoUrl);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setCurrentVideoUrl("");
  };

  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-gray-200 py-12 px-4 sm:px-8">
  <div className="max-w-[80%] mx-auto text-center mb-10">
    {/* Stylish Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
      The Stories That Inspire You
    </h2>
    <p className="text-gray-500 text-lg mt-2">
      Real experiences, real trust, real transformations.
    </p>
  </div>
  
  <div className="max-w-[80%] mx-auto ">
    {/* Review Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center h-auto max-h-[300px] bg-[radial-gradient(circle,_#FCFAFB_40%,_#FFECF0_60%,_#EDF8F2_80%)]"
        >
          <h3 className="text-gray-700 text-sm font-medium mb-2">
            {review.title}
          </h3>
          <p className="text-gray-500 text-sm sm:text-base mb-2 italic">
            {review.text}
          </p>
          {review.rating && (
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-sm font-bold mr-2">⭐</span>
              <span className="text-gray-600">{review.rating}</span>
            </div>
          )}
          <img
            src={review.image}
            alt={review.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-2"
          />
          <h4 className="text-gray-800 font-semibold">{review.name}</h4>
          <p className="text-gray-400 text-xs sm:text-sm mb-2">{review.role}</p>
          {/* Video Play Button */}
          {review.videoUrl && (
            <button
              onClick={() => openVideo(review.videoUrl)}
              className="text-blue-500 underline"
            >
              Watch Video
            </button>
          )}
        </div>
      ))}
    </div>
  </div>

  {/* Video Modal */}
  {isVideoOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeVideo}
    >
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent click propagation to close the modal
      >
        <iframe
          width="960"
          height="540"
          src={currentVideoUrl}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-auto max-w-[960px] max-h-[540px]"
        ></iframe>
      </div>
    </div>
  )}
</div>

  );
};

export default ReviewSection;

