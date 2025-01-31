import React from 'react';
import IIT_Bombay from '../../../assets/IIT_Bombay_logo.webp';
import IIT_Delhi from '../../../assets/IIT_Delhi_logo.webp';
import IIT_Kharagpur from '../../../assets/IIT_Kharagpur_Logo.webp';
import IIT_Khanpur from '../../../assets/IIT_Khanpur_Logo.png';
import IIT_Madras from '../../../assets/IIT_Madras_Logo.webp';

const IITSection = () => {
  return (
    <section className="py-8 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
        Consult Online <span className="text-orange-600">IITians</span> From
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 md:px-16">
        {/* IIT Delhi */}
        <div className="flex flex-col items-center">
          <img
            src={IIT_Delhi}
            alt="IIT Delhi"
            className="w-20 md:w-24"
          />
          <h3 className="text-lg md:text-xl font-medium mt-4">IIT Delhi</h3>
          <p className="text-gray-600 text-sm md:text-base">10 + Mentors</p>
        </div>

        {/* IIT Bombay */}
        <div className="flex flex-col items-center">
          <img
            src={IIT_Bombay}
            alt="IIT Bombay"
            className="w-20 md:w-24"
          />
          <h3 className="text-lg md:text-xl font-medium mt-4">IIT Bombay</h3>
          <p className="text-gray-600 text-sm md:text-base">10 + Mentors</p>
        </div>

        {/* IIT Kanpur */}
        <div className="flex flex-col items-center">
          <img
            src={IIT_Khanpur}
            alt="IIT Kanpur"
            className="w-20 md:w-24"
          />
          <h3 className="text-lg md:text-xl font-medium mt-4">IIT Kanpur</h3>
          <p className="text-gray-600 text-sm md:text-base">10 + Mentors</p>
        </div>

        {/* IIT Kharagpur */}
        <div className="flex flex-col items-center">
          <img
            src={IIT_Kharagpur}
            alt="IIT Kharagpur"
            className="w-20 md:w-24"
          />
          <h3 className="text-lg md:text-xl font-medium mt-4">IIT Kharagpur</h3>
          <p className="text-gray-600 text-sm md:text-base">10 + Mentors</p>
        </div>

        <div className="flex md:hidden flex-col items-center">
          <img
            src={IIT_Kharagpur}
            alt="IIT Kharagpur"
            className="w-20 md:w-24"
          />
          <h3 className="text-lg md:text-xl font-medium mt-4">IIT Kharagpur</h3>
          <p className="text-gray-600 text-sm md:text-base">10 + Mentors</p>
        </div>

        {/* IIT Madras */}
        <div className="flex flex-col items-center">
          <img
            src={IIT_Madras}
            alt="IIT Madras"
            className="w-20 md:w-24"
          />
          <h3 className="text-lg md:text-xl font-medium mt-4">IIT Madras</h3>
          <p className="text-gray-600 text-sm md:text-base">10 + Mentors</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 flex justify-center">
        <button
          className="bg-orange-600 text-white text-lg font-semibold py-3 px-6 rounded-md shadow-md transition transform hover:bg-orange-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400"
        >
          Connect with Top IITians Now 
        </button>
      </div>
    </section>
  );
};

export default IITSection;
