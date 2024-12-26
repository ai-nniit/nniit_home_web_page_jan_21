// import React from 'react';
// //import worldmapimg from '../../assets/world-map.webp';
// import worldmap from '../../assets/world-map1.jpg';
// import group from '../../assets/group.png'

// const WorldMap = () => (
//   <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20">
//     <path
//       d="M150,50 Q400,0 650,50 T1000,100 L1000,400 Q750,450 500,400 T0,350 L0,100 Q250,50 500,100"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="0.5"
//       className="text-blue-400"
//     />
//     {/* Simplified world map outline - you can add more detailed paths here */}
//     <path
//       d="M217.7,142.9c0,0,4.3-0.8,5.9-0.8c1.6,0,4.9-2.2,4.9-2.2l3.8,0.3l2.2,2.7l-0.3,3.8l-3.8,3.8l-4.3,1.1l-4.3-1.1l-4.3-3.8 L217.7,142.9z"
//       fill="currentColor"
//     />
//     {/* Add more country/continent paths as needed */}
//   </svg>
// );

// const ImpactMetrics = ({ statistics, annotations }) => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col lg:flex-row gap-12">
//         {/* Left Section */}
//         <div className="lg:w-1/2">
//           {/* Header Section */}
//           <header className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16">
//             {/* Logo/Icon */}
//             <div className="w-24 h-24 relative">
//               <div className="absolute w-16 h-16 bg-green-200 rounded-full right-0 bottom-0" />
//               <div className="absolute w-8 h-12 bg-yellow-400 left-4 bottom-2" />
//               <div className="absolute w-4 h-8 bg-purple-400 left-0 bottom-2" />
//             </div>
            
//             {/* Title and Subtitle */}
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold mb-3">
//                 Impact. At{' '}
//                 <span className="relative inline-block">
//                   <span className="text-orange-500">scale</span>
//                   <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-300 -z-10" />
//                 </span>
//               </h1>
//               <p className="text-lg text-gray-600">
//                 Making education affordable and accessible across the globe
//               </p>
//             </div>
//           </header>

//           {/* Statistics Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {statistics.map((stat, index) => (
//               <div key={index}>
//                 <h2 className="text-4xl font-bold mb-2">{stat.value}</h2>
//                 <p className="text-gray-600">{stat.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Section - World Map */}
//         <div className="lg:w-1/2">
//           <div className="relative w-full aspect-[4/3]">
//             {/* Map Background */}
//             <div className="absolute inset-0 left-[-80px] top-[50px]">
//               <img
//               src={worldmap} alt='worldmap'
//               />
//             </div>

//             {/* Annotation Bubbles */}
//             {annotations.map((annotation, index) => (
//               <div
//                 key={index}
//                 className="absolute group cursor-pointer"
//                 style={{ left: annotation.x, top: annotation.y }}
//               >
//                 {/* Profile Image */}
//                 <div className="w-12 h-12 rounded-full bg-white shadow-lg overflow-hidden">
//                   <img
//                     // src={`/api/placeholder/${49}/${49}`}
//                     src={group}
//                     // alt="Profile"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
                
//                 {/* Annotation Text */}
//                 <div className="flex items-center gap-2 bg-white rounded-full shadow-lg py-1 px-3 ml-4 mt-2">
//                   {annotation.icon && (
//                     <span className={`w-2 h-2 rounded-full ${annotation.icon}`} />
//                   )}
//                   <span className="text-sm whitespace-nowrap">{annotation.text}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Example usage with placeholder data
// const ExampleUsage1 = () => {
//   const statistics = [
//     {
//       value: "2.1+ crore",
//       description: "hours of LIVE learning"
//     },
//     {
//       value: "10+ lakh",
//       description: "monthly youtube views"
//     },
//     {
//       value: "25+ lakh",
//       description: "doubts resolved on the app"
//     },
//     {
//       value: "57+ countries",
//       description: "where students take LIVE classes"
//     }
//   ];

//   const annotations = [
//     {
//       x: "5%",
//       y: "38%",
//       text: "Short animated videos",
//       icon: "bg-orange-500"
//     },
//     {
//       x: "55%",
//       y: "40%",
//       text: "Daily LIVE classes",
//       icon: "bg-red-500"
//     },
//     {
//       x: "35%",
//       y: "58%",
//       text: "Unlimited doubt solving",
//       icon: "bg-purple-500"
//     },
//     {
//       x: "40%",
//       y: "20%",
//       text: "Secured 1L+ IIT/NEET ranks",
//       icon: "bg-green-500"
//     }
//   ];

//   return <ImpactMetrics statistics={statistics} annotations={annotations} />;
// };

// export default ExampleUsage1;

import React, { useEffect, useState, useRef } from 'react';
import worldmap from '../../assets/world-map1.jpg';
import group from '../../assets/group.png';
import mobileImage from '../../assets/world-map1.jpg';

// A helper function to handle the counting animation
const useCountUp = (target, duration, startCount) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    const increment = Math.ceil(target / (duration / 10)); // Increment value per interval
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(interval);
        setCount(target); // Ensure the final value is set
      } else {
        setCount(current);
      }
    }, 20); // 10ms interval

    return () => clearInterval(interval);
  }, [target, duration, startCount]);

  return count;
};

const ImpactMetrics = ({ statistics, annotations }) => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef();

  // Set up Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="mx-auto max-w-[80%] px-4 sm:px-8 lg:px-12 py-5">
  <div className="flex flex-col lg:flex-row gap-15">
    {/* Left Section */}
    <div className="lg:w-1/2">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16">
        <div className="w-24 h-24 relative">
          <div className="absolute w-16 h-16 bg-green-200 rounded-full right-0 bottom-0" />
          <div className="absolute w-8 h-12 bg-yellow-400 left-4 bottom-2" />
          <div className="absolute w-4 h-8 bg-purple-400 left-0 bottom-2" />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Impact. At{' '}
            <span className="relative inline-block">
              <span className="text-orange-500">scale</span>
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-300 -z-10" />
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Making education affordable and accessible across the globe
          </p>
        </div>
      </header>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {statistics.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold mb-2">
              {useCountUp(stat.value, 2000, startCount)}+
            </h2>
            <p className="text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Right Section */}
    <div className="lg:w-1/2">
      {/* Desktop View: World Map */}
      <div className="hidden lg:block relative w-full aspect-[4/3]">
        <div className="absolute inset-0 left-[-80px] top-[50px]">
          <img src={worldmap} alt="worldmap" />
        </div>

        {/* Annotation Bubbles */}
        {annotations.map((annotation, index) => (
          <div
            key={index}
            className="absolute group cursor-pointer"
            style={{ left: annotation.x, top: annotation.y }}
          >
            <div className="w-12 h-12 rounded-full bg-white shadow-lg overflow-hidden">
              <img src={group} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full shadow-lg py-1 px-3 ml-4 mt-2">
              {annotation.icon && (
                <span className={`w-2 h-2 rounded-full ${annotation.icon}`} />
              )}
              <span className="text-sm whitespace-nowrap">{annotation.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View: Replacement Image */}
      <div className="block lg:hidden w-full">
        <img src={mobileImage} alt="Mobile View" className="w-full h-auto object-cover" />
      </div>
    </div>
  </div>
</div>

  );
};

// Example usage with placeholder data
const ExampleUsage1 = () => {
  const statistics = [
    { value: 21000000, description: 'hours of LIVE learning' },
    { value: 1000000, description: 'monthly YouTube views' },
    { value: 2500000, description: 'doubts resolved on the app' },
    { value: 57, description: 'countries where students take LIVE classes' },
  ];

  const annotations = [
    { x: '5%', y: '38%', text: 'Short animated videos', icon: 'bg-orange-500' },
    { x: '55%', y: '40%', text: 'Daily LIVE classes', icon: 'bg-red-500' },
    { x: '35%', y: '58%', text: 'Unlimited doubt solving', icon: 'bg-purple-500' },
    { x: '40%', y: '20%', text: 'Secured 1L+ IIT/NEET ranks', icon: 'bg-green-500' },
  ];

  return <ImpactMetrics statistics={statistics} annotations={annotations} />;
};

export default ExampleUsage1;
