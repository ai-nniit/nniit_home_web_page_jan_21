import React, { useState } from "react";

const PopupForm = ({ closePopup }) => {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  }); // Store form data
  const [otpSent, setOtpSent] = useState(false); // Track if OTP is sent
  const [otp, setOtp] = useState(""); // Store OTP entered by the user
  const [phoneError, setPhoneError] = useState(""); // Store phone number validation error

  // Update form data when user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update specific field
    });
  };

  // Validate phone number and display OTP input
  const sendOtp = () => {
    const phone = formData.phone.trim();
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
    } else if (/^0+$/.test(phone) || /^9{10}$/.test(phone)) {
      setPhoneError("Please enter a valid, non-dummy phone number.");
    } else {
      setPhoneError("");
      setOtpSent(true); // Show OTP input field
    }
  };

  // Move to the next step if OTP is provided
  const handleOtpSubmit = () => {
    if (otp.trim()) {
      setStep(step + 1);
    }
  };

  // Style definitions
  const popupStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 50,
    padding: "1.5rem",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    width: "90%",
    maxWidth: "400px",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 40,
  };

  const backButtonStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: "#f0f0f0",
    border: "none",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const closeButtonStyle = {
    backgroundColor: "#f05454",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "1rem",
  };

  const nextButtonStyle = {
    backgroundColor: "#3182ce",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "1rem",
  };

  return (
    <>
      <div style={overlayStyle} onClick={closePopup}></div>
      <div style={popupStyle}>
        {step > 1 && (
          <button style={backButtonStyle} onClick={() => setStep(step - 1)}>
            &larr;
          </button>
        )}
        <h2 className="text-center text-2xl mb-4">Book a Free Demo Session</h2>

        <div className="mb-4">
          {formData.course && (
            <p className="text-lg">Selected Course: {formData.course}</p>
          )}
          {formData.name && <p className="text-lg">Name: {formData.name}</p>}
          {formData.phone && (
            <p className="text-lg">Phone: {formData.phone}</p>
          )}
        </div>

        {step === 1 && (
          <div>
            <label className="block mb-2">Select Your Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            >
              <option value="">Select a course</option>
              <option value="IIT JEE">IIT JEE</option>
              <option value="NEET">NEET</option>
              <option value="IPMAT">IPMAT</option>
              <option value="SAT">SAT</option>
              <option value="12">Class 12</option>
              <option value="11">Class 11</option>
              <option value="10">Class 10</option>
              <option value="9">Class 9</option>
              <option value="8">Class 8</option>
              <option value="7">Class 7</option>
              <option value="6">Class 6</option>
            </select>
            <button style={nextButtonStyle} onClick={() => setStep(step + 1)}>
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="block mb-2">Enter Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Your Name"
            />
            <button style={nextButtonStyle} onClick={() => setStep(step + 1)}>
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <label className="block mb-2">Enter Your Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              placeholder="Phone Number"
            />
            {phoneError && (
              <p className="text-red-500 text-sm mb-2">{phoneError}</p>
            )}
            {!otpSent && (
              <button style={nextButtonStyle} onClick={sendOtp}>
                Send OTP
              </button>
            )}
            {otpSent && (
              <div>
                <label className="block mb-2">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  placeholder="Enter OTP"
                />
                <button style={nextButtonStyle} onClick={handleOtpSubmit}>
                  Submit OTP
                </button>
              </div>
            )}
          </div>
        )}

        {step === 4 && (
          <div>
            <p className="text-center text-green-600 font-bold">
              Your details have been successfully submitted!
            </p>
            <div className="flex justify-between mt-4">
              <button style={closeButtonStyle} onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PopupForm;
