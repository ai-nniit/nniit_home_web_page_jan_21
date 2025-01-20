// import React, { useEffect, useState } from 'react';
// import './ClaimYourSport.css'; // Create this CSS file for custom animations
// import LearnersBadge from './LearnBadge';
// import img1 from '../../assets/new.png'
// import bg1 from '../../assets/pracbeee.jpg';
// import { Sparkles, ArrowRight, Calendar } from 'lucide-react';

// const ClaimYourSpot = () => {
//   // Initial time in seconds (5 hours, 59 minutes, 59 seconds)
//   const initialTime = 5 * 60 * 60 + 59 * 60 + 59;

//   const [isHovered, setIsHovered] = useState(false);

//   const [timeLeft, setTimeLeft] = useState(initialTime);

//   useEffect(() => {
//     // Update the countdown every second
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 0) {
//           clearInterval(timer);
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     // Clear the interval when the component unmounts
//     return () => clearInterval(timer);
//   }, []);

//   // Convert the time left in seconds to hours, minutes, and seconds
//   const formatTime = (time) => {
//     const hours = Math.floor(time / 3600);
//     const minutes = Math.floor((time % 3600) / 60);
//     const seconds = time % 60;
//     return { hours, minutes, seconds };
//   };

//   const { hours, minutes, seconds } = formatTime(timeLeft);

//   return (
//     <div className="max-w-screen-lg mx-auto px-1 py-2 text-black">
//   <header className="mb-4 px-4">
//           <div className="flex items-center space-x-1 mb-0.5">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               className="relative -top-1.2"
//             >
//               <path
//                 d="M24 11.9914C19.2924 12.4191 16.5877 12.8125 14.9272 14.1126C12.9757 15.6351 12.5136 18.4234 12 24C11.4693 18.2181 10.99 15.4469 8.85021 13.9587C7.18973 12.7954 4.50214 12.4191 0 12.0086C4.69044 11.5809 7.41227 11.1875 9.05564 9.90449C11.0243 8.36493 11.4864 5.59373 12 0C12.4793 5.14897 12.9073 7.90306 14.4993 9.49394C16.0913 11.0848 18.8645 11.5296 24 11.9914Z"
//                 fill="url(#paint0_linear)"
//               />
//               <defs>
//                 <linearGradient
//                   id="paint0_linear"
//                   x1="12"
//                   y1="0"
//                   x2="12"
//                   y2="24"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stopColor="#39B6D8" />
//                   <stop offset="0.5" stopColor="#F7D344" />
//                   <stop offset="1" stopColor="#E38330" />
//                 </linearGradient>
//               </defs>
//             </svg>
//             <p className="text-[10px] text-gray-400 mt-2 font-serif font-light">
//               DISCOVER NEW PERSPECTIVES
//             </p>
//           </div>
//           <h3 className="text-[25px] md:text-2xl font-extrabold font-serif text-black mt-1">
//             Book Your Free Demo
//           </h3>
//         </header>
//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//     {/* Left Section */}
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-3">
//   <div className="max-w-md w-full">
//     <div
//       className={`
//         relative overflow-hidden rounded-2xl
//         transform transition-all duration-300
//         ${isHovered ? 'scale-105' : 'scale-100'}
//       `}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Background Card with Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-indigo-300 opacity-100" />

//       {/* Content Container */}
//       <div className="relative p-8 md:p-10">
//         {/* Timer Section */}
//         <div
//           className="p-2 rounded-lg text-center text-white mb-6 bg-gradient-to-r from-violet-300 to-indigo-400 opacity-90"
//           // style={{
//           //   backgroundImage: `url(${bg1})`,
//           //   backgroundSize: 'cover',
//           //   backgroundPosition: 'center',
//           // }}
//         >
//           <div className="flex items-center justify-center mb-1">
//             <img
//               src={img1}
//               alt="New Offer"
//               className="-mr-6"
//               style={{ transform: 'rotate(320deg)', height: '48px', width: '45px' }}
//             />
//             <h3 className="text-2xl font-semibold">
//               Book Your <span className="text-3xl font-bold mb-1 text-yellow-500">Free Demo</span>
//             </h3>
//           </div>
//           <p className="text-sm text-black">For Next class</p>
//           <div className="flex justify-center space-x-4 mt-3">
//             {['Hrs', 'Mins', 'Secs'].map((unit, index) => {
//               const timeValue = [hours, minutes, seconds][index];
//               return (
//                 <div
//                   key={unit}
//                   className="text-center text-black border-2 border-yellow-500 rounded-lg p-2 relative time-box"
//                 >
//                   <p className="text-3xl text-black font-bold">{String(timeValue).padStart(2, '0')}</p>
//                   <p className="text-xs text-black">{unit}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Tuition Fee Section */}
//         <div className="bg-gradient-to-r from-violet-300 to-indigo-400 opacity-90 p-4 rounded-lg text-center mb-6">
//           <p className="text-xl font-bold mb-1">
//             Claim your <span className="text-3xl font-bold mb-1 text-yellow-500">50%</span> reward on First Course
//           </p>
//           <p className="text-sm text-black mb-4">
//             Still Any Queries? Clear all your queries with IIT Experts.
//           </p>
//           {/* CTA Button */}
//         <button
//           className={`
//             group flex items-center gap-1 
//             bg-white text-indigo-600 
//             px-3 py-3 rounded-lg font-semibold
//             transform transition-all duration-300
//             hover:bg-opacity-90 hover:shadow-xl
//             ${isHovered ? 'translate-x-2' : ''}
//           `}
//         >
//           <Calendar className="w-5 h-5" />
//           Book a Free Demo
//           <ArrowRight
//             className={`
//               w-5 h-5 transition-transform duration-300
//               ${isHovered ? 'translate-x-2' : ''}
//             `}
//           />
//         </button>

//           <p className="text-sm text-black mt-2">Grab Your Reward, it's Going to End soon.</p>
//         </div>

//         {/* Main Content */}
//         {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//           Transform Your Business Today
//         </h2>
//         <p className="text-indigo-100 mb-8">
//           Experience our powerful solution firsthand. Book your personalized demo session with our experts.
//         </p> */}

        

//         {/* Decorative Elements */}
//         <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
//         <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />
//       </div>
//     </div>

//     {/* Social Proof */}
//     <div className="mt-6 text-center text-gray-600">
//       <p className="text-sm">Trusted by 10,000+ businesses worldwide</p>
//     </div>
//   </div>
// </div>

//     {/* Right Section */}
//     <div className="bg-gray-800 px-8 py-4 rounded-lg relative">
//       <ul className="space-y-4">
//         <li className="flex items-center text-white">
//           <span className="font-semibold text-[20px] text-white">Book a free trial - </span> Secure your spot
//         </li>
//         <li className="flex items-center text-white">
//           <span className="font-semibold text-[20px] text-white">Try for free - </span> Experience our services
//         </li>
//         <li className="flex items-center text-white">
//           <span className="font-semibold text-[19px] text-white">Start learning - </span> Begin your journey with us
//         </li>
//       </ul>
//       <div className="progress-line"></div>
//     </div>
//   </div>
//   <div className="p-4">
//     <LearnersBadge />
//   </div>
// </div>

//   );
// };

// export default ClaimYourSpot;


import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Star, BookOpen } from 'lucide-react';
import './ClaimYourSport.css';

function ClaimYourSpot() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 51,
    seconds: 47
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let newHours = prevTime.hours;
        let newMinutes = prevTime.minutes;
        let newSeconds = prevTime.seconds - 1;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-2">
      <div className="relative bg-gradient-to-br from-blue-50 to-purple-50  rounded-3xl  max-w-md">
        {/* Background grid effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
        
        <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg">
          {/* Accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-violet-400 to-indigo-400" />
          
          <div className="space-y-4">
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1 bg-indigo-500/10 px-3 -mt-1 py-1 rounded-full">
                <Star className="w-3 h-3 text-indigo-600" />
                <span className="text-xs font-medium text-indigo-600">EXCLUSIVE OFFER</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent mt-4">Stuck at a Topic ?</h3>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent mt-4">Get a Free 1 On 1 Demo Session with Experts!</h2>
              <div className="flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <p className="text-sm text-indigo-400">Book My Free Demo Class Now</p>
              </div>
            </div>

            {/* Timer */}
            <div className="grid grid-cols-3 gap-4">
  {[
    { value: timeLeft.hours, label: 'HRS' },
    { value: timeLeft.minutes, label: 'MIN' },
    { value: timeLeft.seconds, label: 'SEC' }
  ].map((item, index) => (
    <div
      key={index}
      className="relative group bg-white/50 backdrop-blur-sm rounded-2xl p-3 border border-indigo-100 hover:border-indigo-300 transition-colors duration-300"
    >
      {/* Rotating Golden Line */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:border-[2px] before:border-transparent before:border-t-yellow-400 before:border-r-orange-400 before:border-b-yellow-400 before:border-l-orange-400 before:animate-rotate-line" />

      {/* Content */}
      <div className="text-3xl font-bold text-indigo-800 text-center font-mono">
        {formatNumber(item.value)}
      </div>
      <div className="text-[10px] font-medium text-indigo-600 text-center mt-1 tracking-wider">
        {item.label}
      </div>
    </div>
  ))}
</div>




            {/* Reward Section */}
            <div className="space-y-3 text-center">
              <div className="relative inline-block">
                <h3 className="text-[25px] font-bold">
                  <span className='text-transparent text-2xl bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600'>Limited Time Only –  50% </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">
                  Discount Available On Your First Course
                  </span>
                </h3>
              </div>
              <p className="text-indigo-600 text-[15px]">
                Don't Let Doubts Hold Back!
              </p>
            </div>

            {/* CTA Button */}
            <button className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3 transition-all duration-300 hover:from-violet-600 hover:to-indigo-600">
              <div className="relative flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-white" />
                <span className="font-semibold text-white">Secure Your Spot</span>
                <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent [mask-image:linear-gradient(to_right,transparent,white,transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            {/* Footer */}
            <div className="pt-4 border-t border-indigo-100">
              <div className="flex items-center justify-between text-[14px] text-indigo-600">
                <span>10,000+ Students</span>
                <span>•</span>
                <span>Limited Seats</span>
                <span>•</span>
                <span>Expert Mentors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClaimYourSpot;