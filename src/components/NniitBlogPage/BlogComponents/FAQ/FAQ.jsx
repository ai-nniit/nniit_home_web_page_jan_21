// import React, { useState } from 'react';
// //import nniitLogo from '../../assets/faqs.svg';

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What is One to One Learning?",
//       answer:
//         "One to one learning is a method where a teacher interacts directly with a single student, enabling personalized learning and tailored feedback.",
//     },
//     {
//       question: "Are the classes offline or online?",
//       answer:
//         "Classes are online. The teacher and students both have to keep their video and audio on at all times. So it is the best version of online and offline classes.",
//     },
//     {
//       question: "Are the classes Live?",
//       answer:
//         "Yes, the classes are conducted live to ensure real-time interaction between teachers and students.",
//     },
//     {
//       question: "How is it different from other online live classes?",
//       answer:
//         "These classes focus on personalized interaction and tailored teaching techniques, unlike group-based online live classes.",
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center p-14 ml-20">
//       {/* Left: FAQ Section */}
//       <div className="lg:w-1/2 w-full max-w-xl">
//         <h1 className="text-4xl font-bold text-gray-800 mb-6">
//           Frequently Asked Questions
//         </h1>
//         <div className="space-y-4 text-1xl">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border-b border-gray-300 pb-4">
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <h2 className="text-lg font-medium text-gray-800">
//                   {faq.question}
//                 </h2>
//                 <button className="text-2xl text-gray-500">
//                   {activeIndex === index ? '-' : '+'}
//                 </button>
//               </div>
//               {activeIndex === index && (
//                 <div className="mt-3 text-gray-600">
//                   <p>{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right: Image Section */}
//       {/* <div className="lg:w-1/2 w-full flex justify-center mt-8 lg:mt-0">
//         <img
//           src={nniitLogo} // Replace with your image URL
//           alt="FAQ Illustration"
//           className="w-3/4 lg:w-full max-w-sm"
//         />
//       </div> */}
//     </div>
//   );
// };

// export default FAQ;


import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default first question open

  const faqs = [
    { question: "What are the JEE Main 2025 exam dates?", answer: "The JEE Main 2025 exam will be held in two sessions: Session 1 from January 22 to 31, 2025, and Session 2 from April 1 to 8, 2025, as announced by the National Testing Agency (NTA)." },
    { question: "What should I do if I face issues while filling out the JEE Main 2025 application form?", answer: "If you encounter any problems while submitting your JEE Main 2025 application, reach out to the support team for assistance." },
    { question: "How can I prepare for JEE Main 2025?", answer: "To prepare effectively for JEE Main 2025, utilise quality study materials, practise mock tests, and follow a structured study schedule." },
    { question: "When will the JEE Main 2025 updates be released?", answer: "JEE Main 2025 updates, including any changes in exam patterns or dates, are regularly posted on the NNIIT website. Keep checking for the latest information." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Close if the same is clicked, otherwise open
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#EAF0FD] lg:space-x-12 px-8 lg:px-14 py-14">
      {/* Left: FAQ Section */}
      <div className="lg:w-4/5 w-full max-w-4xl"> {/* Wider horizontally */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h2>
                <button className="text-2xl text-gray-500">
                  {activeIndex === index ? '-' : '+'}
                </button>
              </div>
              {activeIndex === index && (
                <div className="mt-3 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Image Section */}
      {/* <div className="lg:w-2/5 w-full flex justify-center mt-8 lg:mt-0">
        <img
          src="https://via.placeholder.com/400" // Replace with your image URL
          alt="FAQ Illustration"
          className="w-3/4 lg:w-full max-w-md"
        />
      </div> */}
    </div>
  );
};

export default FAQSection;
