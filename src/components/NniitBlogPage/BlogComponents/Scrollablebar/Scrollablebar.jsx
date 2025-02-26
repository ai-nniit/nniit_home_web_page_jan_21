import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

const ScrollableBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const containerRef = useRef(null);  // Reference for the container

  const categories = [
    { 
      title: 'Physics', 
      items: [
        { name: 'Mechanics', path: '/mechanics' },
        { name: 'Thermodynamics', path: '/thermodynamics' },
        { name: 'Optics', path: '/optics' },
        { name: 'Electromagnetism', path: '/electromagnetism' },
      ]
    },
    { 
      title: 'Branches Of Physics', 
      items: [
        { name: 'Classical Mechanics', path: '/classical-mechanics' },
        { name: 'Quantum Mechanics', path: '/quantum-mechanics' },
      ]
    },
    { 
      title: 'Laws Of Physics', 
      items: [
        { name: 'Newton’s Laws', path: '/newtons-laws' },
        { name: 'Laws of Thermodynamics', path: '/laws-of-thermodynamics' },
      ]
    },
    { 
      title: 'SI Unit List', 
      items: [
        { name: 'Meter', path: '/meter' },
        { name: 'Kilogram', path: '/kilogram' },
        { name: 'Second', path: '/second' },
        { name: 'Ampere', path: '/ampere' },
      ]
    },
    { 
      title: 'Physics Formulas', 
      items: [
        { name: 'Force = Mass x Acceleration', path: '/force-mass-acceleration' },
        { name: 'E = mc^2', path: '/einstein-equation' },
      ]
    },
    { 
      title: 'Physics Important Questions', 
      items: [
        { name: 'Define Work', path: '/define-work' },
        { name: 'State Ohm’s Law', path: '/ohms-law' },
      ]
    },
    { 
      title: 'Physics Practicals', 
      items: [
        { name: 'Vernier Caliper', path: '/vernier-caliper' },
        { name: 'Simple Pendulum', path: '/simple-pendulum' },
      ]
    },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Function to scroll the container to the right
  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  // Function to scroll the container to the left
  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  return (
    <div className="relative px-[3cm]">
      {/* Horizontal Scrollable Bar */}
      <div className="flex overflow-hidden bg-gray-100 border border-gray-300 rounded-lg p-2">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-lg z-20"
        >
          <span className="text-xl">←</span>
        </button>

        <div
          ref={containerRef}
          className="flex overflow-x-hidden whitespace-nowrap"
        >
          {categories.map((category, index) => (
            <div key={index} className="relative mx-2">
              <button
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded hover:shadow-md"
                onClick={() => toggleDropdown(index)}
              >
                <span>{category.title}</span>
                <span className="text-gray-600">▼</span>
              </button>
              {/* Dropdown */}
              {activeDropdown === index && (
                <div className="absolute left-0 top-full mt-2 w-48 max-h-48 overflow-y-auto bg-white border border-gray-300 rounded shadow-lg z-10">
                  {category.items.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-lg z-20"
        >
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default ScrollableBar;

