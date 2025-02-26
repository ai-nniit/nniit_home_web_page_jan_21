import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const QuizTest = () => {
    const questions = [
        {
            id: 1,
            category: "basic",
            question: "What is the atomic number of Carbon?",
            options: ["6", "8", "12", "14"],
            correctAnswer: "6"
        },
        {
            id: 2,
            category: "basic",
            question: "What is the SI unit of force?",
            options: ["Newton", "Pascal", "Joule", "Watt"],
            correctAnswer: "Newton"
        },
        {
            id: 3,
            category: "medium",
            question: "What is the acceleration due to gravity on Earth?",
            options: ["9.8 m/s²", "8.9 m/s²", "10 m/s²", "7.9 m/s²"],
            correctAnswer: "9.8 m/s²"
        },
        {
            id: 4,
            category: "medium",
            question: "Who proposed the law of gravitation?",
            options: ["Newton", "Einstein", "Galileo", "Kepler"],
            correctAnswer: "Newton"
        },
        {
            id: 5,
            category: "advance",
            question: "Which element is represented by the symbol O?",
            options: ["Oxygen", "Osmium", "Gold", "Oganesson"],
            correctAnswer: "Oxygen"
        }
    ];

    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("basic");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

    const categories = ["basic", "medium", "advance"];

    const startQuiz = () => {
        setIsQuizStarted(true);
    };

    const handleOptionSelect = (questionId, selectedOption) => {
        setUserAnswers((prev) => ({
            ...prev,
            [questionId]: selectedOption
        }));
    };

    const nextQuestion = () => {
        const categoryQuestions = questions.filter(q => q.category === currentCategory);
        if (currentQuestionIndex < categoryQuestions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            const nextCategoryIndex = categories.indexOf(currentCategory) + 1;
            if (nextCategoryIndex < categories.length) {
                setCurrentCategory(categories[nextCategoryIndex]);
                setCurrentQuestionIndex(0);
            } else {
                setIsQuizSubmitted(true);
            }
        }
    };

    const submitQuiz = () => {
        setIsQuizSubmitted(true);
    };

    const calculateInsights = () => {
        let correct = 0;
        let wrong = 0;
        let unattempted = 0;

        questions.forEach((question) => {
            if (!userAnswers[question.id]) {
                unattempted++;
            } else if (userAnswers[question.id] === question.correctAnswer) {
                correct++;
            } else {
                wrong++;
            }
        });

        const percentage = ((correct / questions.length) * 100).toFixed(2);

        return { correct, wrong, unattempted, percentage };
    };

    if (isQuizSubmitted) {
        const insights = calculateInsights();
        const data = {
            labels: ["Correct", "Wrong", "Unattempted"],
            datasets: [
                {
                    label: "Quiz Results",
                    data: [insights.correct, insights.wrong, insights.unattempted],
                    backgroundColor: ["#4caf50", "#f44336", "#9e9e9e"],
                },
            ],
        };

        return (
            <div className="p-6 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <div className="relative left-8">
                        <h2 className="text-xl font-bold mb-4">Quiz Insights</h2>
                        <ul className="text-base">
                            <li><strong>Correct Answers:</strong> {insights.correct}</li>
                            <li><strong>Wrong Answers:</strong> {insights.wrong}</li>
                            <li><strong>Unattempted Questions:</strong> {insights.unattempted}</li>
                            <li><strong>Percentage Scored:</strong> {insights.percentage}%</li>
                        </ul>
                        <p className="mt-4 text-red-600">
                            Areas to Improve: Revise the topics where you got questions wrong.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <Pie 
                        data={data} 
                        options={{
                            maintainAspectRatio: false
                        }} 
                        height={300} 
                        width={300} 
                    />
                </div>
            </div>
        );
    }

    const categoryQuestions = questions.filter(q => q.category === currentCategory);

    return (
        <div
        className="p-20 relative"
            // style={{
            // backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 90 90" fill="none"><rect width="100" height="100" fill="none"/><path d="M0 10H100M0 20H100M0 30H100M0 40H100M0 50H100M0 60H100M0 70H100M0 80H100M0 90H100M10 0V100M20 0V100M30 0V100M40 0V100M50 0V100M60 0V100M70 0V100M80 0V100M90 0V100" stroke="%23cccccc" stroke-width="0.099"/></svg>')`,
            // backgroundRepeat: "repeat",
            // }}
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="relative -top-7 inline-block"
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
          <p className="inline-block ml-2 -mt-4 font-serif text-xs text-gray-500">
            Curious to Take Test
            <br />
            <span className="font-bold  text-2xl text-black">Attempt Now</span>
          </p>
        </div>
      
        <button
          onClick={startQuiz}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
        >
          Start Quiz
        </button>
      
        {!isQuizStarted ? null : (
          <div className="quiz-container mt-8">
            <h2 className="text-xl font-bold mb-4">
              Category:{" "}
              <span className="text-green-600 capitalize">{currentCategory}</span>
            </h2>
            <h2 className="text-xl font-bold mb-4">
              Question {currentQuestionIndex + 1}:{" "}
              {categoryQuestions[currentQuestionIndex].question}
            </h2>
            <div className="options-container mb-4">
              {categoryQuestions[currentQuestionIndex].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    handleOptionSelect(
                      categoryQuestions[currentQuestionIndex].id,
                      option
                    )
                  }
                  className={`block w-full text-left px-4 py-2 mb-2 rounded border-2 border-black ${
                    userAnswers[categoryQuestions[currentQuestionIndex].id] === option
                      ? "bg-blue-200 border-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={nextQuestion}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              {currentQuestionIndex < categoryQuestions.length - 1 ||
              categories.indexOf(currentCategory) < categories.length - 1
                ? "Next Question"
                : "Submit Quiz"}
            </button>
          </div>
        )}
      </div>
      

    );
};

export default QuizTest;







