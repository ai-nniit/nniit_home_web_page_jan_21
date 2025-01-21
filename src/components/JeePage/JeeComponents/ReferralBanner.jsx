// import React from 'react';

// const ReferralBanner = () => {
//   return (
//     <div className="relative w-full bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
//       <div className="relative w-full px-6 md:px-12 py-4 md:py-6 mx-auto overflow-hidden">
//         {/* Content Container */}
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
//           {/* Text Content */}
//           <div className="flex-1 space-y-3 z-10 text-center md:text-left">
//             <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
//               Refer friends to win Amazon vouchers and Plus Subscription
//             </h2>
//             <p className="text-gray-600 text-sm md:text-base">
//               For every successful referral, win up to ₹2,500. Also, get 1-month Plus Subscription once.
//             </p>
//             <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
//               Refer a friend
//             </button>
//           </div>

//           {/* Gift Card Illustration */}
//           <div className="relative hidden md:block flex-shrink-0 md:ml-8">
//             <svg
//               className="w-48 h-48 md:w-64 md:h-64 lg:h-72"
//               viewBox="0 0 400 300"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {/* SVG content unchanged */}
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReferralBanner;










import React from 'react';
import refer from '../../../assets/Refer_Friend.webp'

const ReferralBanner = () => {
  return (
    <div className="relative w-full md:mt-20 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      <div className="relative w-full px-6 md:px-12 py-4 md:py-6 mx-auto overflow-hidden">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="flex-1 md:w-1/2 space-y-3 z-10 text-center md:text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
              Refer friends to win Amazon vouchers and Plus Subscription
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              For every successful referral, win up to ₹2,500. Also, get 1-month Plus Subscription once.
            </p>
            <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
              Refer a friend
            </button>
          </div>

          {/* GIF Illustration */}
          <div className="relative hidden md:block flex-shrink-0 md:w-1/2 md:ml-8">
            <img
              className="w-48 h-48 md:w-64 md:h-64 md:rounded-md lg:h-72 ml-28"
              src={refer}
              alt="Refer a friend illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralBanner;
