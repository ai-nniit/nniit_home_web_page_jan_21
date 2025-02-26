import React, { useState } from 'react';
import Form from '../Form/Form';

const ExamBlog = () => {
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  const handleClick = () => {
    setShowForm(true); // Show the form
  };

  const handleClose = () => {
    setShowForm(false); // Close the form
  };

  return (
    <div className="bg-[#10194E] px-4 text-white font-sans">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-b border-gray-600">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-4">
          <img src="logo.png" alt="NNIIT" className="h-8 mb-2 sm:mb-0" />
          <div className="text-center sm:text-left">
            <p className="text-sm">Connect with us</p>
            <p className="text-sm">📞 1800-572-9877 | ✉️ hello@nniit.com</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-gray-300">📷</a>
          <a href="#" className="hover:text-gray-300">🔗</a>
          <a href="#" className="hover:text-gray-300">🎥</a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="py-4">
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <li><a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">Colleges</a></li>
          <li><a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">Exams</a></li>
          <li><a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">Courses</a></li>
          <li><a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">Careers</a></li>
          <li><a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">Updates</a></li>
          <li><a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">More</a></li>
        </ul>
      </nav>

      {/* Blog Content */}
      <div className="py-6">
        <p className="text-sm text-gray-400">Home / Engineering Exams / JEE Main Exam</p>
        <h1 className="text-2xl font-bold mt-2">
          JEE Main 2025 Exam - Session 1 Date (Jan 22-31), Admit Card, Pattern (Revised), Syllabus, Question Papers
        </h1>
        <p className="text-sm text-gray-400 mt-1">Updated by Vishnu Teja on 03 Dec, 2024 16:45</p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
          <button
            className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 mb-4 sm:mb-0"
            onClick={handleClick}
          >
            Request a callback
          </button>
          <Form show={showForm} onClose={handleClose} />
          <button
            className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
            onClick={handleClick}
          >
            Ask Us
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-4 bg-gray-800 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm mb-4 sm:mb-0">80K+ Students Read this Blog in past 6 months</p>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <p className="flex items-center justify-center text-sm mb-4 sm:mb-0">
            <span className="text-lg mr-1">👁️</span> 6.1M Views
          </p>
          <p className="flex items-center justify-center text-sm mb-4 sm:mb-0">
            <span className="text-lg mr-1">💬</span> 26.3K Comments
          </p>
          <button className="text-sm hover:underline">🔗 Share</button>
        </div>
      </div>
    </div>
  );
};

export default ExamBlog;
