import React, { useState } from 'react';

const PollComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false); // Add OTP field state
  const [phoneNumber, setPhoneNumber] = useState(''); // Store phone number input

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleGetCallback = () => {
    setShowForm(true);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    // Simulate OTP logic (e.g., when the phone number is valid)
    if (value.length === 10) {
      setShowOtpField(true);
    } else {
      setShowOtpField(false);
    }
  };

  return (
    <div className="bg-blue-200 shadow-lg rounded-lg p-6 w-full space-y-5 border border-gray-300">
      {/* Poll Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Do you agree with the rollback on JEE Advanced attempt limits?
      </h2>

      <div className="space-y-4 w-full md:w-1/2">
        {['No, 3 attempts were better', 'Yes, 2 attempts are ok', 'Not aware of the change', 'Does not matter'].map(
          (option, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-2 border rounded-lg cursor-pointer transition ${
                selectedOption === option
                  ? 'bg-blue-100 border-blue-500'
                  : 'bg-white border-gray-300 hover:bg-gray-100'
              } ${selectedOption && selectedOption !== option ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => handleOptionChange(option)}
            >
              <span className="text-gray-700 truncate w-full">{option}</span>
              <input
                type="radio"
                name="poll"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="hidden"
                disabled={!!selectedOption}
              />
              {selectedOption === option && <span className="text-blue-500 font-bold">✔</span>}
            </div>
          )
        )}
      </div>

      {/* Poll Info */}
      <p className="mt-4 text-gray-500 text-sm">{`4546 votes • 28 days left`}</p>

      {/* Callback Prompt */}
      {selectedOption && !showForm && (
        <div className="mt-6">
          <p className="mb-4 text-gray-700 font-medium">
            Want to know others' opinions and expert points of view?
          </p>
          <button
            onClick={handleGetCallback}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-md"
          >
            Fill the Form and Get Callback
          </button>
        </div>
      )}

      {/* Callback Form */}
      {showForm && (
        <div className="mt-6 bg-gray-50 p-4 rounded-md border border-gray-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Fill the Form</h3>
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your phone number"
                required
              />
            </div>
            {/* OTP Field */}
            {showOtpField && (
              <div>
                <label className="block text-sm font-medium text-gray-700">OTP</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter the OTP sent to your phone"
                  required
                />
              </div>
            )}
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-md w-full"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PollComponent;
