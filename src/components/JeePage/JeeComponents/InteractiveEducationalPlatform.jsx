import React, { useState } from 'react';
import { Play, Beaker, Atom, Calculator, GraduationCap, Eye, Heart } from 'lucide-react';
import subs6 from '../../../assets/sub6.jpg';
import subs7 from '../../../assets/sub7.jpg';
import subs8 from '../../../assets/sub8.jpg';
import subs9 from '../../../assets/sub9.jpg';

const SubjectButton = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${isActive
        ? 'bg-emerald-500 text-white shadow-lg'
        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

const VideoCard = ({ instructor, title, language, views, subjects, thumbnail, likes }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative aspect-video">
        <img
          src={thumbnail}
          alt={`${instructor}'s class`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="bg-white/90 p-2 rounded-full">
            <Play className="w-6 h-6 text-emerald-600" />
          </div>
        </div>
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {subjects.map((subject, index) => (
            <span
              key={index}
              className="bg-white/90 px-2 py-0.5 rounded-full text-xs font-medium"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>

      <div className="p-3 space-y-1">
        <h3 className="text-sm font-semibold text-gray-900">{instructor}</h3>
        <p className="text-xs text-gray-600">{title}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{language}</span>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{views} views</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <span>{likes} Likes</span>
        </div>
      </div>
    </div>
  );
};

const InteractiveEducationalPlatform = () => {
  const [activeSubject, setActiveSubject] = useState(null);

  const subjects = [
    { icon: Beaker, label: 'Chemistry', id: 'chemistry' },
    { icon: Atom, label: 'Physics', id: 'physics' },
    { icon: Calculator, label: 'Mathematics', id: 'mathematics' },
    { icon: GraduationCap, label: 'Strategy', id: 'strategy' },
  ];

  const videos = [
    {
      instructor: "Dr. Raj Kumar",
      title: "Organic Chemistry Fundamentals",
      language: "Hinglish",
      views: "19.7M",
      subjects: ["Chemistry", "Strategy"],
      thumbnail: subs6,
      likes: "4.3M"
    },
    {
      instructor: "Prof. Meera Singh",
      title: "Advanced Physics Problem Solving",
      language: "Hindi",
      views: "12.3M",
      subjects: ["Physics"],
      thumbnail: subs7,
      likes: "3.7M"
    },
    {
      instructor: "Dr. Amit Shah",
      title: "Calculus Masterclass",
      language: "English",
      views: "18.5M",
      subjects: ["Mathematics"],
      thumbnail: subs8,
      likes: "4.7M"
    },
    {
      instructor: "Prof. Ravi Shankar",
      title: "Vector Algebra",
      language: "English",
      views: "13.6M",
      subjects: ["Mathematics", "Physics"],
      thumbnail: subs9,
      likes: "3.3M"
    }
  ];

  const filteredVideos = activeSubject
    ? videos.filter(video => video.subjects.includes(subjects.find(s => s.id === activeSubject)?.label))
    : videos;

  return (
    <div className="w-full bg-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-medium text-gray-800 mb-6 text-center sm:text-left">
          Classes by IIT-JEE Experts
        </h1>

        <div className="flex flex-wrap gap-3 mb-6 justify-center sm:justify-start">
          {subjects.map((subject) => (
            <SubjectButton
              key={subject.id}
              {...subject}
              isActive={activeSubject === subject.id}
              onClick={() => setActiveSubject(activeSubject === subject.id ? null : subject.id)}
            />
          ))}
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {activeSubject 
              ? `Showing ${filteredVideos.length} ${subjects.find(s => s.id === activeSubject)?.label} classes`
              : 'All Classes'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredVideos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveEducationalPlatform;
