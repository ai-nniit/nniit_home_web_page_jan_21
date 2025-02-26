// src/components/FreeDemoComponent.jsx
import React from "react";

const FreeDemoComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-[#EAF0FD] border border-gray-200 rounded-lg shadow-md">
      {/* Left Section */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-lg font-bold">
          Book your <span className="text-orange-500">Free Demo</span> session
        </h1>
        <p className="text-sm text-gray-600">
          Get a flavour of LIVE classes here at NNIIT
        </p>
      </div>

      {/* Button */}
      <button
  className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold transition-all duration-300 ease-in-out hover:bg-orange-600 hover:scale-105 animate-jump"
>
  Book a free demo
</button>


      {/* Right Section */}
      <div className="text-center md:text-right">
        <h2 className="text-lg font-bold">NNIIT Improvement Promise</h2>
        <p className="text-sm text-gray-600">
          We promise improvement in marks{" "}
          <a href="#" className="text-blue-600 underline">
            T&C Apply*
          </a>
        </p>
      </div>
    </div>
  );
};

export default FreeDemoComponent;
