import React, { useEffect, useState } from "react";

const VideoAdAndScrollTop = () => {
  const [showAd, setShowAd] = useState(false);
  const [adClosed, setAdClosed] = useState(false); // Track if ad is closed

  // Show video ad after 5 seconds on page load, unless the ad was closed
  useEffect(() => {
    if (!adClosed) {
      const timer = setTimeout(() => {
        setShowAd(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [adClosed]);

  // Handle closing of the ad
  const closeAd = () => {
    setShowAd(false);
    setAdClosed(true); // Set ad as closed
  };

  // Show the ad again after 10 seconds if it was closed
  useEffect(() => {
    if (adClosed) {
      const timer = setTimeout(() => {
        setShowAd(true); // Show the ad again
        setAdClosed(false); // Reset the ad closed state
      }, 60000);

      return () => clearTimeout(timer);
    }
  }, [adClosed]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-14 left-6 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-900"
      >
        &#x25B2;
      </button>

      {/* Video Ad Section */}
      {showAd && (
        <div
          className="fixed bottom-16 left-4 bg-white shadow-xl rounded-lg 
                     w-28 h-44 sm:w-48 sm:h-86 border border-gray-300 
                     transition-transform transform translate-x-0 animate-slide-in"
        >
          <div className="relative w-full h-full">
            <button
              onClick={closeAd} // Close the ad when the button is clicked
              className="absolute top-2 right-2 bg-gray-300 rounded-full w-6 h-6 text-black flex items-center justify-center"
            >
              &times;
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/PO-JdsdBrwo?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoAdAndScrollTop;
