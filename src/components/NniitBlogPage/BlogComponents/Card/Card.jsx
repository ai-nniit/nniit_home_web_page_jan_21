import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ArrowRight } from 'lucide-react';

// Card Component
const Card = ({ image, label, title, purchased, author, rating, members }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
      </div>

      <div className="p-4">
        <span className="text-xs font-medium tracking-wider text-blue-600 mb-2 block">
          {label}
        </span>

        <h3 className="font-semibold text-lg mb-4 line-clamp-2">{title}</h3>

        <p className="text-xs text-gray-700 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="text-blue-600 font-semibold">{purchased.split(" ")[0]}</span>{" "}
          bought in past month
        </p>

        {/* Star Rating */}
        <div className="flex items-center text-yellow-500 mb-2">
          {renderStars(rating)}
          <span className="text-gray-600 text-sm ml-2">
            {rating.toFixed(1)} {members}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Posted by {author}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

// Function to render stars
function renderStars(rating) {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 >= 0.5; // Whether to show a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {hasHalfStar && <FaStarHalfAlt key="half" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </>
  );
}

export default Card;
