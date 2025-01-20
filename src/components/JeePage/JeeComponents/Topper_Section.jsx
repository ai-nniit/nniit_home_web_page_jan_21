import React from 'react';
import topper from '../../../assets/topper_section.webp';

const CompetitorAnalysis = () => {
  return (
    <section className="flex flex-col items-center justify-center p-4 bg-gray-100">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold font-serif text-center text-gray-800 mb-4">
        Want "1:15Lakh" Competitor Analysis?
      </h1>
      {/* Image with Link */}
      <a
        href="https://example.com/topper-analysis" // Replace with your actual URL
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-4xl"
      >
        <img
          src={topper} // Replace with the actual path to your image
          alt="1:15Lakh Competitor Analysis"
          className="w-full h-auto rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-200"
        />
      </a>
    </section>
  );
};

export default CompetitorAnalysis;
