import React from 'react';

const ReferralBanner = () => {
  return (
    <div className="relative w-full min-w-full bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      <div className="relative w-full px-12 md:px-22 py-6 md:py-8 mx-auto overflow-hidden pl-[78px]">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl space-y-4 z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight">
              Refer friends to win Amazon vouchers and Plus Subscription
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              For every successful referral win up to ₹2,500. Also, get 1 month plus subscription once.
            </p>
            <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
              Refer a friend
            </button>
          </div>

          {/* Gift Card Illustration */}
          <div className="relative hidden md:block flex-shrink-0 ml-8"
          style={{
            transform: "translateX(-3.75cm)", // Move left by 3 centimeters
          }}
          >

            <svg
              className="w-72 h-72 md:h-80 lg:h-96"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Gift Card Background */}
              <rect
                x="50"
                y="70"
                width="300"
                height="160"
                rx="10"
                fill="rgba(139, 115, 85, 0.65)" /* More transparent and less pigmented brown */
              stroke="rgba(255, 225, 50, 0.6)" 
                strokeWidth="4"
                filter="drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
              />

              {/* Ribbon */}
              <path d="M120 70 L280 70 L200 100 Z" fill="rgba(255, 215, 0, 0.8)" />

              {/* Rupee Symbol */}
              <text
                x="200"
                y="150"
                fontSize="48"
                fontWeight="bold"
                fill="rgba(255, 215, 0, 0.8)"
                textAnchor="middle"
              >
                ₹
              </text>

              {/* Decorative Elements */}
              <g transform="translate(160, 120)">
                <rect
                  x="-1"
                  y="45"
                  width="75"
                  height="30"
                  rx="8"
                  fill="rgba(255, 215, 0, 0.8)"
                />
                <text
                  x="38"
                  y="68"
                  fontSize="16"
                  fontWeight="bold"
                  fill="rgba(75, 63, 47, 0.8)"
                  textAnchor="middle"
                >
                  Gift Card
                </text>
              </g>

              {/* Plus Icon */}
              <g transform="translate(320, 100)">
                <circle cx="0" cy="0" r="20" fill="rgba(255, 215, 0, 0.8)" />
                <path
                  d="M-10 0 H10 M0 -10 V10"
                  stroke="#fff"
                  strokeWidth="3"
                />
              </g>

              {/* Decorative Stars */}
              {[...Array(5)].map((_, i) => (
                <g key={i} transform={`translate(${70 + i * 50}, ${80 + (i % 2) * 30})`}>
                  <path
                    d="M0 -7 L2 -2 L7 -2 L3 2 L5 7 L0 3 L-5 7 L-3 2 L-7 -2 L-2 -2 Z"
                    fill="rgba(255, 215, 0, 0.8)"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                </g>
              ))}

              {/* Sparkles */}
              {[...Array(8)].map((_, i) => (
                <circle
                  key={`sparkle-${i}`}
                  cx={80 + i * 30}
                  cy={220 - (i % 2) * 30}
                  r="3"
                  fill="rgba(255, 215, 0, 0.8)"
                  className="animate-ping"
                  style={{ animationDelay: `${i * 300}ms` }}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralBanner;
