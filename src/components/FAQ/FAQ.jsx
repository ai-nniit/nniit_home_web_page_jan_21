// import React, { useState } from 'react';
// import nniitLogo from '../../assets/faqs.svg';

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
//     <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-14 ml-20">
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
//       <div className="lg:w-1/2 w-full flex justify-center mt-8 lg:mt-0">
//         <img
//           src={nniitLogo} // Replace with your image URL
//           alt="FAQ Illustration"
//           className="w-3/4 lg:w-full max-w-sm"
//         />
//       </div>
//     </div>
//   );
// };

// export default FAQ;


import React, { useState } from 'react';
import nniitLogo from '../../assets/faqs.svg';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Open the first FAQ by default

  const faqs = [
    {
      question: "What is One to One Learning?",
      answer:
        "One to one learning is a method where a teacher interacts directly with a single student, enabling personalized learning and tailored feedback.",
    },
    {
      question: "Are the classes offline or online?",
      answer:
        "Classes are online. The teacher and students both have to keep their video and audio on at all times. So it is the best version of online and offline classes.",
    },
    {
      question: "Are the classes Live?",
      answer:
        "Yes, the classes are conducted live to ensure real-time interaction between teachers and students.",
    },
    {
      question: "How is it different from other online live classes?",
      answer:
        "These classes focus on personalized interaction and tailored teaching techniques, unlike group-based online live classes.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-7 ml-4 mr-4">
      {/* Left: FAQ Section */}
      <div className="lg:w-1/2 w-full max-w-xl">
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-8 text-center lg:text-left sm:text-base">
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
                {activeIndex === index && <p>{faq.answer}</p>}
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
          className="w-3/4 lg:w-full max-w-sm"
        />
      </div>
    </div>
  );
};

export default FAQ;
