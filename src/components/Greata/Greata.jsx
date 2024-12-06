import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import educationvideo from '../../assets/video/abc.mp4';

const TimelineSection = () => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  // Sample timeline data - replace with your actual content
  const timelineData = [
    {
      month: 'JAN',
      year: '2019',
      videoUrl: educationvideo,
      thumbnail: '/api/placeholder/400/320',
      description: 'Climate Strike Movement Begins'
    },
    {
      month: 'FEB',
      year: '2019',
      videoUrl: educationvideo,
      thumbnail: '/api/placeholder/400/320',
      description: 'UN Climate Conference Speech'
    },
    // Add more months...
    {
      month: 'MAR',
      year: '2019',
      videoUrl: educationvideo,
      thumbnail: '/api/placeholder/400/320',
      description: 'UN Climate Conference Speech'
    },
    {
      month: 'APR',
      year: '2019',
      videoUrl: educationvideo,
      thumbnail: '/api/placeholder/400/320',
      description: 'UN Climate Conference Speech'
    },
    {
      month: 'MAY',
      year: '2019',
      videoUrl: educationvideo,
      thumbnail: '/api/placeholder/400/320',
      description: 'UN Climate Conference Speech'
    },
    {
      month: 'JUN',
      year: '2019',
      videoUrl: educationvideo,
      thumbnail: '/api/placeholder/400/320',
      description: 'UN Climate Conference Speech'
    },
    {
      month: 'JUL',
      year: '2019',
      videoUrl: educationvideo,
      thumbnail: '/api/placeholder/400/320',
      description: 'UN Climate Conference Speech'
    },
    {
      month: 'AUG',
      year: '2019',
      videoUrl: educationvideo,
      thumbnail: '/api/placeholder/400/320',
      description: 'UN Climate Conference Speech'
    },
    {
      month: 'SEPT',
      year: '2019',
      videoUrl: educationvideo,
      thumbnail: '/api/placeholder/400/320',
      description: 'UN Climate Conference Speech'
    },
    {
      month: 'OCT',
      year: '2019',
      videoUrl: educationvideo,
      thumbnail: '/api/placeholder/400/320',
      description: 'UN Climate Conference Speech'
    },
    {
      month: 'NOV',
      year: '2019',
      videoUrl: educationvideo,
      thumbnail: '/api/placeholder/400/320',
      description: 'UN Climate Conference Speech'
    },
    {
      month: 'DEC',
      year: '2019',
      videoUrl: educationvideo,
      thumbnail: '/api/placeholder/400/320',
      description: 'UN Climate Conference Speech'
    },
  ];

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const delta = e.clientX - startX;
    if (Math.abs(delta) > 50) {
      // Determine direction and update month
      const direction = delta > 0 ? -1 : 1;
      setCurrentMonth(prev => {
        const next = prev + direction;
        return Math.min(Math.max(0, next), timelineData.length - 1);
      });
      setStartX(e.clientX);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('mouseleave', handleDragEnd);
    
    return () => {
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('mouseleave', handleDragEnd);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-emerald-400 overflow-hidden perspective-1000">
      {/* Timeline Header */}
      <div className="absolute top-8 left-0 w-full flex justify-between px-12 text-white z-10">
        <h1 className="text-2xl font-bold">WHY NNIIT HAS GREAT RESULTS</h1>
        <div className="flex gap-8">
          <span>JAN</span>
          <div className="w-64 h-px bg-white/30 my-4"></div>
          <span>DEC</span>
        </div>
      </div>

      {/* Main Timeline Container */}
      <div
        ref={containerRef}
        className="relative w-full h-full cursor-grab"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* 3D Ground Platform */}
        <div 
          className="absolute left-1/2 bottom-48 w-96 h-96 transform -translate-x-1/2"
          style={{
            transform: `translateX(-50%) rotateX(60deg) translateZ(-100px)`,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            boxShadow: '0 0 50px rgba(0,0,0,0.2)',
            borderRadius: '50%'
          }}
        />

        {/* Central Figure */}
        {/* <div 
          className="absolute left-1/2 bottom-64 w-48 h-96 transform -translate-x-1/2"
          style={{
            transform: `translateX(-50%) translateZ(50px)`,
            transition: 'transform 0.5s ease-out'
          }}
        >
          <div className="w-full h-full bg-white rounded-md shadow-xl" />
        </div> */}

        {/* Video Thumbnails */}
        {timelineData.map((item, index) => {
          const isActive = index === currentMonth;
          const isPrev = index === currentMonth - 1;
          const isNext = index === currentMonth + 1;
          
          let xPos = '100%';
          let zPos = -500;
          let rotation = 45;
          let opacity = 0;
          
          if (isActive) {
            xPos = '0%';
            zPos = 0;
            rotation = 0;
            opacity = 1;
          } else if (isPrev) {
            xPos = '-100%';
            zPos = -250;
            rotation = -45;
            opacity = 0.6;
          } else if (isNext) {
            xPos = '100%';
            zPos = -250;
            rotation = 45;
            opacity = 0.6;
          }

          return (
            <div
              key={item.month}
              className="absolute top-1/4 left-1/2 w-64 h-48 transform -translate-x-1/2"
              style={{
                transform: `translateX(${xPos}) translateZ(${zPos}px) rotateY(${rotation}deg)`,
                opacity,
                transition: 'all 0.5s ease-out',
                transformStyle: 'preserve-3d'
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.description}
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-lg font-bold">{item.month}</h3>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            </div>
          );
        })}

        {/* Month/Year Display */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center text-white">
          <h2 className="text-8xl font-bold tracking-wider">
            {timelineData[currentMonth].month}
          </h2>
          <p className="text-2xl mt-4">{timelineData[currentMonth].year}</p>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-8">
          <button
            onClick={() => setCurrentMonth(prev => Math.max(0, prev - 1))}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setCurrentMonth(prev => Math.min(timelineData.length - 1, prev + 1))}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-8 right-8 flex gap-4 text-white">
          <button className="opacity-60 hover:opacity-100 transition-opacity">FB</button>
          <button className="opacity-60 hover:opacity-100 transition-opacity">TW</button>
          <button className="opacity-60 hover:opacity-100 transition-opacity">YT</button>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;