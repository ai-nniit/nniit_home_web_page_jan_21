import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai'; // Importing icons

import t1 from '../../../assets/Tutors/Tut1.png';
import t2 from '../../../assets/Tutors/Tut2.png';
import t3 from '../../../assets/Tutors/Tut3.png';
import t4 from '../../../assets/Tutors/Tut4.png';
import t5 from '../../../assets/Tutors/Tut5.png';

import t11 from '../../../assets/Tutors/Tut11.png';
import t12 from '../../../assets/Tutors/Tut12.png';
import t13 from '../../../assets/Tutors/Tut13.png';
import t14 from '../../../assets/Tutors/Tut14.png';
import t15 from '../../../assets/Tutors/Tut15.png'; 


const categories = ['Physics', 'Chemistry', 'Mathematics', 'Strategy & College Overview'];

const videos = {
  Physics: [
    {
      title: 'Dr. Raj Kumar',
      description: 'Top Strategies to Crack JEE Advanced with Ease.',
      thumbnail: t1,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
      likes: "500K",
      views: "1M",
    },
    {
      title: 'Dr. Rani Kumar Mandal',
      description: 'Step-by-Step Guide to Master JEE Mains.',
      thumbnail: t11,
      videoUrl: 'https://www.youtube.com/watch?v=2Ot52xaPPik&pp=ygUEamVlIA%3D%3D',
      likes: "800K",
      views: "2M",
    },
    {
      title: 'Dr. Raj Kumar',
      description: 'Top Strategies to Crack JEE Advanced with Ease.',
      thumbnail: t2,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
      likes: "500K",
      views: "1M",
    },
    {
      title: 'Dr. Rani Kumar Mandal',
      description: 'Step-by-Step Guide to Master JEE Mains.',
      thumbnail: t12,
      videoUrl: 'https://www.youtube.com/watch?v=2Ot52xaPPik&pp=ygUEamVlIA%3D%3D',
      likes: "800K",
      views: "2M",
    },
  ],
  Chemistry: [
    {
      title: 'NEET 2024 Preparation',
      description: 'Tips for Medical Aspirants to Ace NEET 2024.',
      thumbnail: t3,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
      likes: 180,
      views: 6500,
    },
    {
      title: 'Dr. Raj Kumar',
      description: 'Top Strategies to Crack JEE Advanced with Ease.',
      thumbnail: t13,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
      likes: "500K",
      views: "1M",
    },
    {
      title: 'Dr. Rani Kumar Mandal',
      description: 'Step-by-Step Guide to Master JEE Mains.',
      thumbnail: t14,
      videoUrl: 'https://www.youtube.com/watch?v=2Ot52xaPPik&pp=ygUEamVlIA%3D%3D',
      likes: "800K",
      views: "2M",
    },
    {
      title: 'Dr. Raj Kumar',
      description: 'Top Strategies to Crack JEE Advanced with Ease.',
      thumbnail: t4,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
      likes: "500K",
      views: "1M",
    },
  ],
  Mathematics: [
    {
      title: 'IPMAT Success Stories',
      description: 'How Students Cleared IPMAT with Strategic Planning.',
      thumbnail: t5,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
      likes: 150,
      views: 4500,
    },
  ],
  "Strategy & College Overview": [
    {
      title: 'Crack SAT with These Tips',
      description: 'Effective Methods to Prepare for the SAT Exam.',
      thumbnail: t15,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
      likes: 200,
      views: 8000,
    }, 
  ],
};

const NeetVideoClassesShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('Physics');
  const [showPopup, setShowPopup] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const handleVideoClick = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setShowPopup(true);
  };

  const closePopup = () => {
    setCurrentVideoUrl('');
    setShowPopup(false);
  };

  return (
    <div className="relative min-h-64 p-1 bg-white text-black overflow-hidden mt-3">
      {/* Inline SVG Grid Background */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 z-0"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Content Wrapper */}
      <div className="relative z-0 ml-8">
        {/* Header */}
        <header className="mb-4 px-4">
          <div className="flex items-center space-x-1 mb-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="relative -top-1.2"
            >
              <path
                d="M24 11.9914C19.2924 12.4191 16.5877 12.8125 14.9272 14.1126C12.9757 15.6351 12.5136 18.4234 12 24C11.4693 18.2181 10.99 15.4469 8.85021 13.9587C7.18973 12.7954 4.50214 12.4191 0 12.0086C4.69044 11.5809 7.41227 11.1875 9.05564 9.90449C11.0243 8.36493 11.4864 5.59373 12 0C12.4793 5.14897 12.9073 7.90306 14.4993 9.49394C16.0913 11.0848 18.8645 11.5296 24 11.9914Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="12"
                  y1="0"
                  x2="12"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#39B6D8" />
                  <stop offset="0.5" stopColor="#F7D344" />
                  <stop offset="1" stopColor="#E38330" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-[10px] text-gray-400 mt-1 font-serif font-light">
              DISCOVER NEW PERSPECTIVES
            </p>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-black mt-1">
            Classes By NEET Experts
          </h3>
        </header>

        {/* Navigation with Black Background */}
        <div className="bg-black py-2 px-3 mx-3 rounded-md">
          <nav className="flex justify-start -space-x-5 md:space-x-10 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                className={`text-sm px-4 py-1 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400'
                    : 'text-gray-400'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Video Cards Slide */}
        <main className="overflow-x-auto px-3 py-2 mt-3">
          <div className="flex space-x-4">
            {(videos[selectedCategory] || []).map((video, index) => (
              <div
                key={index}
                className="w-60 bg-white rounded-lg shadow-md p-2 shrink-0 cursor-pointer"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="relative w-full h-32 rounded-lg overflow-hidden mb-2">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-xs font-semibold mb-1 text-gray-800">
                  {video.title}
                </h2>
                <p className="text-[11px] text-gray-600 mb-2">{video.description}</p>
                <div className="flex items-center justify-between text-gray-500 text-[10px] mt-1">
                  <div className="flex items-center space-x-1">
                    <AiOutlineHeart />
                    <span className='font-bold'>{video.likes} Likes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <AiOutlineEye />
                    <span className='font-bold'>{video.views} Watch Mins</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Video Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-11/12 md:w-2/3 lg:w-1/2">
            <iframe
              src={currentVideoUrl}
              title="Video Player"
              allow="autoplay; encrypted-media"
              className="w-full h-64 md:h-96 rounded-lg"
            ></iframe>
            <button
              onClick={closePopup}
              className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NeetVideoClassesShowcase;
