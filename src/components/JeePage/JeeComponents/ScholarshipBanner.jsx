import React from 'react';
import { Clock, HelpCircle } from 'lucide-react';
import trophy from '../../../assets/trophy.png';

const ScholarshipBanner = () => {
  return (
    <>
  
  
    <div className="max-w-7xl mx-auto p-4 bg-[#FDF8F3] pl-[2cm]" >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Take a test for free and win up to{' '}
            <span className="text-amber-500">50% scholarship</span>
          </h2>

          <div className="flex flex-row gap-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white rounded-full shadow-sm">
                <Clock className="w-4 h-4 text-gray-600" />
              </div>
              <span className="text-sm text-gray-700">Just 15 minutes</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white rounded-full shadow-sm">
                <HelpCircle className="w-4 h-4 text-gray-600" />
              </div>
              <span className="text-sm text-gray-700">15 quick questions</span>
            </div>
          </div>

          <button
            className="px-6 py-3 bg-gray-800 text-white rounded-lg 
            hover:bg-gray-700 transition-all duration-300 
            transform hover:translate-y-[-2px] hover:shadow-lg"
          >
            Attempt test now
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-end"
          style={{
            transform: "translateX(-3.75cm)", // Move left by 3 centimeters
          }}>
          <div className="relative w-64">
            {/* Trophy image */}
            <img
              src={trophy}
              alt="Trophy illustration with scholarship offer"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ScholarshipBanner;
