import React, { useState } from 'react';

const AppDownload = () => {
  const [phoneNumber, setPhoneNumber] = useState('+91');

  const handleGetLink = () => {
    if (phoneNumber.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }
    console.log('Sending link to:', phoneNumber);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          Get link in SMS to download the app
        </h2>
        <div className="flex gap-2">
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter mobile number"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            pattern="[+][0-9]{2}[0-9]{10}"
            maxLength={13}
          />
          <button
            onClick={handleGetLink}
            className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors whitespace-nowrap"
          >
            Get link
          </button>
        </div>
      </div>

      <a
        href="#"
        className="inline-block hover:opacity-90 transition-opacity"
        aria-label="Get it on Google Play"
      >
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          className="h-16"
        />
      </a>
    </div>
  );
};

export default AppDownload;
