import React from "react";
import BannerCarousel from "./BannerCarousal"; // Import the BannerCarousel component

const GravitationalForceSection = () => {
  return (
    <div className="flex flex-col items-center p-4 md:flex-row md:items-start md:justify-between bg-gray-100">
  {/* Left Section */}
  <div className="flex flex-col w-full md:w-3/4 space-y-6">
    {/* Headline */}
    <h3 className="text-lg md:text-2xl font-bold text-center md:text-left">
      Want to know Gravitational Force concept with a great imagination and get the concept clear right now
    </h3>

    {/* Video Section */}
    <div className="flex justify-center items-center w-full bg-gray-300 rounded-lg overflow-hidden" style={{ height: '300px' }}>
      <iframe
        width="100%"
        height="100%"
        className="rounded-lg"
        src="https://www.youtube.com/embed/your-video-id"
        title="Gravitational Force Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    {/* Banner Section */}
    <div className="w-full">
      <BannerCarousel /> {/* Use the BannerCarousel component */}
    </div>
  </div>

  {/* Right Section */}
  <div>
    <h2 className="text-2xl font-bold mb-10">Sponsored Ads</h2>
    <img
      src="https://via.placeholder.com/300x250"
      alt="Advertisement"
      className="rounded shadow-md w-full"
    />
    <br />
    <img
      src="https://via.placeholder.com/300x250"
      alt="Advertisement"
      className="rounded shadow-md w-full"
    />
  </div>
</div>

  );
};

export default GravitationalForceSection;
