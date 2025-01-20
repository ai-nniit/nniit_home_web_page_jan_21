import React, { useState } from 'react';
import subs1 from '../../../assets/upsc1.jpg';
import subs2 from '../../../assets/upsc2.jpg';
import subs3 from '../../../assets/upsc3.jpg';
import subs4 from '../../../assets/upsc4.jpg';
import { Play, ChevronRight, ChevronLeft, Eye, Heart } from 'lucide-react';

const VideoClassCard = ({ teacher, className, views, language, thumbnail, subject, topic }) => {
  return (
    <div className="flex flex-col space-y-3 w-auto sm:w-70 flex-shrink-0">
      {/* Video Thumbnail */}
      <div className="relative group">
        <img
          src={thumbnail}
          alt={`${teacher}'s class`}
          className="rounded-lg object-cover w-full aspect-video"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 rounded-lg">
          <div className="bg-white p-3 rounded-full">
            <Play className="w-6 h-6 text-gray-800" />
          </div>
        </div>
        {/* Language Label */}
        <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full text-xs font-medium">
          {language}
        </div>
      </div>

      {/* Video Info */}
      <div className="space-y-2">
        {/* Subject and Views */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-blue-600">{subject}</p>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <Eye className="w-4 h-4 text-gray-500" />
            <span>{views}</span>
          </div>
        </div>

        {/* Topic and Likes */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-800">{topic}</p>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>3.7M</span>
          </div>
        </div>

        {/* Teacher's Name */}
        <p className="text-xs text-gray-400">{teacher}</p>
      </div>
    </div>
  );
};

const VideoClassesShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      teacher: "Dr. Raj Kumar",
      className: "Organic Chemistry Masterclass",
      views: "19.1M",
      language: "Hinglish",
      thumbnail: subs1,
      subject: "Chemistry",
      topic: "Organic Chemistry",
    },
    {
      teacher: "Prof. Meera Singh",
      className: "Physics Problem Solving",
      views: "15.3M",
      language: "Hindi",
      thumbnail: subs2,
      subject: "Physics",
      topic: "Problem Solving Techniques",
    },
    {
      teacher: "Dr. Amit Shah",
      className: "Advanced Calculus",
      views: "16.7M",
      language: "English",
      thumbnail: subs3,
      subject: "Mathematics",
      topic: "Advanced Calculus Techniques",
    },
    {
      teacher: "Prof. Priya Verma",
      className: "IIT JEE Strategy Session",
      views: "14.8M",
      language: "Hinglish",
      thumbnail: subs4,
      subject: "Strategy",
      topic: "IIT JEE Preparation Strategy",
    },
    // Additional videos
    {
      teacher: "Dr. Anita Gupta",
      className: "Quantum Physics Basics",
      views: "13.5M",
      language: "English",
      thumbnail: subs1,
      subject: "Physics",
      topic: "Introduction to Quantum Physics",
    },
    {
      teacher: "Prof. Vikram Singh",
      className: "Organic Synthesis",
      views: "19.4M",
      language: "Hindi",
      thumbnail: subs2,
      subject: "Chemistry",
      topic: "Organic Synthesis Techniques",
    },
    {
      teacher: "Dr. Rahul Mehta",
      className: "Calculus Advanced Techniques",
      views: "17.6M",
      language: "Hinglish",
      thumbnail: subs3,
      subject: "Mathematics",
      topic: "Advanced Calculus Techniques",
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % videos.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 + videos.length) % videos.length);
  };

  // Get the videos to display (4 at a time)
  const displayedVideos = videos.slice(currentIndex, currentIndex + 4).concat(
    videos.slice(0, Math.max(0, (currentIndex + 4) - videos.length))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-32 py-10 bg-gradient-to-b from-blue-50 to-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-900">
          Most engaging IIT JEE classes of all time
        </h2>
        <button className="text-sm sm:text-base px-1 py-2 sm:py-5 text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
          See All
        </button>
      </div>

      {/* Video Cards Section */}
      <div className="relative flex items-center">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute -left-2 z-10 flex justify-center p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Video Carousel */}
        <div className="flex space-x-4 sm:space-x-6 mb-8 overflow-hidden w-full">
          <div className="flex space-x-4 sm:space-x-6 transition-transform duration-500 ease-in-out">
            {displayedVideos.map((video, index) => (
              <VideoClassCard key={index} {...video} />
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute -right-2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default VideoClassesShowcase;
