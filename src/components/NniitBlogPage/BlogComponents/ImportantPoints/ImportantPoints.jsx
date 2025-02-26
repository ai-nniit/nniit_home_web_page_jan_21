import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
//import tips from '../../assets/tips.jpeg';

import tips from '../../Blogassets/tips.jpeg';

const ImportantPoints = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-2xl w-full max-w-6xl mx-auto flex flex-col lg:flex-row">
      {/* Left Section for Tips (Full width on mobile, half width on desktop) */}
      <div className="w-full lg:w-1/2 lg:pr-4">
        <div className="border-b-2 border-blue-300 pb-1 mb-3">
          <h2 className="text-xl font-bold text-blue-900">
            JEE MAIN 2025 Preparation Tips by <span className="font-extrabold text-2xl text-blue-700">OUR EXPERTS</span>
          </h2>
        </div>
        <ul className="space-y-4 px-3 text-gray-800">
          {[
            "Understand the Syllabus and Exam Pattern: Familiarise yourself with the JEE Main syllabus and the exam pattern. Focus on high-weightage topics to maximise your score.",
            "Create a Study Schedule: Develop a structured study plan that allocates time for each subject. Stick to your schedule to cover all topics systematically.",
            "Practice Regularly: Solve previous years' question papers and take mock tests to get a feel for the exam format. This will also help you identify your strengths and weaknesses.",
            "Focus on Conceptual Clarity: Ensure you understand the fundamental concepts in Physics, Chemistry, and Mathematics. Avoid rote learning and emphasise comprehension.",
          ].map((content, index) => (
            <li 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div
                className={`flex items-center justify-between p-2 cursor-pointer group ${
                  expandedItems[index] ? 'bg-blue-100' : 'hover:bg-blue-50'
                }`}
                onClick={() => toggleItem(index)}
              >
                <p className="font-bold text-gray-800 flex-grow pr-2 text-sm">
                  {content.split(":")[0]}
                </p>
                <div className="transform transition-transform duration-300 ease-in-out">
                  {expandedItems[index] ? (
                    <ChevronDown 
                      className="text-blue-600 group-hover:text-blue-800 
                      transition-colors duration-300 
                      w-5 h-5 rounded-full bg-blue-100 
                      group-hover:bg-blue-200 p-1"
                    />
                  ) : (
                    <ChevronRight 
                      className="text-blue-500 group-hover:text-blue-700 
                      transition-colors duration-300 
                      w-5 h-5 rounded-full bg-blue-50 
                      group-hover:bg-blue-100 p-1"
                    />
                  )}
                </div>
              </div>
              <div
                className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedItems[index] ? 'max-h-96 py-2' : 'max-h-0 p-0'
                }`}
              >
                <p className="text-xs text-gray-600">{content.split(":")[1]}</p>
              </div>
            </li>
          ))}
          <li 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <div
              className={`flex items-center justify-between p-2 cursor-pointer group ${
                expandedItems[4] ? 'bg-blue-100' : 'hover:bg-blue-50'
              }`}
              onClick={() => toggleItem(4)}
            >
              <p className="font-bold text-gray-800 flex-grow pr-2 text-sm">Revise Frequently</p>
              <div className="transform transition-transform duration-300 ease-in-out">
                {expandedItems[4] ? (
                  <ChevronDown 
                    className="text-blue-600 group-hover:text-blue-800 
                    transition-colors duration-300 
                    w-5 h-5 rounded-full bg-blue-100 
                    group-hover:bg-blue-200 p-1"
                  />
                ) : (
                  <ChevronRight 
                    className="text-blue-500 group-hover:text-blue-700 
                    transition-colors duration-300 
                    w-5 h-5 rounded-full bg-blue-50 
                    group-hover:bg-blue-100 p-1"
                  />
                )}
              </div>
            </div>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                expandedItems[4] ? 'max-h-96 py-2' : 'max-h-0 p-0'
              }`}
            >
              <ul className="list-disc space-y-1 text-xs text-gray-600 pl-4">
                <li>Orbital velocity = 8 km / s</li>
                <li>Time period = 84 min approximately</li>
                <li>Angular speed = 2π / 84 rad / min = 0.00125 rad / s</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      {/* Right Section for Image (Hidden on mobile, visible on desktop) */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <img 
          src={tips} 
          alt="Preparation Tips Illustration" 
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ImportantPoints;