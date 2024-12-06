import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewCard({ title, text, rating, reviewer }) {
  return (
    <div className="flex-shrink-0 w-[300px] bg-gradient-to-br from-gray-100 via-pink-600 to-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xs font-medium text-gray-500 mb-3">{title}</h3>
      <p className="text-gray-900 mb-4 text-sm leading-relaxed">{text}</p>
      
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
          <span className="text-sm text-gray-600 ml-2">{rating.toFixed(1)}</span>
        </div>
      )}

      <div className="flex items-center gap-3">
        <img
          src={reviewer.avatar}
          alt={reviewer.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-gray-900 text-sm">{reviewer.name}</p>
          <p className="text-gray-500 text-xs">{reviewer.role}</p>
        </div>
      </div>
    </div>
  );
}
