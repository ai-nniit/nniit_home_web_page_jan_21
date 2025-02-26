import React from 'react';
import live_classes from '../../assets/live_classes.png';
import educators from '../../assets/educators.png';
import batches from '../../assets/batches.png';
import courses from '../../assets/courses.png';
import playlist from '../../assets/playlist.png';
import practice from '../../assets/practice.png';
import test_series from '../../assets/test_series.png';
import doubts from '../../assets/doubts.png';

const MobileMenu = () => {
  const menuItems = [
    { name: 'Live classes', icon: live_classes },
    { name: 'Educators', icon: educators },
    { name: 'Batches', icon: batches },
    { name: 'Courses', icon: courses },
    { name: 'Playlist', icon: playlist },
    { name: 'Practice', icon: practice },
    { name: 'Test series', icon: test_series },
    { name: 'Doubts', icon: doubts },
  ];

  return (
    <>
    <div className="grid grid-cols-2 gap-2 p-4">
      {menuItems.map((item, index) => (
        
        <div
          key={index}
          className="flex items-center justify-between p-2.5 border rounded-lg bg-white shadow-none hover:border-blue-500 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <img src={item.icon} alt={item.name} className="w-5 h-5" />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
          <span className="text-gray-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5l7 7-7 7" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
      </span>
        </div>
        
      ))}
    </div>
    <div className='justify-center'>
            <button className='border-2 px-10 py-2  text-white   ml-14  bg-[#07bd80] rounded-md'>View Subscription Plan</button>
            <button className='border-2 px-16 py-2 font-semibold ml-14 mt-2 bg-white rounded-md'>Explore for Free</button>
          </div>



    </>
  );
};

export default MobileMenu;
