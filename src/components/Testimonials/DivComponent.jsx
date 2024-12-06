// DivComponent.jsx
import React from 'react';

const DivComponent = () => {


  const buttonStyle = {
    position: "relative",
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#f05454",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    animation: "continuousBounce 1s ease-in-out infinite",
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white">
      {/* Main Text */}
      <h1 className="text-3xl font-semibold text-gray-800 text-center">
        Achieve more with NNIIT, get <span className="text-orange-500  font-bold">Free</span> online counselling now
      </h1>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        {/* <button className="bg-orange-500 text-white font-sans py-2 px-4 rounded-lg hover:bg-orange-600 transition"
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering container click event
          window.open("https://calendar.app.google/ACitve3sDuj7vWWt5", "_blank"); // Replace with your Google Calendar link
        }}
        >
          Book a demo
        </button> */}
        <button
              style={buttonStyle}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#f05454";
              }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering container click event
                window.open("https://calendar.app.google/ACitve3sDuj7vWWt5", "_blank"); // Replace with your Google Calendar link
              }}
            >
              Book a Free Demo
            </button>
        <button className="bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition">
          Learn LIVE
        </button>
      </div>
    </div>
  );
};

export default DivComponent;
