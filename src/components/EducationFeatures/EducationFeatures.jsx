import React from 'react';
import { useMediaQuery } from 'react-responsive';
import discount from '../../assets/discount.png'
import MobileMenu from './Mobilefeatures';
import live_classes from '../../assets/live_classes.png';
import educators from '../../assets/educators.png';
import batches from '../../assets/batches.png';
import courses from '../../assets/courses.png';
import playlist from '../../assets/playlist.png';
import practice from '../../assets/practice.png';
import test_series from '../../assets/test_series.png';
import doubts from '../../assets/doubts.png';


const FeatureCard = ({ icon, title, description, color }) => (
  <div className="group flex items-start gap-2 p-5 rounded-xl border border-gray-200 hover:border-gray-300 transition-all cursor-pointer">
    <div className={`flex-shrink-0 w-5 h-7 rounded-lg ${color} flex items-center justify-center`}>
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-[#3c4952]">{title}</h3>
        <svg
          className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <p className="text-xs text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const MobileFeatureCard = ({ icon, title, color }) => (
  <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 transition-all cursor-pointer">
    <div className={`flex-shrink-0 w-7 h-7 rounded-lg ${color} flex items-center justify-center`}>
      {icon}
    </div>
    <h3 className="font-semibold text-gray-900">{title}</h3>
  </div>
);

const EducationFeatures = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const features = [
    {
      icon: <img src={live_classes} alt="Top Educators" className="w-5 h-5" />,
      title: "Live classes",
      description: "Watch free online coaching classes by our best educators",
      color: "",
    },
    {
      icon: <img src={educators} alt="Practice" className="w-5 h-5" />,
      title: "Top educators",
      description: "Learn from some of the best educators in the country.",
      color: "",
    },
    {
      icon: <img src={batches} alt="Courses" className="w-5 h-5" />,
      title: "Batches",
      description: "Curated batches to simplify the learning journey for your goal.",
      color: "",
    },
    {
      icon: <img src={playlist} alt="Playlist" className="w-5 h-5" />,
      title: "Playlist",
      description: "High quality lecture videos for the entire syllabus for all your subjects.",
      color: "",
    },
    {
      icon: <img src={practice} alt="Top Educators" className="w-5 h-5" />,
      title: "Practice",
      description: "Strengthen your exam preparation with adaptive practice tests.",
      color: "",
    },
    {
      icon: <img src={test_series} alt="Practice" className="w-5 h-5" />,
      title: "Test series",
      description: "Evaluate and boost your exam preparation with test series.",
      color: "",
    },
    {
      icon: <img src={doubts} alt="Courses" className="w-5 h-5" />,
      title: "Doubts & Solutions",
      description: "Get quick and detailed solutions to clarify your doubts.",
      color: "",
    },
    {
      icon: <img src={courses} alt="Playlist" className="w-5 h-5" />,
      title: "FAQs",
      description: "Frequently Answer Questions can quickly clarify your questions.",
      color: "",
    },
  ];
  return (
    <>
      <div class="flex-wrap mt-3 hidden md:flex">
  {/* <!-- Left Div --> */}
  <div class="w-full md:w-1/2">
    {/* <!-- Upper Div --> */}
    <div class="mb-4">
      <h1 class="text-4xl font-semibold font-sf  ml-2 md:ml-20  text-[#3c4853]">
        Crack IIT JEE  with  NNIIT
      </h1>
    </div>
    {/* <!-- Lower Div --> */}
    <div>
      <p class="text-sm ml-5 md:ml-20 -mt-3 text-gray-600">
        Over <span className='text-green-500'>15 Million </span> learners trust us for online coaching.
      </p>
    </div>
  </div>
  {/* <!-- Right Div --> */}
  <div class="w-full md:w-1/2 flex flex-col items-center md:items-center mt-3 md:mt-0 ">
    {/* <!-- Buttons Row --> */}
    <div class="flex gap-2 mb-4">
      <button class="bg-[#ffffff] text-[#574d54] font-normal border-1 border-[#6f7578] px-2 py-1 md:py-2 md:px-4 rounded-lg hover:bg-[#fcfcfc] transition">
        Try learning for free
      </button>
      <button class="bg-[#07bd80] text-[#fdffff] px-2 py-1 md:py-2 md:px-4 rounded-lg hover:bg-[#08c58a] transition">
        View subscription plans
      </button>
    </div>
    {/* <!-- Subscription Offers Link --> */}
    <div class="flex items-center -mt-2">
    <img src={discount} alt="Discount Image"  className="h-6 w-6 ml-44 "/>
  <p class="text-orange-500 font-semibold  cursor-pointer hover:underline ml-1 md:-mt-0 -mt-2">
    View subscription offers
  </p>
</div>
  </div>
</div>
      <div>
        {isMobile ? ( <>
          <MobileMenu/>
        </>
          
        ) : (
          <div className="grid grid-cols-4 gap-3 mt-3 max-w-6xl mx-auto">
            {features.slice(0, 8).map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default EducationFeatures;