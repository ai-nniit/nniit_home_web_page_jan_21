import React from 'react';
import LinkedInLogo from '../../assets/logos/LinkedIn.png';
import ForbesLogo from '../../assets/logos/Forbes.png';
import OpenAILogo from '../../assets/logos/OpenAI.png';
import NvidiaLogo from '../../assets/logos/Nvidia.png';
import GoogleForEducationLogo from '../../assets/logos/GoogleForEducation.png';

const InvestorLogoBar = () => {
  const logos = [
    { name: 'LinkedIn', url: LinkedInLogo },
    { name: 'Fobes', url: ForbesLogo },
    { name: 'OpenAI', url: OpenAILogo },
    { name: 'Nvidia', url: NvidiaLogo },
    { name: 'GoogleForEducation', url: GoogleForEducationLogo },
  ];

  return (
    <div className="bg-gray-100 py-5 overflow-hidden relative ">
      
      <div className="max-w-7xl mx-auto px-1">
      {/* <h2 className="text-2xl font-serif font-bold text-transparent bg-clip-text 
                bg-gradient-to-l from-gray-900 via-white to-black 
                bg-shimmer-size animate-shimmer 
                sm:text-4xl mb-8 text-center"
                style={{
                  animation: 'shimmer 10s linear 1', // 1 iteration
                }}
                
                >
              FEATURED & IN ASSOCIATION WITH
      </h2> */}

<div className="flex justify-center items-center">
  <h2 className="text-2xl font-serif font-bold text-gray-500 sm:text-4xl mb-8 relative inline-block group">
    FEATURED & IN ASSOCIATION WITH
    <span
      className="absolute left-1/2 bottom-0 h-1 w-0 bg-gradient-to-r from-gray-400 via-blue-400 to-green-400 
                 transition-all duration-300 group-hover:w-full -translate-x-1/2"
    />
  </h2>
</div>





        
        <div className="relative bg-gray-100 ">
          {/* First row of logos */}
          <div className="flex space-x-12 p-2 animate-marquee whitespace-nowrap justify-center">
            {logos.map((logo, index) => (
              <div
                key={`logo1-${index}`}
                className="flex items-center justify-center w-[150px] transition-opacity duration-300"
                // grayscale opacity-70 hover:opacity-100 transition-opacity
              >
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="h-12 w-40 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorLogoBar;