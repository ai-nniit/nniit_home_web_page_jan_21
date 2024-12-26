// import React from 'react';
// import { Building2 } from 'lucide-react'; // Ensure lucide-react is installed: `npm install lucide-react`

// const logos = [
//   { name: 'Mercedes-Benz', icon: Building2 },
//   { name: 'Roblox', icon: Building2 },
//   { name: 'Royal Caribbean', icon: Building2 },
//   { name: 'Lumen', icon: Building2 },
//   { name: 'Doodle', icon: Building2 },
//   { name: 'Dropbox', icon: Building2 },
//   { name: 'HCS', icon: Building2 },
// ];

// const CompanyLogos = () => {
//   return (
//     <div className="w-full mt-6 border-t border-white/10">
//       <div className="flex items-center justify-between px-2 py-4 gap-4 overflow-hidden">
//         {logos.map((logo, index) => (
//           <div
//             key={index}
//             className="flex items-center text-white/40 hover:text-white/60 transition-colors"
//           >
//             <logo.icon className="w-6 h-6 mr-10" />
//             <span className="text-sm font-medium">{logo.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompanyLogos;


import React from 'react';
import { Building2 } from 'lucide-react'; // Ensure lucide-react is installed: `npm install lucide-react`

const logos = [
  { name: 'IIT Bombay', icon: Building2 },
  { name: 'IIT Kharagpur', icon: Building2 },
  // { name: 'Royal Caribbean', icon: Building2 },
  // { name: 'Lumen', icon: Building2 },
  // { name: 'Doodle', icon: Building2 },
  // { name: 'Dropbox', icon: Building2 },
  // { name: 'HCS', icon: Building2 },
];

const CompanyLogos = () => {
  return (
    <div className="w-full mt-14 border-t border-white/10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 px-2 py-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center text-white/40  hover:text-white/60 transition-colors"
          >
            <logo.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            <span className="text-xs sm:text-sm font-medium">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
