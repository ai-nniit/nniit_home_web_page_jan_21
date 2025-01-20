// import React, { useState } from "react";
// import slide1 from '../../../assets/slide1.png';
// import slide2 from '../../../assets/slide2.jpg';
// import slide3 from '../../../assets/slide3.jpg';
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Bannerr = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slides = [slide1, slide2, slide3];

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative  w-screen h-screen flex-shrink items-center justify-center overflow-hidden bg-white-900 mb-0 gap-0 my-0 py-0">
//       {/* Slider Container */}
//       <div className="relative flex items-center justify-center w-full h-full">
//         {slides.map((slide, index) => {
//           const isCurrent = index === currentIndex;
//           const isPrevious =
//             index === (currentIndex - 1 + slides.length) % slides.length;
//           const isNext = index === (currentIndex + 1) % slides.length;

//           return (
//             <div 
//               key={index}
//               className="absolute transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: isCurrent
//                   ? "translateX(0%) scale(1)"
//                   : isPrevious
//                   ? "translateX(-50%) scale(0.8)"
//                   : isNext
//                   ? "translateX(50%) scale(0.8)"
//                   : "translateX(200%) scale(0.8)", // Off-screen
//                 opacity: isCurrent ? 1 : 0.8,
//                 zIndex: isCurrent ? 10 : 5,
//                 width: "70%",
//                 height: "50%",
//                 transition: "transform 0.5s ease, opacity 0.5s ease",
//               }}
//             >
//               <img
//                 src={slide}
//                 alt={`Slide ${index + 1}`}  // Corrected the alt text with backticks
//                 className="w-full h-full object-fit rounded-lg shadow-lg"
//               />
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-6 z-20">
//         <button
//           className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
//           onClick={handlePrevious}
//         >
//           <FaChevronLeft size={30} />
//         </button>
//         <button
//           className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
//           onClick={handleNext}
//         >
//           <FaChevronRight size={30} />
//         </button>
//       </div>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-2 h-2 rounded-full ${
//               currentIndex === index ? "bg-white" : "bg-gray-500"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Bannerr;


import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen, Users, Layout, Star, Check, X } from 'lucide-react';
import backgroundimage from '../../../assets/Netflixbackgroundimage.png'
import priya from '../../../assets/sub8.jpg';
import rahul from '../../../assets/sub9.jpg';
import Anita from '../../../assets/sub8.jpg';


const HeroSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});

  const testimonials = [
    {
      name: "Priya Sharma",
      achievement: "IIT Bombay - AIR 45",
      quote: "The personalized approach made all the difference in my preparation.",
      image: priya
    },
    {
      name: "Rahul Kumar",
      achievement: "IIT Delhi - AIR 78",
      quote: "One-on-one mentorship helped me focus on my weak areas effectively.",
      image: rahul
    },
    {
      name: "Anita Patel",
      achievement: "IIT Madras - AIR 120",
      quote: "The interactive learning tools simplified complex concepts perfectly.",
      image: Anita
    }
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "One-on-One Mentorship",
      description: "Personalized guidance from top educators"
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Customized Study Plans",
      description: "Tailored to individual strengths and weaknesses"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Interactive Learning Tools",
      description: "Engaging resources to simplify complex concepts"
    }
  ];

  const quizQuestions = [
    {
      question: "What is your current grade?",
      options: ["11th", "12th", "Dropper"]
    },
    {
      question: "How many hours can you dedicate daily?",
      options: ["2-4 hours", "4-6 hours", "6+ hours"]
    },
    {
      question: "Which subjects need most attention?",
      options: ["Physics", "Chemistry", "Mathematics"]
    },
    {
      question: "Preferred learning style?",
      options: ["Video Lessons", "Live Tutoring", "Both"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleQuizAnswer = (answer) => {
    setQuizAnswers({ ...quizAnswers, [quizStep]: answer });
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    }
  };

  const QuizResult = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Personalized Study Plan</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <p className="text-gray-700">Recommended daily study: {quizAnswers[1]}</p>
        </div>
        <div className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <p className="text-gray-700">Focus subject: {quizAnswers[2]}</p>
        </div>
        <div className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <p className="text-gray-700">Learning method: {quizAnswers[3]}</p>
        </div>
      </div>
      <button 
        className="mt-6 w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300"
        onClick={() => setShowQuiz(false)}
      >
        Start Your Personalized Journey
      </button>
    </div>
  );

  return (
    <div className="relative bg-gray-50 overflow-hidden"
    style={{
      backgroundImage: `url(${backgroundimage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    
    >
    {/* Main Hero Section */}
      <div className="relative pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-6">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Ace IIT/JEE with</span>
              <span className="block text-indigo-600">100% Personalized Learning!</span>
            </h1>
            <p className="mt-1 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transform your preparation with one-on-one mentorship, tailored study plans, and interactive learning designed just for you.
            </p>

            {/* Trust Badges */}
            <div className="mt-6 flex justify-center space-x-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="ml-2 text-sm text-white">Trusted by 10,000+ Students</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="ml-2 text-sm text-white">99% Student Satisfaction</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex justify-center space-x-4">
              <button 
                onClick={() => setShowQuiz(true)}
                className="inline-flex items-center px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Start Free Trial
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center px-10 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-10 bg-transparent py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 absolute inset-0 flex flex-col items-center ${
                    currentTestimonial === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-20 w-20 rounded-full"
                  />
                  <p className="mt-4 text-xl text-white text-center max-w-3xl">"{testimonial.quote}"</p>
                  <p className="mt-2 text-lg font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-white">{testimonial.achievement}</p>
                </div>
              ))}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600" />
                </button>
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Find Your Perfect Study Plan</h2>
              <button onClick={() => setShowQuiz(false)}>
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            
            {quizStep < quizQuestions.length ? (
              <>
                <p className="text-gray-600 mb-6">{quizQuestions[quizStep].question}</p>
                <div className="space-y-3">
                  {quizQuestions[quizStep].options.map((option, index) => (
                    <button
                      key={index}
                      className="w-full p-3 text-left border rounded-md hover:bg-indigo-50 transition-colors duration-300"
                      onClick={() => handleQuizAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <QuizResult />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;