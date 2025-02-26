import React, { useState } from "react";

const PopupForm = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      if (value.length === 10) {
        setShowOTP(true);
      } else {
        setShowOTP(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
  {/* Popup Container */}
  <div className="bg-white w-full max-w-4xl flex flex-col md:flex-row rounded-lg shadow-lg relative">
    {/* Static Left Section */}
    <div className="w-full md:w-1/2 bg-purple-900 text-white p-4 md:p-6 rounded-t-lg md:rounded-l-lg md:rounded-t-none">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
        Why register with us?
      </h2>
      <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
        <li>
          <span className="font-bold">25000+ Students Counseled</span>,
          Absolutely Free of Cost
        </li>
        <li>
          With a totally online Admission Process, we help you get college
          admission without having to step out.
        </li>
        <li>Get help from our experts in finding the right college for you.</li>
        <li>You won’t get unwanted calls from third parties.</li>
      </ul>
    </div>

    {/* Right Form Section */}
    <div className="w-full md:w-1/2 p-4 md:p-6 relative">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        onClick={onClose}
      >
        &#x2715;
      </button>
      <h2 className="text-md md:text-lg font-semibold text-center mb-4">
        Get Counselling from experts, free of cost!
      </h2>
      <div className="space-y-3 md:space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 text-sm"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 text-sm"
        />
        <div className="flex gap-2">
          <span className="p-2 border rounded text-sm">+91</span>
          <input
            type="text"
            placeholder="Enter your 10 digit mobile number"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 text-sm"
          />
        </div>
        {showOTP && (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 text-sm"
          />
        )}
      </div>
      <div className="flex items-center mt-3 md:mt-4">
        <input type="checkbox" id="whatsapp" className="mr-2" />
        <label htmlFor="whatsapp" className="text-xs md:text-sm">
          Enable updates & important information on Whatsapp
        </label>
      </div>
      <button className="w-full mt-3 md:mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-500 text-sm">
        Submit Your Details
      </button>
      <p className="text-xs text-center mt-2">
        By proceeding ahead you expressly agree to the{" "}
        <a href="#" className="text-blue-600 underline">
          Terms & Conditions
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-600 underline">
          Privacy Policy
        </a>
      </p>
    </div>
  </div>
</div>

  );
};

export default PopupForm;
