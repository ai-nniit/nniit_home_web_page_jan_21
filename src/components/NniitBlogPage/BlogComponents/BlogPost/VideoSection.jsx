import { useState } from 'react';

const VideoSection = ({ videoData }) => {
  const [liked, setLiked] = useState(false);

  // Toggle like button color
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-8 space-y-4 md:space-y-0">
      {videoData.map((video, index) => (
        <div
          key={index}
          className="w-full max-w-sm cursor-pointer group"
        >
          {/* Video Thumbnail */}
          <div className="relative">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            {/* Play Button Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-60 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4.318v11.364c0 .628.729.94 1.25.635l10.25-5.682a.75.75 0 000-1.27L5.25 3.683A.75.75 0 004 4.318z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Video Title */}
          <h3 className="mt-4 text-xl font-semibold text-center">{video.title}</h3>

          {/* Views and Likes */}
          <div className="flex justify-center items-center space-x-4 mt-2 text-gray-500">
            <span>{video.views} Views</span>
            <span>{video.likes} Likes</span>
          </div>

          {/* Love Button */}
          {/* <div className="flex justify-center mt-2">
            <button onClick={toggleLike} className="text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 ${liked ? 'text-red-600' : 'text-gray-500'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21c-4.418 0-8-3.582-8-8 0-3.18 2.513-6.6 5.946-7.84A3.024 3.024 0 0112 4a3.024 3.024 0 014.054 1.16C17.487 6.4 20 9.82 20 13c0 4.418-3.582 8-8 8z"
                />
              </svg>
            </button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default VideoSection;
