import React, { useState } from 'react';

const StageShowcase = () => {
  const [activeStage, setActiveStage] = useState(null);

  const stages = [
    {
      number: "1",
      title: "DIAGNOSTIC EDUCATION",
      description: "Customize your unique style",
      bgColor: "from-yellow-400 to-yellow-600",
      logo: "A Concept based test"
    },
    {
      number: "2",
      title: "PERSONALITY ASSISSTENT",
      description: "Smart solutions for modern needs",
      bgColor: "from-gray-100 to-gray-300",
      logo: "One to One Personal Assisstent"
    },
    {
      number: "3",
      title: "15 DAY ROAD MAP PLAN",
      description: "Premium audio experiences",
      bgColor: "from-gray-700 to-gray-900",
      logo: "Customized road map plan for each individual"
    },
    {
      number: "4",
      title: "THREE DIFFERENT MODULES",
      description: "Create your masterpiece",
      bgColor: "from-blue-600 to-blue-800",
      logo: "Nourishment, Academic, Exam"
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Experience Stats */}
        <div className="text-white mb-8 font-mono">
          <div className="text-xl text-black">JEE</div>
          <div className="text-xl text-black">NEET</div>
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-1 h-[600px]">
          {stages.map((stage, index) => (
            <div
              key={stage.number}
              className={`relative overflow-hidden bg-gray-900 transition-all duration-500 ease-in-out
                ${activeStage === index ? 'md:col-span-2' : 'md:col-span-1'}
              `}
              onMouseEnter={() => setActiveStage(index)}
              onMouseLeave={() => setActiveStage(null)}
            >
              {/* Background Number */}
              <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500
                ${activeStage === index ? 'scale-150' : 'scale-100'}
              `}>
                <div className={`text-[200px] font-bold bg-gradient-to-b ${stage.bgColor} bg-clip-text text-transparent
                  transition-all duration-500 opacity-80
                `}>
                  {stage.number}
                </div>
              </div>

              {/* Content Overlay */}
              <div className={`absolute inset-0 flex flex-col justify-between p-6 
                transition-opacity duration-300
                ${activeStage === index ? 'opacity-100' : 'opacity-0'}
              `}>
                <div className="text-white">
                  <h2 className="text-2xl font-bold mb-2">{stage.title}</h2>
                  <p className="text-gray-300">{stage.description}</p>
                </div>
                <div className="text-white text-xl font-bold">{stage.logo}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Connect Text */}
        <div className="text-white font-mono mt-4 transform -rotate-90 origin-left fixed left-8 bottom-40">
          JOIN US
        </div>
      </div>
    </div>
  );
};

export default StageShowcase;