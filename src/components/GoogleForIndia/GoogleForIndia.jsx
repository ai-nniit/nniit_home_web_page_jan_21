import React from "react";
// const CollectionHeader = () => (
//   <div className="mb-8">
//     <div className="flex items-center gap-2 text-gray-600 mb-4">
//       {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
//       </svg> */}
//       {/* <span className="uppercase text-sm font-medium">Collection</span> */}
//     </div>
//     <h1 className="text-2xl font-semibold text-gray-900 mb-3">Trending At NNIIT</h1>

//     <button className="text-blue-600 flex items-center gap-1 hover:text-blue-700">
//       View the collection
//       <svg
//         className="w-4 h-4"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9 5l7 7-7 7"
//         />
//       </svg>
//     </button>
//   </div>
// );

// const AnnouncementCard = ({ image, category, title, postedBy, bgColor }) => (
//   <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
//     <div className={`relative h-48 ${bgColor}`}>
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-full object-cover"
//       />
//     </div>
//     <div className="p-4">
//       <div className="text-blue-600 text-sm font-medium mb-2">{category}</div>
//       <h3 className="text-lg font-medium text-gray-900 mb-4 line-clamp-2">
//         {title}
//       </h3>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2 text-sm text-gray-600">
//           <span>Posted by</span>
//           <span className="font-medium">{postedBy}</span>
//         </div>
//         <svg
//           className="w-5 h-5 text-gray-400"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </div>
//     </div>
//   </div>
// );

// const GoogleForIndia2024 = () => {
//   const announcements = [
//     {
//       image: img1,
//       category: "NCERT Solutions",
//       title: "Detailed Chapter-wise Solutions, Formulas, and Explanations.",
//       postedBy: "NNIIT",
//       bgColor: "bg-yellow-100",
//     },
//     {
//       image: img2,
//       category: "Previous Year Questions",
//       title: "Previous Year Question Papers with solutions and analysis.",
//       postedBy: "NNIIT",
//       bgColor: "bg-green-100",
//     },
//     {
//       image: img3,
//       category: "Important Questions Chapter-wise",
//       title: "Driving large-scale impact for businesses and individuals through Gem...",
//       postedBy: "NNIIT",
//       bgColor: "bg-red-100",
//     },
//     {
//         image: img1,
//         category: "Important Questions Chapter-wise",
//         title: "Driving large-scale impact for businesses and individuals through Gem...",
//         postedBy: "NNIIT",
//         bgColor: "bg-red-100",
//       },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <CollectionHeader />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {announcements.map((announcement, index) => (
//           <AnnouncementCard key={index} {...announcement} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GoogleForIndia2024;

//import React from 'react';


import img1 from "../../assets/GoogleforIndia/iitjee.png";
import img2 from "../../assets/GoogleforIndia/neet.png";
import img3 from "../../assets/GoogleforIndia/ipmat.png";
import { ArrowRight } from 'lucide-react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ImCrying2 } from "react-icons/im";

const CollectionGrid = ({ collectionData, cards }) => {
  return (
    <div className="container mx-auto p-6 -mt-6 md:p-18">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - Collection Info */}
        <div className="lg:w-2/5">
          <div className="flex items-center gap-1 mb-4">
            {/* <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
              <path d="M7 7h10M7 12h10M7 17h10" strokeWidth="2" />
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" className="relative -top-1.2">
                <path
                  d="M24 11.9914C19.2924 12.4191 16.5877 12.8125 14.9272 14.1126C12.9757 15.6351 12.5136 18.4234 12 24C11.4693 18.2181 10.99 15.4469 8.85021 13.9587C7.18973 12.7954 4.50214 12.4191 0 12.0086C4.69044 11.5809 7.41227 11.1875 9.05564 9.90449C11.0243 8.36493 11.4864 5.59373 12 0C12.4793 5.14897 12.9073 7.90306 14.4993 9.49394C16.0913 11.0848 18.8645 11.5296 24 11.9914Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient id="paint0_linear" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#39B6D8" />
                    <stop offset="0.5" stopColor="#F7D344" />
                    <stop offset="1" stopColor="#E38330" />
                  </linearGradient>
                </defs>
              </svg>

            <span className="text-sm font-extrabold font-serif tracking-wider text-gray-600">
              COLLECTION
            </span>
          </div>

          <h1 className="text-3xl font-extrabold font-serif mb-2">{collectionData.title}</h1>
          <p className="text-gray-600 font-extralight font-serif mb-6">{collectionData.description}</p>

          <a
            href={collectionData.link}
            className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 font-medium"
          >
            View the collection
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Section - Cards Grid for Desktop */}
        <div className="hidden lg:block lg:w-3/5">
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

        {/* Right Section - Sliding Cards for Mobile */}
        <div className="block lg:hidden w-full">
          <div className="flex overflow-x-auto gap-3 scrollbar-hide">
            {cards.map((card, index) => (
              <div
                key={index}
                className="min-w-[75%] max-w-[75%] flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[3/2]">
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
      title: "IPMAT Success Awaits: Expert Coaching for a Secure Path into India’s Leading B-Schools",
      purchased: "1.6L+ bought in past month",
      author: "NNIIT",
      rating: 4.8,
      members: "(85k)"
    },
  ];

  return <CollectionGrid collectionData={collectionData} cards={cards} />;
};

export default ExampleUsage;
