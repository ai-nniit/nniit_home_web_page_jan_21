// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Brain, ChevronRight } from 'lucide-react';
// import { QuestionCard } from './components/QuestionCard';
// import { AnalyticsView } from './components/AnalyticsView';
// import { questions } from './data/questions';

// function App() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [showAnalytics, setShowAnalytics] = useState(false);

//   const handleAnswer = (option) => {
//     const newAnswers = [
//       ...answers,
//       {
//         questionId: questions[currentQuestionIndex].id,
//         selectedOption: option,
//       },
//     ];
//     setAnswers(newAnswers);

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     } else {
//       setShowAnalytics(true);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-10 px-3">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-4"
//         >
//           <div className="flex items-center justify-center mb-2">
//             <Brain className="w-12 h-12 text-blue-600" />
//           </div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">
//             Personalized Learning Sprint
//           </h1>
//           <p className="text-lg text-gray-600">
//             Answer a few questions to get your personalized learning analysis
//           </p>
//         </motion.div>

//         <AnimatePresence mode="wait">
//           {!showAnalytics ? (
//             <motion.div
//               key="question"
//               className="flex flex-col items-center justify-center"
//             >
//               <QuestionCard
//                 question={questions[currentQuestionIndex]}
//                 onAnswer={handleAnswer}
//                 currentIndex={currentQuestionIndex}
//               />
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="mt-8 flex items-center text-gray-500"
//               >
//                 <ChevronRight className="w-5 h-5 mr-2" />
//                 <span>Select an option to continue</span>
//               </motion.div>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="analytics"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <AnalyticsView answers={answers} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// export default App;





import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, ChevronRight } from 'lucide-react';
import { QuestionCard } from './components/QuestionCard';
import { AnalyticsView } from './components/AnalyticsView';
import { questions } from './data/questions';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const handleAnswer = (option) => {
    const newAnswers = [
      ...answers,
      {
        questionId: questions[currentQuestionIndex].id,
        selectedOption: option,
      },
    ];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowAnalytics(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-10 px-3 flex justify-start">
      {!showAnalytics ? (
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Static Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="flex flex-col justify-center -mt-12 p-6"
          >
            <div className="flex items-center  mb-4">
              {/* <Brain className="w-12 h-12 text-blue-600" />*/}
               {/* Header */}
        <header className="mb-4 px-4">
          <div className="flex items-center space-x-1 mb-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="relative -top-1.2"
            >
              <path
                d="M24 11.9914C19.2924 12.4191 16.5877 12.8125 14.9272 14.1126C12.9757 15.6351 12.5136 18.4234 12 24C11.4693 18.2181 10.99 15.4469 8.85021 13.9587C7.18973 12.7954 4.50214 12.4191 0 12.0086C4.69044 11.5809 7.41227 11.1875 9.05564 9.90449C11.0243 8.36493 11.4864 5.59373 12 0C12.4793 5.14897 12.9073 7.90306 14.4993 9.49394C16.0913 11.0848 18.8645 11.5296 24 11.9914Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="12"
                  y1="0"
                  x2="12"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#39B6D8" />
                  <stop offset="0.5" stopColor="#F7D344" />
                  <stop offset="1" stopColor="#E38330" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-[10px] text-gray-400 mt-1 font-serif font-light">
              DISCOVER NEW PERSPECTIVES
            </p>
          </div>
          <h1 className="text-4xl font-bold font-sf text-gray-800 mb-2 ">
              Personalized Learning Sprint
            </h1>
        </header>
            </div>
            
            <p className="text-lg font-sf text-gray-600 mb-4">
              Answer a few questions to get a personalized learning analysis tailored just for you.
            </p>
            <ul className="list-disc pl-5 text-gray-700 font-sf">
              <li>Customized study plan based on your responses</li>
              <li>Identify learning strengths & weaknesses</li>
              <li>Boost efficiency with AI-driven insights</li>
            </ul>
          </motion.div>

          {/* Right Section - Questions & Options */}
          <AnimatePresence mode="wait">
            <motion.div 
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col items-center justify-center p-6"
            >
              <QuestionCard
                question={questions[currentQuestionIndex]}
                onAnswer={handleAnswer}
                currentIndex={currentQuestionIndex}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 flex items-center text-gray-500"
              >
                <ChevronRight className="w-5 h-5 mr-2" />
                <span>Select an option to continue</span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          key="analytics"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full p-6"
        >
          <AnalyticsView answers={answers} />
        </motion.div>
      )}
    </div>
  );
}

export default App;
