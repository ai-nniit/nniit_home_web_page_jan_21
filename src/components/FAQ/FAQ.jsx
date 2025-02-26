import React, { useState } from 'react';
import nniitLogo from '../../assets/faqs.svg';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Open the first FAQ by default

  const faqs = [
    {
      question: "What makes NNIIT's JEE & NEET preparation unique?",
      answer: `At NNIIT, we provide one-on-one learning with 100% personalization to students preparing for JEE, NEET, and other competitive exams. 
  Unlike traditional coaching centers, each student at NNIIT is paired with a dedicated teacher, ensuring a personalized study plan, 
  flexible learning schedules, and real-time progress tracking. 
  Our students learn online with expert guidance from top IIT faculty, ensuring the best preparation experience.`,
    },
    {
      question: "How does NNIIT's one-on-one learning benefit students preparing for JEE & NEET?",
      answer: `NNIIT’s one-on-one learning model ensures that: 
  ✔ 100% personalized attention—One student, one teacher, no distractions 
  ✔ Flexible schedules—Students can choose convenient time slots 
  ✔ Expert IIT faculty guidance—Learn from the best mentors 
  ✔ Advanced monitoring & performance tracking—For continuous improvement 
  ✔ Focused doubt resolution—Instant support through video-based & live doubt sessions 
  With NNIIT, students get a customized study plan that adapts to their strengths and weaknesses, unlike batch-based coaching.`,
    },
    {
      question: "What JEE & NEET preparation programs does NNIIT offer?",
      answer: `We offer structured, one-on-one coaching programs for different grade levels: 
  Grade 9: 4-year classroom program, 
  Grade 10: 3-year classroom program, 
  Grade 11: 2-year classroom program, 
  Grade 12: 1-year classroom program, 
  Grade 12+ (Repeater): 1-year intensive program. 
  Each program includes full syllabus coverage, targeted practice, and individualized mentoring to maximize success.`,
    },
    {
      question: "How does NNIIT’s online JEE & NEET preparation work?",
      answer: `Our one-on-one online learning model provides: 
  ✅ Live interactive sessions with IIT faculty, 
  ✅ Personalized mentorship from dedicated subject experts, 
  ✅ Daily practice material & assignments, 
  ✅ Regular mock tests with All-India ranking, 
  ✅ AI-powered progress tracking & feedback reports. 
  Students at NNIIT get the best of technology and personal mentorship to ensure faster learning and better results.`,
    },
    {
      question: "What kind of study materials does NNIIT provide for JEE & NEET?",
      answer: `At NNIIT, we offer highly curated study materials, including: 
  📘 Tatva books with 13,000+ questions, categorized by difficulty, 
  📖 300+ assignments (online & offline), 
  🎥 5000+ video solutions for in-depth concept clarity, 
  🔢 12,000+ assignment questions for extensive practice, 
  🏆 8,000+ advanced questions for sprint preparation. 
  Our study materials are designed for maximum conceptual clarity and exam readiness.`,
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

export default FAQ;
