import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Blob from "../../assets/blob.svg"; // Add correct path to Blob image

const DelayedFormPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    dropdown: '',
    otp: '',
    state: ''
  });

  const indianStates = [
    "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", 
    "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", 
    "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", 
    "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative animate-fadeIn">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Welcome!</h2>
        <p className="mb-4 text-gray-600 text-center">Please take a moment to fill out this form.</p>

        <div className="flex justify-center items-center">
          <motion.div
            variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
            initial="initial"
            animate="animate"
            className="w-full max-w-[500px] md:max-w-[400px]"
          >
            <form onSubmit={handleSubmit} className="space-y-2 w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full p-2.5 border rounded-lg"
                required
              />
              <div className="flex gap-2">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  className="flex-grow p-2.5 border rounded-lg"
                  required
                />
                <button type="button" className="bg-secondary text-white px-4 rounded-lg">
                  Send OTP
                </button>
              </div>
              <div className="flex space-x-4">
                <input
                  type="text" // Change to text from otp
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  placeholder="Enter OTP Here"
                  className="w-1/2 p-2.5 border rounded-lg"
                  required
                />
                <select
                  name="dropdown"
                  value={formData.dropdown}
                  onChange={handleChange}
                  className="w-1/2 p-2.5 px-4 border rounded-lg"
                  required
                >
                  <option value="" disabled>Select an option</option>
                  <option value="iit/jee">IIT/JEE</option>
                  <option value="neet">NEET</option>
                  <option value="sat">SAT</option>
                  <option value="ipmat">IPMAT</option>
                  <option value="class 12">CLASS 12</option>
                  <option value="class 11">CLASS 11</option>
                  <option value="class 10">CLASS 10</option>
                  <option value="class 9">CLASS 9</option>
                  <option value="class 8">CLASS 8</option>
                  <option value="class 7">CLASS 7</option>
                  <option value="class 6">CLASS 6</option>
                </select>
              </div>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-lg"
                required
              >
                <option value="">Select Your State</option>
                {indianStates.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
              <button type="submit" className="primary-btn flex items-center gap-2 group w-full justify-center">
                Submit
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </form>
          </motion.div>

          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt="Blob Image"
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[-1] hidden md:block opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default DelayedFormPopup;
