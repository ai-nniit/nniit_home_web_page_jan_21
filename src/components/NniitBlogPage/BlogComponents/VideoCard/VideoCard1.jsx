import React, { useState } from 'react';
import pw from '../../Blogassets/pw.jpg';
import msunion from '../../Blogassets/msunion.jpg';

const categories = ['JEE', 'NEET', 'IPMAT', 'SAT', 'Class-12', 'Class-11', 'Class-10', 'Class-9', 'Class-8', 'Class-7', 'Class-6'];

const videos = {
  JEE: [
    {
      title: 'JEE Advanced Preparation',
      description: 'Top Strategies to Crack JEE Advanced with Ease.',
      thumbnail: pw,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
    {
      title: 'JEE Mains Guide',
      description: 'Step-by-Step Guide to Master JEE Mains.',
      thumbnail: msunion,
      videoUrl: 'https://www.youtube.com/watch?v=2Ot52xaPPik&pp=ygUEamVlIA%3D%3D',
    },
  ],
  NEET: [
    {
      title: 'NEET 2024 Preparation',
      description: 'Tips for Medical Aspirants to Ace NEET 2024.',
      thumbnail: pw,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
  ],
  IPMAT: [
    {
      title: 'IPMAT Success Stories',
      description: 'How Students Cleared IPMAT with Strategic Planning.',
      thumbnail: pw,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
  ],
  SAT: [
    {
      title: 'Crack SAT with These Tips',
      description: 'Effective Methods to Prepare for the SAT Exam.',
      thumbnail: pw,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
  ],
  "Class-12": [
    {
      title: 'Class 12 Exam Preparation',
      description: 'Comprehensive Guide to Excelling in Class 12 Exams.',
      thumbnail: pw,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
  ],
  "Class-11": [
    {
      title: 'Class 11 Science Overview',
      description: 'Key Topics and Tips for Class 11 Science Students.',
      thumbnail: msunion,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
  ],
  "Class-10": [
    {
      title: 'Class 10 Board Exam Tips',
      description: 'Prepare Effectively for Class 10 Board Exams.',
      thumbnail: pw,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
  ],
  "Class-9": [
    {
      title: 'Class 9 Study Plan',
      description: 'Organized Approach to Excel in Class 9.',
      thumbnail: msunion,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
  ],
  "Class-8": [
    {
      title: 'Class 8 Learning Techniques',
      description: 'Develop a Strong Foundation in Class 8.',
      thumbnail: pw,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
  ],
  "Class-7": [
    {
      title: 'Class 7 Fun Learning',
      description: 'Interactive Ways to Study in Class 7.',
      thumbnail: msunion,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
  ],
  "Class-6": [
    {
      title: 'Class 6 Basics',
      description: 'Essential Concepts for Class 6 Students.',
      thumbnail: pw,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
  ],
};

const VideoCard1 = () => {
  const [selectedCategory, setSelectedCategory] = useState('JEE');
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
    <div className="relative min-h-64 p-1  bg-white text-black overflow-hidden">
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
      <div className="relative z-0">
        {/* Header */}
        <header className="mb-4 px-4">
  {/* Top Section with Smaller Gray Text and SVG */}
  <div className="flex items-center space-x-1 mb-0.5">
    {/* SVG Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className="relative -top-1.2" // Adjusted upwards
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

    {/* Small Gray Text */}
    <p className="text-[10px] text-gray-400 mt-3 font-serif font-light">
      DISCOVER NEW PERSPECTIVES
    </p>
  </div>

  {/* Main Title */}
  <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-black -mt-4">
    MEET OUR EXPERTS
  </h3>
</header>


        {/* Navigation with Black Background */}
        <div className="bg-black py-2 px-4 mx-3 rounded-md">
          <nav className="flex justify-start -space-x-5 overflow-x-auto">
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
            {videos[selectedCategory].map((video, index) => (
              <div
                key={index}
                className="w-60 bg-white rounded-lg shadow-md p-2 shrink-0 cursor-pointer"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                {/* Image */}
                <div className="relative w-full h-32 rounded-lg overflow-hidden mb-2">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Title and Description */}
                <h2 className="text-xs font-semibold mb-1 text-gray-800">
                  {video.title}
                </h2>
                <p className="text-[11px] text-gray-600">{video.description}</p>
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

export default VideoCard1;
