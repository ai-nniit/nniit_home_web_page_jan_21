import React, { useState } from 'react';
import nniitLogo from '../../../assets/faqs.svg';

const NeetFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Open the first FAQ by default

  const faqs = [
    {
      question: "What is NNIIT, and how does it help students preparing for NEET and other competitive exams?",
      answer: `NNIIT is a leading personalized learning platform specializing in one-on-one coaching for students preparing for NEET and other competitive exams. Our unique 1:1 learning model ensures that each student gets 100% personalized attention from an IIT faculty expert, along with flexible learning schedules and advanced performance tracking.

With NNIIT’s expert faculty and AI-driven monitoring system, students receive the best online education tailored to their specific needs, making their preparation more effective and result-oriented.`,
    },
    {
      question: "How does NNIIT’s one-on-one learning feature work?",
      answer: `Our one-on-one learning model at NNIIT means:
✅ 1 Teacher for 1 Student – No group classes, just focused learning.
✅ 100% Personalized Learning – Customized syllabus, study plan, and teaching pace.
✅ Flexible Timings – Students can schedule classes as per their convenience.
✅ Expert IIT Faculty – Learn directly from top educators with vast experience in NEET & other exams.
✅ Advanced Monitoring & Guidance – AI-powered progress tracking & real-time performance analysis.

This personalized approach helps students grasp concepts faster and improve their NEET rank efficiently.`,
    },
    {
      question: "What are the different NEET preparation programs offered by NNIIT?",
      answer: `NNIIT provides structured classroom programs for students from Grade 9 to 12+ (Repeaters) to ensure strong conceptual learning:
📌 Grade 9 – 4-Year NEET Classroom Program
📌 Grade 10 – 3-Year NEET Classroom Program
📌 Grade 11 – 2-Year NEET Classroom Program
📌 Grade 12 – 1-Year NEET Classroom Program
📌 12+ (Repeaters) – 1-Year Intensive NEET Crash Course

Each program is designed to build a strong foundation, improve problem-solving skills, and ensure exam success with expert guidance.`,
    },
    {
      question: "What study materials does NNIIT provide for NEET preparation?",
      answer: `NNIIT ensures students get comprehensive study materials, including:
📖 Personalized Learning Materials tailored to the student’s needs.
📖 NNIIT Daily Practice (NDP) for post-session revision.
📖 Tatva Books with 12,000+ NEET-focused questions for all difficulty levels.
📖 10,000+ Assignments & 5000+ Video Solutions to reinforce concepts.
📖 5000+ Advanced Question Sets to sharpen problem-solving skills.

These materials, combined with NNIIT’s one-on-one coaching, ensure the highest level of preparation for NEET and board exams.`,
    },
    {
      question: "How do NNIIT’s test series and mock exams help students in competitive exam preparation?",
      answer: `NNIIT conducts regular mock tests and all-India test series to evaluate student performance effectively:
📝 Bi-weekly Tests – Conducted every 14 days.
📝 5 Part Tests – Covering key sections of NEET.
📝 3 Phase Tests – To track progressive milestones.
📝 5 Full-Length Mock Tests – Simulating real exam conditions.
📝 All-India Test Series – Compete with 100,000+ students nationwide.

These tests enhance confidence and provide students with a real exam experience before the actual exam.`,
    },
];



  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-7 ml-4 mr-4">
      {/* Left: FAQ Section */}
      <div className="lg:w-1/2 w-full max-w-xl">
        <h1 className="text-xs font-sf font-bold text-gray-800 mb-8 text-center lg:text-left sm:text-base">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6 text-sm sm:text-base">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-6 transition-all"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-lg font-medium text-gray-800">{faq.question}</h2>
                <button className="text-2xl text-gray-500">
                  {activeIndex === index ? '-' : '+'}
                </button>
              </div>
              <div
                className={`mt-3 text-gray-600 transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {activeIndex === index && (
                  <p dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, "<br />") }} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Right: Image Section (Visible only on desktop) */}
      <div className="lg:w-1/2 w-full justify-center mt-8 lg:mt-0 hidden lg:block">
        <img
          src={nniitLogo}
          alt="FAQ Illustration"
          className="w-3/4 lg:w-full max-w-sm ml-24"
        />
      </div>
    </div>
  );
  
};

export default NeetFAQ;
