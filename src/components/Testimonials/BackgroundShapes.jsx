import React from 'react';

const BackgroundShapes = ({ accentColor, secondaryColor }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary circle */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-30 blur-2xl"
        style={{
          backgroundColor: accentColor,
          top: '10%',
          left: '5%',
        }}
      />

      {/* Secondary triangle */}
      <div
        className="absolute w-0 h-0 opacity-30 blur-xl"
        style={{
          borderLeft: '200px solid transparent',
          borderRight: '200px solid transparent',
          borderBottom: `400px solid ${secondaryColor}`,
          bottom: '10%',
          right: '10%',
        }}
      />

      {/* Decorative lines */}
      <div className="absolute bottom-20 left-40">
        <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
          <path
            d="M0 15C20 15 25 5 45 5C65 5 70 25 90 25C110 25 115 15 135 15"
            stroke="white"
            strokeWidth="2"
            strokeOpacity="0.2"
          />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundShapes;
