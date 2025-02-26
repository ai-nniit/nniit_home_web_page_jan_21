import React from 'react';
import aiims from '../../../assets/AIIMS_NewDelhi.png';
import cmc from '../../../assets/CMC_Vellore.png';
import jipgmer from '../../../assets/JIPGMER.png';
import nimhns from '../../../assets/NIMHNS.png';
import sgpims from '../../../assets/SGPIMS.png';



const NeetSection = () => {
  return (
    <section className="py-8 bg-[#f5f5f7]">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
        Consult Online Top <span className="text-orange-600">Medicos</span> From
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 md:px-16">
        {/* IIT Delhi */}
        <div className="flex flex-col items-center">
          <img
            src={aiims}
            alt="IIT Delhi"
            className="w-20 md:w-24"
          />
          <h3 className="text-lg md:text-xl font-medium mt-4">AIIMS Delhi</h3>
          <p className="text-gray-600 text-sm md:text-base">15+ Mentors</p>
        </div>

        {/* IIT Bombay */}
        <div className="flex flex-col items-center">
          <img
            src={cmc}
            alt="IIT Bombay"
            className="w-20 md:w-24"
          />
          <h3 className="text-lg md:text-xl font-medium mt-4">CMC Vellore</h3>
          <p className="text-gray-600 text-sm md:text-base">12+ Mentors</p>
        </div>

        {/* IIT Kanpur */}
        <div className="flex flex-col items-center">
          <img
            src={nimhns}
            alt="IIT Kanpur"
            className="w-20 md:w-24"
          />
          <h3 className="text-lg md:text-xl font-medium mt-4">NIMHNS Bengaluru</h3>
          <p className="text-gray-600 text-sm md:text-base">15+ Mentors</p>
        </div>

        {/* IIT Kharagpur */}
        <div className="flex flex-col items-center">
          <img
            src={jipgmer}
            alt="IIT Kharagpur"
            className="w-20 md:w-24"
          />
          <h3 className="text-lg md:text-xl font-medium mt-4">JIPGMER Puducherry</h3>
          <p className="text-gray-600 text-sm md:text-base">18+ Mentors</p>
        </div>

        <div className="flex md:hidden flex-col items-center">
          <img
            src={jipgmer}
            alt="IIT Kharagpur"
            className="w-20 md:w-24"
          />
          <h3 className="text-lg md:text-xl font-medium mt-4">SGPIMS Lucknow</h3>
          <p className="text-gray-600 text-sm md:text-base">12+ Mentors</p>
        </div>

        {/* IIT Madras */}
        <div className="flex flex-col items-center">
          <img
            src={sgpims}
            alt="IIT Madras"
            className="w-20 md:w-24"
          />
          <h3 className="text-lg md:text-xl font-medium mt-4">SGPIMS Lucknow</h3>
          <p className="text-gray-600 text-sm md:text-base">15+ Mentors</p>
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

export default NeetSection;
