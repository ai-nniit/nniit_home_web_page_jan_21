// import React, { useState } from 'react';
// import subs1 from '../../../assets/upsc1.jpg';
// import subs2 from '../../../assets/upsc2.jpg';
// import subs3 from '../../../assets/upsc3.jpg';
// import subs4 from '../../../assets/upsc4.jpg';
// import { Play, ChevronRight, ChevronLeft, Eye, Heart } from 'lucide-react';

// const VideoClassCard = ({ teacher, className, views, language, thumbnail, subject, topic }) => {
//   return (
//     <div className="flex flex-col space-y-3 w-auto sm:w-70 flex-shrink-0">
//       {/* Video Thumbnail */}
//       <div className="relative group">
//         <img
//           src={thumbnail}
//           alt={`${teacher}'s class`}
//           className="rounded-lg object-cover w-full aspect-video"
//         />
//         {/* Play Button Overlay */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 rounded-lg">
//           <div className="bg-white p-3 rounded-full">
//             <Play className="w-6 h-6 text-gray-800" />
//           </div>
//         </div>
//         {/* Language Label */}
//         <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full text-xs font-medium">
//           {language}
//         </div>
//       </div>

//       {/* Video Info */}
//       <div className="space-y-2">
//         {/* Subject and Views */}
//         <div className="flex justify-between items-center">
//           <p className="text-sm text-blue-600">{subject}</p>
//           <div className="flex items-center space-x-1 text-xs text-gray-500">
//             <Eye className="w-4 h-4 text-gray-500" />
//             <span>{views}</span>
//           </div>
//         </div>

//         {/* Topic and Likes */}
//         <div className="flex justify-between items-center">
//           <p className="text-sm text-gray-800">{topic}</p>
//           <div className="flex items-center space-x-1 text-xs text-gray-500">
//             <Heart className="w-4 h-4 text-red-500 fill-red-500" />
//             <span>3.7M</span>
//           </div>
//         </div>

//         {/* Teacher's Name */}
//         <p className="text-xs text-gray-400">{teacher}</p>
//       </div>
//     </div>
//   );
// };

// const VideoClassesShowcase = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const videos = [
//     {
//       teacher: "Dr. Raj Kumar",
//       className: "Organic Chemistry Masterclass",
//       views: "19.1M",
//       language: "Hinglish",
//       thumbnail: subs1,
//       subject: "Chemistry",
//       topic: "Organic Chemistry",
//     },
//     {
//       teacher: "Prof. Meera Singh",
//       className: "Physics Problem Solving",
//       views: "15.3M",
//       language: "Hindi",
//       thumbnail: subs2,
//       subject: "Physics",
//       topic: "Problem Solving Techniques",
//     },
//     {
//       teacher: "Dr. Amit Shah",
//       className: "Advanced Calculus",
//       views: "16.7M",
//       language: "English",
//       thumbnail: subs3,
//       subject: "Mathematics",
//       topic: "Advanced Calculus Techniques",
//     },
//     {
//       teacher: "Prof. Priya Verma",
//       className: "IIT JEE Strategy Session",
//       views: "14.8M",
//       language: "Hinglish",
//       thumbnail: subs4,
//       subject: "Strategy",
//       topic: "IIT JEE Preparation Strategy",
//     },
//     // Additional videos
//     {
//       teacher: "Dr. Anita Gupta",
//       className: "Quantum Physics Basics",
//       views: "13.5M",
//       language: "English",
//       thumbnail: subs1,
//       subject: "Physics",
//       topic: "Introduction to Quantum Physics",
//     },
//     {
//       teacher: "Prof. Vikram Singh",
//       className: "Organic Synthesis",
//       views: "19.4M",
//       language: "Hindi",
//       thumbnail: subs2,
//       subject: "Chemistry",
//       topic: "Organic Synthesis Techniques",
//     },
//     {
//       teacher: "Dr. Rahul Mehta",
//       className: "Calculus Advanced Techniques",
//       views: "17.6M",
//       language: "Hinglish",
//       thumbnail: subs3,
//       subject: "Mathematics",
//       topic: "Advanced Calculus Techniques",
//     }
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 4) % videos.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 4 + videos.length) % videos.length);
//   };

//   // Get the videos to display (4 at a time)
//   const displayedVideos = videos.slice(currentIndex, currentIndex + 4).concat(
//     videos.slice(0, Math.max(0, (currentIndex + 4) - videos.length))
//   );

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-32 py-10 bg-gradient-to-b from-blue-50 to-gray-50">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-xl sm:text-3xl font-semibold text-gray-900">
//           Most engaging IIT JEE classes of all time
//         </h2>
//         <button className="text-sm sm:text-base px-1 py-2 sm:py-5 text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
//           See All
//         </button>
//       </div>

//       {/* Video Cards Section */}
//       <div className="relative flex items-center">
//         {/* Previous Button */}
//         <button
//           onClick={handlePrevious}
//           className="absolute -left-2 z-10 flex justify-center p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
//         >
//           <ChevronLeft className="w-6 h-6 text-gray-600" />
//         </button>

//         {/* Video Carousel */}
//         <div className="flex space-x-4 sm:space-x-6 mb-8 overflow-hidden w-full">
//           <div className="flex space-x-4 sm:space-x-6 transition-transform duration-500 ease-in-out">
//             {displayedVideos.map((video, index) => (
//               <VideoClassCard key={index} {...video} />
//             ))}
//           </div>
//         </div>

//         {/* Next Button */}
//         <button
//           onClick={handleNext}
//           className="absolute -right-2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
//         >
//           <ChevronRight className="w-6 h-6 text-gray-600" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoClassesShowcase;
















import React, { useState } from 'react';
import pw from '../../../assets/sub6.jpg';
import msunion from '../../../assets/sub8.jpg';


const categories = ['Physics', 'Chemistry', 'Mathematics', 'Strategy & College Overview'];

const videos = {
  Physics: [
    {
      title: 'Dr. Raj Kumar',
      description: 'Top Strategies to Crack JEE Advanced with Ease.',
      thumbnail: pw,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
    {
      title: 'Dr. Rani Kumar Mandal',
      description: 'Step-by-Step Guide to Master JEE Mains.',
      thumbnail: msunion,
      videoUrl: 'https://www.youtube.com/watch?v=2Ot52xaPPik&pp=ygUEamVlIA%3D%3D',
    },
  ],
  Chemistry: [
    {
      title: 'NEET 2024 Preparation',
      description: 'Tips for Medical Aspirants to Ace NEET 2024.',
      thumbnail: pw,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
  ],
  Mathematics: [
    {
      title: 'IPMAT Success Stories',
      description: 'How Students Cleared IPMAT with Strategic Planning.',
      thumbnail: pw,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
  ],
  "Strategy & College Overview": [
    {
      title: 'Crack SAT with These Tips',
      description: 'Effective Methods to Prepare for the SAT Exam.',
      thumbnail: pw,
      videoUrl: 'https://www.youtube.com/embed/2Ot52xaPPik',
    },
  ],
};

const VideoClassesShowcase = () => {
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
    <div className="relative min-h-64 p-1 md:p-5 bg-white text-black overflow-hidden">
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
            <p className="text-[10px] text-gray-400 mt-2 font-serif font-light">
              DISCOVER NEW PERSPECTIVES
            </p>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-black -mt-1">
            Classes By IIT Experts
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

export default VideoClassesShowcase;
