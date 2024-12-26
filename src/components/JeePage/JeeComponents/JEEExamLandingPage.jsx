import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import some from '../../../assets/some.png';

function JEEExamLandingPage() {
  const [activeModal, setActiveModal] = useState(null);

  const modalContent = {
    'What is One to One Learning': {
      title: 'What is One to One Learning',
      paragraphs: [
        "One to one learning is where there is only one student learning from the teacher. So that the teacher is totally focused on the student, can easily track progress and pay individual attention at all times. And the student can also feel free to learn at a pace suitable to them and ask their doubts freely."
      ]
    },
    'Are the classes offline or online': {
      title: 'Are the classes offline or online',
      paragraphs: [
        "Classes are online. And the teacher and students both have to keep their video and audio on all the times. So it is the best version of online and offline classes."
      ]
    },
    'Are the classes Live': {
      title: 'Are the classes Live',
      paragraphs: [
        "The classes are live and according to a decided schedule which is convenient for the student. This is not at all a recorded class, but totally live with the teacher teaching the student just as a normal home tuition."
      ]
    },
    'frequently-asked-questions': {
      title: 'Frequently Asked Questions about IIT-JEE',
      paragraphs: [
        "Q: How many times can I appear for JEE Main?",
        "A: You can attempt JEE Main in multiple sessions conducted in a year, with a maximum of three consecutive attempts.",
        "Q: What is the exam pattern for JEE Main?",
        "A: JEE Main is a computer-based test with multiple-choice and numerical answer type questions in Physics, Chemistry, and Mathematics.",
        "Q: How is JEE Advanced different from JEE Main?",
        "A: JEE Advanced is more challenging, tests deeper conceptual understanding, and is the only route to get into IITs.",
        "Q: What is the registration fees for JEE Main?",
        "A: Registration fees vary by category and are typically around ₹650-₹1250 for general category students.",
        "Q: How should I prepare for IIT-JEE?",
        "A: Focus on NCERT textbooks, solve previous years' papers, take mock tests, and maintain a consistent study schedule."
      ]
    }
  };

  const handleModalToggle = (modalKey) => {
    setActiveModal(activeModal === modalKey ? null : modalKey);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 bg-[#F5F5F5] relative pl-[78px]">
      <div className="flex items-start justify-between space-x-8">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-[#333333]">
            All about JEE (Mains and Advanced) Exam
          </h1>
          <p className="text-lg text-[#666666] mt-2">
            Prepare for the Highly Competitive Entrance Exam with Unacademy
          </p>
          <div className="space-y-4 mt-8">
            {[ 
              { text: 'What is One to One Learning', key: 'What is One to One Learning' },
              { text: 'Are the classes offline or online', key: 'Are the classes offline or online' },
              { text: 'Are the classes Live', key: 'Are the classes Live' },
              { text: 'Frequently Asked Questions', key: 'frequently-asked-questions' },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={() => handleModalToggle(item.key)}
                className="flex items-center justify-between text-[#007bff] hover:text-[#0056b3] transition-colors"
              >
                <span>{item.text}</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="w-1/4">
          <img
            src={some}
            alt="Students studying"
            className="w-32 h-40 object-cover rounded-lg"
          />
        </div>
      </div>

      {activeModal && (
        <div className="fixed top-0 right-0 h-full w-1/2 bg-black/50 z-50 flex items-center">
          <div className="bg-white rounded-lg shadow-md w-full h-full overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#333333]">
                {modalContent[activeModal].title}
              </h2>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              {modalContent[activeModal].paragraphs.map((paragraph, index) => (
                <p key={index} className="text-[#666666]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JEEExamLandingPage;
