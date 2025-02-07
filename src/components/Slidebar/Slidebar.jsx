// import React from 'react';
// import LinkedInLogo from '../../assets/logos/LinkedIn.png';
// import ForbesLogo from '../../assets/logos/Forbes.png';
// import OpenAILogo from '../../assets/logos/OpenAI.png';
// import NvidiaLogo from '../../assets/logos/Nvidia.png';
// import GoogleForEducationLogo from '../../assets/logos/google-for-education-logo.webp';

// const InvestorLogoBar = () => {
//   const logos = [
//     { name: 'LinkedIn', url: LinkedInLogo },
//     { name: 'Forbes', url: ForbesLogo },
//     { name: 'OpenAI', url: OpenAILogo },
//     { name: 'Nvidia', url: NvidiaLogo },
//     { name: 'GoogleForEducation', url: GoogleForEducationLogo },
//   ];

//   return (
//     <div className="bg-white px-8 py-5 mx-auto -mt-6  overflow-hidden relative">
//       <svg
//         width="100%"
//         height="100%"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute top-0 left-0 z-0"
//       >
//         <defs>
//           <pattern
//             id="grid-pattern"
//             width="20"
//             height="20"
//             patternUnits="userSpaceOnUse"
//           >
//             <path
//               d="M 20 0 L 0 0 0 20"
//               fill="none"
//               stroke="#e0e0e0"
//               strokeWidth="0.5"
//             />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#grid-pattern)" />
//       </svg>
//       <div className="max-w-7xl mx-auto px-1">
//         <div className="flex justify-start items-center">
//           <header className="mb-4 px-4">
//                     <div className="flex items-center space-x-1 mb-0.5">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="14"
//                         height="14"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         className="relative -top-1.2"
//                       >
//                         <path
//                           d="M24 11.9914C19.2924 12.4191 16.5877 12.8125 14.9272 14.1126C12.9757 15.6351 12.5136 18.4234 12 24C11.4693 18.2181 10.99 15.4469 8.85021 13.9587C7.18973 12.7954 4.50214 12.4191 0 12.0086C4.69044 11.5809 7.41227 11.1875 9.05564 9.90449C11.0243 8.36493 11.4864 5.59373 12 0C12.4793 5.14897 12.9073 7.90306 14.4993 9.49394C16.0913 11.0848 18.8645 11.5296 24 11.9914Z"
//                           fill="url(#paint0_linear)"
//                         />
//                         <defs>
//                           <linearGradient
//                             id="paint0_linear"
//                             x1="12"
//                             y1="0"
//                             x2="12"
//                             y2="24"
//                             gradientUnits="userSpaceOnUse"
//                           >
//                             <stop stopColor="#39B6D8" />
//                             <stop offset="0.5" stopColor="#F7D344" />
//                             <stop offset="1" stopColor="#E38330" />
//                           </linearGradient>
//                         </defs>
//                       </svg>
//                       <p className="text-[10px] text-gray-400 mt-2 font-serif font-light">
//                         DISCOVER NEW PERSPECTIVES
//                       </p>
//                     </div>
//                     <h3 className="text-xl md:text-3xl font-extrabold font-serif text-black -mt-1">
//                       Featured & In Association With
//                     </h3>
//                   </header>
//                   </div>
//         <div className="relative bg-white">
          
//           {/* Logo row */}
//           <div className="flex space-x-8 md:space-x-28 p-2 animate-marquee whitespace-nowrap justify-center">
//             {logos.map((logo, index) => (
//               <div
//                 key={`logo1-${index}`}
//                 className="flex items-center justify-center transition-opacity duration-300"
//               >
//                 {/* Set uniform size for all logos */}
//                 <div className="flex items-center justify-center w-10 h-24 bg-white ">
//                     <img
//                       src={logo.url}
//                       alt={`${logo.name} logo`}
//                       className="object-contain max-w-full max-h-full md:w-20 md:h-44"
//                     />
//               </div>

//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvestorLogoBar;





import React from 'react';
import LinkedInLogo from '../../assets/logos/LinkedIn.png';
import ForbesLogo from '../../assets/logos/Forbes.png';
import OpenAILogo from '../../assets/logos/OpenAI.png';
import NvidiaLogo from '../../assets/logos/Nvidia.png';
import GoogleForEducationLogo from '../../assets/logos/google-for-education-logo.webp';

const InvestorLogoBar = () => {
  const logos = [
    { name: 'LinkedIn', url: LinkedInLogo, style: 'md:w-16 md:h-12' },
    { name: 'Forbes', url: ForbesLogo, style: 'md:w-24 md:h-14' },
    { name: 'OpenAI', url: OpenAILogo, style: 'md:w-28 md:h-20' },
    { name: 'Nvidia', url: NvidiaLogo, style: 'md:w-24 md:h-14' },
    { name: 'GoogleForEducation', url: GoogleForEducationLogo, style: 'md:w-40 md:h-28' },
  ];

  return (
    <div className="bg-white px-8 py-10 mx-auto -mt-6 overflow-hidden relative">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 z-0"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
      <div className="max-w-7xl mx-auto px-1">
        <div className="flex justify-start items-center">
          <header className="mb-2 px-2 md:px-4">
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
            <h3 className="text-xl md:text-3xl font-extrabold font-serif text-black -mt-1">
              Featured & In Association With
            </h3>
          </header>
        </div>
        <div className="relative bg-white">
          {/* Logo row */}
          <div className="flex space-x-5 md:space-x-28 p-2 animate-marquee whitespace-nowrap justify-center">
            {logos.map((logo, index) => (
              <div
                key={`logo1-${index}`}
                className="flex items-center justify-center transition-opacity duration-300"
              >
                {/* Default mobile size (w-10 h-24), custom desktop size (md: class) */}
                <div className={`flex items-center justify-center bg-white w-11 h-24 ${logo.style}`}>
                  <img
                    src={logo.url}
                    alt={`${logo.name} logo`}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorLogoBar;
