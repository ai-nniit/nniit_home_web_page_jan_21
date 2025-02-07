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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-10 px-3 flex justify-center">
      {!showAnalytics ? (
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Static Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="flex flex-col justify-center -mt-12 p-6"
          >
            <div className="flex items-center  mb-4">
              <Brain className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold font-sf text-gray-800 mb-2">
              Personalized Learning Sprint
            </h1>
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
