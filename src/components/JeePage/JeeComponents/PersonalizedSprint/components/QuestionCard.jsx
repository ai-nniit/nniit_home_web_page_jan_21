import { motion } from 'framer-motion';

export const QuestionCard = ({ question, onAnswer, currentIndex }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-4"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{question.text}</h3>
      <div className="space-y-4">
        {question.options.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAnswer(option)}
            className="w-full text-left p-2 rounded-lg border-2 border-gray-200 hover:border-blue-500 
                     hover:bg-blue-50 transition-all duration-200 ease-in-out"
          >
            <span className="text-lg text-gray-700">{option.text}</span>
          </motion.button>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Question {currentIndex + 1} of 9
      </div>
    </motion.div>
  );
};
