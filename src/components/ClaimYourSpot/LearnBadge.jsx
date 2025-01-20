// src/components/LearnersBadge.jsx
import React from "react";
import boy from '../../assets/boy.png'
import human from '../../assets/human.png'
import off from '../../assets/office-man.png'

const LearnersBadge = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Avatars */}
      <div className="flex -space-x-2">
        <img
          className="w-8 h-8 rounded-full border-2 border-white"
          src={boy}
          alt="Avatar 1"
        />
        <img
          className="w-8 h-8 rounded-full border-2 border-white"
          src={human}
          alt="Avatar 2"
        />
        <img
          className="w-8 h-8 rounded-full border-2 border-white"
          src={off}
          alt="Avatar 3"
        />
      </div>
      {/* Text */}
      <div>
        <p className="text-sm font-medium">1K+ learners</p>
        <p className="text-xs text-gray-500">booked session past 10 days</p>
      </div>
    </div>
  );
};

export default LearnersBadge;

