import React from 'react';
import topperVideo from '../../../assets/topper_section.mp4';

const CompetitorAnalysis = () => {
  return (
    <section className="flex flex-col items-center justify-center p-4 bg-gray-100">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold font-serif text-center text-gray-800 mb-4">
        Want "1:15Lakh" Competitor Analysis?
      </h1>
      {/* Video with Link */}
      <a
        href="https://example.com/topper-analysis" // Replace with your actual URL
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-4xl"
      >
        <video
          src={topperVideo} // Replace with the actual path to your video
          autoPlay
          loop
          muted
          className="w-full h-auto rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-200"
        />
      </a>
      {/* Image with Link (previous implementation) */}
      {/* <a
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
      </a> */}
    </section>
  );
};

export default CompetitorAnalysis;
