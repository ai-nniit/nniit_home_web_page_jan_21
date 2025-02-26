const EventCard = ({ imageSrc, title, tag, mode, date, time, linkText }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto mb-6">
      {/* Image Section */}
      <img
        src={imageSrc}
        alt="Event Image"
        className="h-32 md:h-auto w-40 md:w-1/4 object-cover"
      />

      {/* Content Section */}
      <div className="p-4 flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex gap-2 mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-gray-200 rounded">
            {tag}
          </span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">
            {mode}
          </span>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <span className="mr-2">📅 {date}</span>
          <span>🕒 {time}</span>
        </div>
        <a href="#" className="text-yellow-500 font-medium hover:underline">
          {linkText} &rarr;
        </a>
      </div>
    </div>
  );
};

export default EventCard;
