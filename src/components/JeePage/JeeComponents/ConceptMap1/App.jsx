// import React, { useState } from 'react';
// import NetworkGraph from './components/NetworkGraph';
// import { ChemistryData } from './data/Chemistry';
// import { PhysicsData } from './data/Physics';
// import { MathematicsData } from './data/Maths';

// function App1() {
//   const [selectedSubject, setSelectedSubject] = useState('Chemistry');

//   const getDataForSubject = () => {
//     switch (selectedSubject) {
//       case 'Chemistry':
//         return ChemistryData;
//       case 'Physics':
//         return PhysicsData;
//       case 'Mathematics':
//         return MathematicsData;
//       default:
//         return ChemistryData;
//     }
//   };

//   return (
//     <div className=" bg-[#FFFFFF] flex flex-col items-center w-full md:w-auto">
//         <header className="mb-4 px-4">
//           <div className="flex items-center space-x-1 mb-0.5">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               className="relative -top-1.2"
//             >
//               <path
//                 d="M24 11.9914C19.2924 12.4191 16.5877 12.8125 14.9272 14.1126C12.9757 15.6351 12.5136 18.4234 12 24C11.4693 18.2181 10.99 15.4469 8.85021 13.9587C7.18973 12.7954 4.50214 12.4191 0 12.0086C4.69044 11.5809 7.41227 11.1875 9.05564 9.90449C11.0243 8.36493 11.4864 5.59373 12 0C12.4793 5.14897 12.9073 7.90306 14.4993 9.49394C16.0913 11.0848 18.8645 11.5296 24 11.9914Z"
//                 fill="url(#paint0_linear)"
//               />
//               <defs>
//                 <linearGradient
//                   id="paint0_linear"
//                   x1="12"
//                   y1="0"
//                   x2="12"
//                   y2="24"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stopColor="#39B6D8" />
//                   <stop offset="0.5" stopColor="#F7D344" />
//                   <stop offset="1" stopColor="#E38330" />
//                 </linearGradient>
//               </defs>
//             </svg>
//             <p className="text-[10px] text-gray-400 mt-2 font-serif font-light">
//               DISCOVER NEW PERSPECTIVES
//             </p>
//           </div>
//           <h3 className="text-xl md:text-3xl font-extrabold font-serif text-black -mt-1">
//                JEE Concepts Mapping
//           </h3>
//         </header>
//       {/* Subject Filter Dropdown positioned relative to the graph */}
//                 <div className="w-full relative">
//             <div className="absolute -top-5 right-96 z-50 flex justify-center w-full">
//                 <select
//                 value={selectedSubject}
//                 onChange={(e) => setSelectedSubject(e.target.value)}
//                 className="bg-black/10 backdrop-blur-lg text-white border-white/20 rounded-lg px-6 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
//                 >
//                 <option value="Chemistry">Chemistry</option>
//                 <option value="Physics">Physics</option>
//                 <option value="Mathematics">Mathematics</option>
//                 </select>
//             </div>
//             <NetworkGraph data={getDataForSubject()} />
//             </div>

//     </div>
//   );
// }

// export default App1;







import React, { useState } from 'react';
import NetworkGraph from './components/NetworkGraph';
import { ChemistryData } from './data/Chemistry';
import { PhysicsData } from './data/Physics';
import { MathematicsData } from './data/Maths';

function App1() {
  const [selectedSubject, setSelectedSubject] = useState('Chemistry');
  const [showGraph, setShowGraph] = useState(false);

  const getDataForSubject = () => {
    switch (selectedSubject) {
      case 'Chemistry':
        return ChemistryData;
      case 'Physics':
        return PhysicsData;
      case 'Mathematics':
        return MathematicsData;
      default:
        return ChemistryData;
    }
  };

  return (
    <div className="bg-[#FFFFFF] flex flex-col items-center w-full md:w-auto">
      <header className="mb-4 px-4">
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
              <linearGradient id="paint0_linear" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
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
          JEE Concepts Mapping
        </h3>
      </header>
      
      <div className="w-full relative">
        <div className="absolute -top-5 right-10 md:right-96 z-50 flex justify-center w-full">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="bg-black/10 backdrop-blur-lg text-white border-white/20 rounded-lg px-6 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <option value="Chemistry">Chemistry</option>
            <option value="Physics">Physics</option>
            <option value="Mathematics">Mathematics</option>
          </select>
        </div>
        
        {/* Mobile View: Show Explore Button */}
        <div className="block md:hidden mt-10">
          {!showGraph ? (
            <button
              onClick={() => setShowGraph(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            >
              Explore
            </button>
          ) : (
            <NetworkGraph data={getDataForSubject()} />
          )}
        </div>

        {/* Desktop View: Show Graph Normally */}
        <div className="hidden md:block">
          <NetworkGraph data={getDataForSubject()} />
        </div>
      </div>
    </div>
  );
}

export default App1;
