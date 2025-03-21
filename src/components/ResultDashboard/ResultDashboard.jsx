import React, { useEffect, useState, useRef } from 'react';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const increment = target / 100;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(current));
            }
          }, 40);
          observer.disconnect();
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -50px 0px' } // Adjust threshold and root margin for mobile
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
};

const ResultsSection = () => {
  return (
    <div className="bg-white mx-auto p-14">
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
            <p className="text-[10px] text-gray-400 mt-2 font-sf font-light">
              DISCOVER NEW PERSPECTIVES
            </p>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-sf-bold text-black -mt-0 text-left">
            Impact At Scale
          </h3>
        </header>
      <div className="grid gap-8 mt-10 md:grid-cols-3">
        <div className="relative text-center">
          <div className="absolute left-0 top-0 h-full border-l border-gray-300">
            <div className="bg-gray-700 w-0.5 h-8"></div>
          </div>
          <span className="inline-block font-sf bg-purple-200 text-purple-700 text-[16px] px-4 py-1 rounded-full mb-4">
          Global Reach
          </span>
          <h3 className="text-3xl font-bold font-sf"><Counter target={59} />+ Countries</h3>
          <p className="text-gray-600 mt-2 px-3 font-sf text-xs">
          Empowering learners worldwide with personalized, flexible, and high-impact live classes.
          </p>
        </div>
        <div className="relative text-center">
          <div className="absolute left-0 top-0 h-full border-l border-gray-300">
            <div className="bg-gray-700 w-0.5 h-8"></div>
          </div>
          <span className="inline-block bg-orange-200 text-orange-700 text-[16px] px-4 py-1 rounded-full mb-4 font-sf">
          Live Learning Hours
          </span>
          <h3 className="text-2xl font-bold font-sf"><Counter target={3.1} />+ Crore Hours</h3>
          <p className="text-gray-600 mt-2 px-3 font-sf text-xs">
          Delivering extensive, high-quality, and interactive one-on-one learning experiences across the globe.
          </p>
        </div>
        <div className="relative text-center">
          <div className="absolute left-0 top-0 h-full border-l border-gray-300">
            <div className="bg-gray-700 w-0.5 h-8"></div>
          </div>
          <span className="inline-block bg-green-200 text-green-700 text-[16px] px-4 py-1 rounded-full mb-4 font-sf">
          Doubts Resolved
          </span>
          <h3 className="text-2xl font-bold font-sf"><Counter target={3} />M+ Doubts Answered</h3>
          <p className="text-gray-600 mt-2 font-sf text-xs">
          Ensuring clarity and deeper understanding by resolving every student's queries instantly through our app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
