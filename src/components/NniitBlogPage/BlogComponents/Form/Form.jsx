// PopupForm.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const indianStates = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

const PopupForm = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  if (!show) return null; // Don't render if not shown

  return (
    <div className="fixed inset-0 z-50 bg-gray-700 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-500"
        >
          &times;
        </button>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-2 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
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
              name="email"
              value={formData.email}
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
              type="otp"
              name="otp"
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
              <option value="" disabled>
                Select an option
              </option>
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
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
          <button type="submit" className="primary-btn flex items-center gap-2 group w-full justify-center">
            Submit
            <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default PopupForm;
