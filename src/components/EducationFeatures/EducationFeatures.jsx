import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DivComponent from '../Testimonials/DivComponent';
import discount from '../../assets/discount.png'
import MobileMenu from './Mobilefeatures';
import live_classes from '../../assets/live_classes.png'

const FeatureCard = ({ icon, title, description, color }) => (
  <div className="group flex items-start gap-2 p-3 rounded-xl border border-gray-200 hover:border-gray-300 transition-all cursor-pointer">
    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">{title}</h3>
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
      <p className="text-sm text-gray-600 mt-1">{description}</p>
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
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="2 2 20 20" // Adjusted viewBox
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Top educators",
      description: "Learn from some of the best educators in the country.",
      color: "bg-blue-500",
    },  
    {
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="2 2 20 20" // Adjusted viewBox
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Top educators",
      description: "Learn from some of the best educators in the country.",
      color: "bg-blue-500",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="2 2 20 20" // Adjusted viewBox
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      title: "Practice",
      description: "Curated batches to simplify the learning journey for your goal.",
      color: "bg-yellow-500",
    },
    {
      icon: (
        <svg
          className="w-2 h-2 text-white"
          fill="none"
          viewBox="2 2 20 20" // Adjusted viewBox
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Courses",
      description: "Learn every subject in detail from your favourite educator.",
      color: "bg-purple-500",
    },
    {
      icon: (
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 16 16" // Adjusted viewBox
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Playlist",
      description: "High quality lecture videos for the entire syllabus for all your subjects.",
      color: "bg-teal-500",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="2 2 20 20" // Adjusted viewBox
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      title: "Test series",
      description: "Evaluate and boost your exam preparation with test series.",
      color: "bg-sky-500",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="2 2 20 20" // Adjusted viewBox
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "FAQs",
      description: "Answers to all your questions and doubts related to the course.",
      color: "bg-green-500",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="2 2 20 20" // Adjusted viewBox
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Doubt Support",
      description: "Answers to all your questions and doubts related to the course.",
      color: "bg-yellow-500",
    },
  ];
  

  return (
    <>
      <div class="flex-wrap mt-3 hidden md:flex">
  {/* <!-- Left Div --> */}
  <div class="w-full md:w-1/2">
    {/* <!-- Upper Div --> */}
    <div class="mb-4">
      <h1 class="text-3xl font-semibold font-serif  ml-2 md:ml-20  text-[#3c4853]">
        Crack IIT JEE  with  NNIIT
      </h1>
    </div>
    {/* <!-- Lower Div --> */}
    <div>
      <p class="text-sm ml-5 md:ml-20 -mt-6 text-gray-600">
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
          {/* <div className="grid grid-cols-2 gap-2  mt-2 p-3">
            {features.slice(0, 8).map((feature, idx) => (
              <MobileFeatureCard key={idx} {...feature} />
            ))}
          </div>
          <div className=''>
            <button className='border-2 px-10 py-2  text-white   ml-20 bg-[#07bd80] rounded-md'>View Subscription Plan</button>
            <button className='border-2 px-16 py-2 font-semibold ml-20 mt-2 bg-white rounded-md'>Explore for Free</button>
          </div> */}
          <MobileMenu/>
        </>
          
        ) : (
          <div className="grid grid-cols-4 gap-3 mt-3 max-w-5xl mx-auto">
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

 