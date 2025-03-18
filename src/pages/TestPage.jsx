import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { submitTestResult } from "../api/auth";
import { questionsData } from "./questions";

const TestPage = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedSubjects.length > 0) {
      const filteredQuestions = selectedSubjects.flatMap(subject => questionsData[subject] || []);
      setQuestions(filteredQuestions);
      setShowPopup(false); // Hide popup after selection
    }
  }, [selectedSubjects]);

  const handleSubjectSelection = (subject) => {
    setSelectedSubjects(prev =>
      prev.includes(subject) ? prev.filter(s => s !== subject) : [...prev, subject]
    );
  };

  const handleStartTest = () => {
    if (selectedSubjects.length === 0) {
      alert("Please select at least one subject.");
    } else {
      setShowPopup(false);
    }
  };

  const handleOptionChange = (index, selectedOption) => {
    setAnswers({ ...answers, [index]: selectedOption });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        score += 1;
      }
    });
    return score;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem("token");
  //   if (!token) return alert("Please log in first");
  
  //   const calculatedScore = calculateScore();
  //   setScore(calculatedScore); // Display score after submission
  
  //   try {
  //     await submitTestResult(token, { testName: "JEE Level Quiz", score: calculatedScore });
  
  //     console.log("Test submitted successfully! Navigating to dashboard...");
  //     alert(`Test submitted successfully! Your score: ${calculatedScore}`);
  
  //     // Redirect to dashboard after 2 seconds
  //     setTimeout(() => {
  //       console.log("Navigating to /dashboard...");
  //       navigate("/dashboard");
  //     }, 2000);
  //   } catch (err) {
  //     console.error("Error submitting test:", err);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("Please log in first");
  
    const calculatedScore = calculateScore();
    setScore(calculatedScore); 
  
    try {
      await submitTestResult(token, { testName: "JEE Level Quiz", score: calculatedScore });
      {score !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-bold">Your Score new: {score}</h3>
        </div>
      )}
      alert(`Test submitted successfully! Your score: ${calculatedScore}`);
  
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      console.error("Error submitting test:", err);
    }
  };
  
  

  return (
    <div className="mt-20">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Select Subjects</h2>
            <div className="flex flex-col">
              {Object.keys(questionsData).map((subject) => (
                <label key={subject} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    value={subject}
                    checked={selectedSubjects.includes(subject)}
                    onChange={() => handleSubjectSelection(subject)}
                  />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
            <button
              onClick={handleStartTest}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Start Test
            </button>
          </div>
        </div>
      )}

      {!showPopup && (
        <>
          <h2 className="text-xl font-bold mb-4">Take a Test</h2>
          <form onSubmit={handleSubmit}>
            {questions.length === 0 ? (
              <p>No questions available. Please select a subject.</p>
            ) : (
              questions.map((q, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold">{q.question}</p>
                  {q.options.map((option) => (
                    <label key={option} className="block">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        onChange={() => handleOptionChange(index, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ))
            )}
            <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
              Submit Test
            </button>
          </form>
          {score !== null && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-bold">Your Score: {score}</h3>
            </div>
          )}
         
        </>
      )}
    </div>
  );
};

export default TestPage;
