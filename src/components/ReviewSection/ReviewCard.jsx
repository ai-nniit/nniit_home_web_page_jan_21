import React from 'react';
import { Star } from 'lucide-react';
import doublequote from "../../assets/double_quotes.png";

export default function ReviewCard({
  title,
  text,
  rating,
  reviewer,
  variant,
  backgroundImage,
  isSecondCard, // Added prop to identify the second card
}) {
  return (
    <div
  className={`flex-shrink-0 ${
    isSecondCard ? 'w-[500px]' : 'w-[300px]' // Second card has a larger width
  } h-[250px] rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative ${
    variant === 'gradient'
      ? 'bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-white'
      : 'bg-gray-50 backdrop-filter backdrop-blur-2xl text-gray-900'
  }`}
  style={{
    backgroundImage: variant === 'image' ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <h3 className="text-[10px] font-medium font-sf text-gray-500 mb-3">{title}</h3>
  <p className={`mb-4 text-[15px] font-semibold font-sf leading-relaxed ${variant === 'gradient' ? 'text-white' : 'text-gray-900'}`}>
    {text}
  </p>

  {rating && (
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-200'
          }`}
        />
      ))}
      <span className={`text-sm font-sf ml-2 ${variant === 'gradient' ? 'text-white' : 'text-gray-600'}`}>
        {rating.toFixed(1)}
      </span>
    </div>
  )}

  <div className="flex items-center mt-10 font-sf gap-3">
    <img
      src={reviewer.avatar}
      alt={reviewer.name}
      className="w-10 h-10 rounded-full object-cover"
    />
    <div>
      <p className={`font-medium font-sf text-sm ${variant === 'gradient' ? 'text-white' : 'text-gray-900'}`}>
        {reviewer.name}
      </p>
      <p className={`text-xs ${variant === 'gradient' ? 'text-white' : 'text-gray-500'}`}>
        {reviewer.role}
      </p>
    </div>
  </div>

  {/* Double-Quote Image */}
  <img
    src={doublequote} // Replace with the actual path to your image
    alt="Quote"
    className="absolute bottom-20 right-12 w-6 h-6" // Positioned at the bottom-right corner
  />
</div>

  );
}
