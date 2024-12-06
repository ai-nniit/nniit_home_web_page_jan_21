import React from 'react';
import { User } from 'lucide-react';

const CounselingCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-medium text-gray-900 mb-3">
        Know more about our courses. Book a free counselling session.
      </h3>
      <div className="flex items-center gap-4">
        <button 
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
          onClick={() => console.log('Speak to expert clicked')}
        >
          Speak to an expert
        </button>
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default CounselingCard;
