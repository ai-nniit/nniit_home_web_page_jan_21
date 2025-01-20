import React from 'react';
import { Clock, HelpCircle } from 'lucide-react';
import trophy from '../../../assets/trophy.png';

const ScholarshipBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 bg-[#FDF8F3]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            Take a test for free and win up to{' '}
            <span className="text-amber-500">50% scholarship</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white rounded-full shadow-sm">
                <Clock className="w-5 h-5 text-gray-600" />
              </div>
              <span className="text-sm md:text-base text-gray-700">Just 15 minutes</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-white rounded-full shadow-sm">
                <HelpCircle className="w-5 h-5 text-gray-600" />
              </div>
              <span className="text-sm md:text-base text-gray-700">15 quick questions</span>
            </div>
          </div>

          <button
            className="mt-4 px-6 py-3 bg-gray-800 text-white rounded-lg 
            hover:bg-gray-700 transition-all duration-300 
            transform hover:translate-y-[-2px] hover:shadow-lg"
          >
            Attempt test now
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <div className="relative w-48 md:w-64">
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
  );
};

export default ScholarshipBanner;
