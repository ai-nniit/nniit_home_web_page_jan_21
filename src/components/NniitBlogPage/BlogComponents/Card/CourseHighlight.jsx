// import React, { useState, useEffect } from "react";
// import img1 from "../../assets/GoogleforIndia/iitjee.png";
// import img2 from "../../assets/GoogleforIndia/neet.png";
// import img3 from "../../assets/GoogleforIndia/ipmat.png";
// import { ArrowRight } from 'lucide-react';
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// const CollectionGrid = ({ collectionData, cards }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-scroll functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [cards.length]);

//   return (
//     <div className="container mx-auto p-4">
//       {/* Right Section - Cards Grid */}
//       <div className="lg:hidden">
//         <div className="relative h-[500px]"> {/* Added fixed height for consistent layout */}
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-700 ${
//                 index === currentIndex ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <div className="bg-white rounded-lg overflow-hidden shadow-md">
//                 <div className="relative aspect-[4/3]">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
//                 </div>

//                 <div className="p-4">
//                   <span className="text-xs font-medium tracking-wider text-blue-600 mb-2 block">
//                     {card.label}
//                   </span>

//                   <h3 className="font-semibold text-lg mb-4 line-clamp-2">
//                     {card.title}
//                   </h3>

//                   <p className="text-xs text-gray-700 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
//                     <span className="text-blue-600 font-semibold">
//                       {card.purchased.split(" ")[0]}
//                     </span>{" "}
//                     bought in past month
//                   </p>

//                   {/* Star Rating */}
//                   <div className="flex items-center text-yellow-500 mb-2">
//                     {renderStars(card.rating)}
//                     <span className="text-gray-600 text-sm ml-2">
//                       {card.rating.toFixed(1)} {card.members}
//                     </span>
//                   </div>

//                   <div className="flex items-center justify-between text-sm text-gray-600">
//                     <span>Posted by {card.author}</span>
//                     <ArrowRight className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Desktop view */}
//       <div className="hidden lg:flex flex-col lg:flex-row gap-8">
//         <div className="lg:w-2/5">
//           <div className="flex items-center gap-1 mb-4">
//             <svg
//               className="w-5 h-5"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//             >
//               <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
//               <path d="M7 7h10M7 12h10M7 17h10" strokeWidth="2" />
//             </svg>
//             <span className="text-sm font-medium tracking-wider text-gray-600">
//               COLLECTION
//             </span>
//           </div>

//           <h1 className="text-3xl font-bold mb-2">{collectionData.title}</h1>
//           <p className="text-gray-600 mb-6">{collectionData.description}</p>

//           <a
//             href={collectionData.link}
//             className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 font-medium"
//           >
//             View the collection
//             <ArrowRight className="w-4 h-4" />
//           </a>
//         </div>

//         <div className="lg:w-3/5">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-md transition-shadow"
//               >
//                 <div className="relative aspect-[4/3]">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
//                 </div>

//                 <div className="p-4">
//                   <span className="text-xs font-medium tracking-wider text-blue-600 mb-2 block">
//                     {card.label}
//                   </span>

//                   <h3 className="font-semibold text-lg mb-4 line-clamp-2">
//                     {card.title}
//                   </h3>

//                   <p className="text-xs text-gray-700 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
//                     <span className="text-blue-600 font-semibold">
//                       {card.purchased.split(" ")[0]}
//                     </span>{" "}
//                     bought in past month
//                   </p>

//                   <div className="flex items-center text-yellow-500 mb-2">
//                     {renderStars(card.rating)}
//                     <span className="text-gray-600 text-sm ml-2">
//                       {card.rating.toFixed(1)} {card.members}
//                     </span>
//                   </div>

//                   <div className="flex items-center justify-between text-sm text-gray-600">
//                     <span>Posted by {card.author}</span>
//                     <ArrowRight className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Function to render stars
// function renderStars(rating) {
//   const fullStars = Math.floor(rating); // Number of full stars
//   const hasHalfStar = rating % 1 >= 0.5; // Whether to show a half star
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <>
//       {Array.from({ length: fullStars }).map((_, i) => (
//         <FaStar key={`full-${i}`} />
//       ))}
//       {hasHalfStar && <FaStarHalfAlt key="half" />}
//       {Array.from({ length: emptyStars }).map((_, i) => (
//         <FaRegStar key={`empty-${i}`} />
//       ))}
//     </>
//   );
// }

// // Example usage with placeholder data
// const ExampleUsage = () => {
//   const collectionData = {
//     title: "Trending At NNIIT",
//     description:
//       "Stay up-to-date with the latest innovations, events, and achievements shaping the future at NNIIT. Explore our cutting-edge programs, success stories, and impactful initiatives driving excellence in education and technology.",
//     link: "#",
//   };

//   const cards = [
//     {
//       image: img1,
//       label: "IIT/ JEE",
//       title: "Crack JEE with Confidence: Focused Learning and Expert Guidance to Secure Your Future.",
//       purchased: "2L+ bought in past month",
//       author: "NNIIT",
//       rating: 5.0,
//       members: "(80k)"
//     },
//     {
//       image: img2,
//       label: "NEET",
//       title: "Achieve Medical Excellence: NEET Preparation that Turns Dreams into Reality.",
//       purchased: "1.8L+ bought in past month",
//       author: "NNIIT",
//       rating: 4.9,
//       members: "(85k)"
//     },
//     {
//       image: img3,
//       label: "IPMAT",
//       title: "IPMAT Strategic Approach: Transforming Aspirations into Management Success Stories.",
//       purchased: "1.5L+ bought in past month",
//       author: "NNIIT",
//       rating: 4.8,
//       members: "(70k)"
//     }
//   ];

//   return <CollectionGrid collectionData={collectionData} cards={cards} />;
// };

// export default ExampleUsage;

import React, { useState, useEffect } from "react";
import img1 from "../../Blogassets/GoogleforIndia/iitjee.png";
import img2 from "../../Blogassets/GoogleforIndia/neet.png";
import img3 from "../../Blogassets/GoogleforIndia/ipmat.png";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const CollectionGrid = ({ collectionData, cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  // Navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="container mx-auto p-4">
      <p className="text-2xl font-bold font-serif">Trending at NNIIT</p>
      {/* Right Section - Cards Grid for Mobile View */}
      <div className="lg:hidden">
        <div className="relative h-[500px]"> {/* Added fixed height for consistent layout */}
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-[4/3]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                </div>

                <div className="p-4">
                  <span className="text-xs font-medium tracking-wider text-blue-600 mb-2 block">
                    {card.label}
                  </span>

                  <h3 className="font-semibold text-lg mb-4 line-clamp-2">
                    {card.title}
                  </h3>

                  <p className="text-xs text-gray-700 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    <span className="text-blue-600 font-semibold">
                      {card.purchased.split(" ")[0]}
                    </span>{" "}
                    bought in past month
                  </p>

                  {/* Star Rating */}
                  <div className="flex items-center text-yellow-500 mb-2">
                    {renderStars(card.rating)}
                    <span className="text-gray-600 text-sm ml-2">
                      {card.rating.toFixed(1)} {card.members}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Posted by {card.author}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Navigation Arrows */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/5">
          <div className="flex items-center gap-1 mb-4">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
              <path d="M7 7h10M7 12h10M7 17h10" strokeWidth="2" />
            </svg>
            <span className="text-sm font-medium tracking-wider text-gray-600">
              COLLECTION
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-2">{collectionData.title}</h1>
          <p className="text-gray-600 mb-6">{collectionData.description}</p>

          <a
            href={collectionData.link}
            className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 font-medium"
          >
            View the collection
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="lg:w-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                </div>

                <div className="p-4">
                  <span className="text-xs font-medium tracking-wider text-blue-600 mb-2 block">
                    {card.label}
                  </span>

                  <h3 className="font-semibold text-lg mb-4 line-clamp-2">
                    {card.title}
                  </h3>

                  <p className="text-xs text-gray-700 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    <span className="text-blue-600 font-semibold">
                      {card.purchased.split(" ")[0]}
                    </span>{" "}
                    bought in past month
                  </p>

                  <div className="flex items-center text-yellow-500 mb-2">
                    {renderStars(card.rating)}
                    <span className="text-gray-600 text-sm ml-2">
                      {card.rating.toFixed(1)} {card.members}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Posted by {card.author}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Function to render stars
function renderStars(rating) {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 >= 0.5; // Whether to show a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {Array.from({ length: fullStars }).map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {hasHalfStar && <FaStarHalfAlt key="half" />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </>
    );
  }

  // Example usage with placeholder data
  const ExampleUsage = () => {
    const collectionData = {
      title: "Trending At NNIIT",
      description:
        "Stay up-to-date with the latest innovations, events, and achievements shaping the future at NNIIT. Explore our cutting-edge programs, success stories, and impactful initiatives driving excellence in education and technology.",
      link: "#",
    };

    const cards = [
      {
        image: img1,
        label: "IIT/ JEE",
        title: "Crack JEE with Confidence: Focused Learning and Expert Guidance to Secure Your Future.",
        purchased: "2L+ bought in past month",
        author: "NNIIT",
        rating: 5.0,
        members: "(80k)"
      },
      {
        image: img2,
        label: "NEET",
        title: "Achieve Medical Excellence: NEET Preparation that Turns Dreams into Reality.",
        purchased: "1.8L+ bought in past month",
        author: "NNIIT",
        rating: 4.9,
        members: "(85k)"
      },
      {
        image: img3,
        label: "IPMAT",
        title: "IPMAT Strategic Approach: Transforming Aspirations into Management Success Stories.",
        purchased: "1.5L+ bought in past month",
        author: "NNIIT",
        rating: 4.8,
        members: "(70k)"
      }
    ];

    return <CollectionGrid collectionData={collectionData} cards={cards} />;
  };

  export default ExampleUsage;