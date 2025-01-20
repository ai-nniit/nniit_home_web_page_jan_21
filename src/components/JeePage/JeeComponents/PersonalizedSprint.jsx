// import React, { useState } from 'react';
// import {
//   BookOpen,
//   Brain,
//   Calculator,
//   ChevronRight,
//   Beaker,
//   Rocket,
//   Timer,
//   Zap,
//   Target,
//   Clock,
//   BookCheck,
//   ArrowRight
// } from 'lucide-react';

// // Base sprint templates data
// const baseSprintTemplates = {
//   algebra: {
//     topics: [
//       'Linear Equations',
//       'Quadratic Equations',
//       'Polynomials',
//       'Factorization',
//       'Algebraic Expressions'
//     ],
//     difficulties: {
//       beginner: 'Basic concepts and simple problems',
//       intermediate: 'Mixed application problems',
//       advanced: 'Complex word problems and proofs'
//     },
//     timeSlots: {
//       '30min': '2 problems',
//       '1hour': '4-5 problems',
//       '2hours': '8-10 problems'
//     }
//   },
//   physics: {
//     topics: [
//       'Mechanics',
//       'Thermodynamics',
//       'Electromagnetism',
//       'Optics',
//       'Modern Physics'
//     ],
//     difficulties: {
//       beginner: 'Concept understanding and basic numericals',
//       intermediate: 'Multiple concept problems',
//       advanced: 'Complex numerical problems'
//     },
//     timeSlots: {
//       '30min': '1-2 problems',
//       '1hour': '3-4 problems',
//       '2hours': '6-8 problems'
//     }
//   },
//   chemistry: {
//     topics: [
//       'Organic Chemistry',
//       'Inorganic Chemistry',
//       'Physical Chemistry',
//       'Chemical Bonding',
//       'Reaction Mechanisms'
//     ],
//     difficulties: {
//       beginner: 'Basic reactions and nomenclature',
//       intermediate: 'Reaction mechanisms and properties',
//       advanced: 'Multi-step synthesis and analysis'
//     },
//     timeSlots: {
//       '30min': '2-3 concepts',
//       '1hour': '1 chapter review',
//       '2hours': 'Multiple topics practice'
//     }
//   }
// };

// function personalizedSprint() {
//   const [step, setStep] = useState('initial');
//   const [userInsights, setUserInsights] = useState({
//     studyGoal: '',
//     timeAvailable: '',
//     preferredTime: '',
//     currentLevel: '',
//     weakAreas: [],
//     learningStyle: ''
//   });
//   const [generatedSprint, setGeneratedSprint] = useState(null);

//   const generatePersonalizedSprint = (insights) => {
//     const subject = insights.weakAreas[0] || 'algebra';
//     const template = baseSprintTemplates[subject];
//     const timePerSession = insights.timeAvailable === 'limited' ? '30min' : '1hour';
//     const difficulty = insights.currentLevel;
    
//     const selectedTopics = template.topics
//       .slice(0, insights.weakAreas.length + 2)
//       .map(topic => ({
//         title: `Day ${Math.floor(Math.random() * 3) + 1}`,
//         description: `${topic} - ${template.difficulties[difficulty]}`
//       }));

//     const contentStyle = insights.learningStyle === 'visual' 
//       ? 'with visual aids and diagrams'
//       : 'with practice problems';

//     return {
//       id: `${subject}-${Date.now()}`,
//       title: `Personalized ${subject.charAt(0).toUpperCase() + subject.slice(1)} Sprint`,
//       description: `Custom ${timePerSession} sessions ${contentStyle}, focused on your weak areas`,
//       icon: subject === 'physics' ? <Zap className="w-8 h-8" /> :
//             subject === 'chemistry' ? <Beaker className="w-8 h-8" /> :
//             <Calculator className="w-8 h-8" />,
//       days: selectedTopics
//     };
//   };

//   const handleInsightSubmit = (e) => {
//     e.preventDefault();
//     const personalizedSprint = generatePersonalizedSprint(userInsights);
//     setGeneratedSprint(personalizedSprint);
//     setStep('sprint');
//   };

//   const handleInsightChange = (field, value) => {
//     setUserInsights(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   return (
//     <div className="h-screen overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-100">
//       <div className="h-full flex flex-col">
//         {/* Hero Section - Compact */}
//         <div className="py-6 text-center">
//           <h1 className="text-3xl font-bold text-gray-900">
//             Experience Your <span className="text-indigo-600">Personalized Sprint</span>
//           </h1>
//           <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto">
//             Let's create a learning sprint tailored specifically to your needs.
//           </p>
//         </div>

//         {step === 'initial' && (
//           <div className="flex-1 flex items-center justify-center">
//             <button
//               onClick={() => setStep('questionnaire')}
//               className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold
//                        hover:bg-indigo-700 transition-colors flex items-center space-x-2"
//             >
//               <span>Start Personalizing Your Sprint</span>
//               <ArrowRight className="w-5 h-5" />
//             </button>
//           </div>
//         )}

//         {step === 'questionnaire' && (
//           <div className="flex-1 overflow-auto px-4">
//             <form onSubmit={handleInsightSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
//               <div className="space-y-6">
//                 {/* Study Goal */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     What's your primary study goal?
//                   </label>
//                   <select
//                     value={userInsights.studyGoal}
//                     onChange={(e) => handleInsightChange('studyGoal', e.target.value)}
//                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     required
//                   >
//                     <option value="">Select a goal</option>
//                     <option value="exam">Prepare for upcoming exam</option>
//                     <option value="concept">Master specific concepts</option>
//                     <option value="practice">Regular practice</option>
//                   </select>
//                 </div>

//                 {/* Time Available */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     How much time can you dedicate daily?
//                   </label>
//                   <select
//                     value={userInsights.timeAvailable}
//                     onChange={(e) => handleInsightChange('timeAvailable', e.target.value)}
//                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     required
//                   >
//                     <option value="">Select time availability</option>
//                     <option value="limited">30 minutes</option>
//                     <option value="moderate">1 hour</option>
//                     <option value="flexible">2+ hours</option>
//                   </select>
//                 </div>

//                 {/* Current Level */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     What's your current level?
//                   </label>
//                   <select
//                     value={userInsights.currentLevel}
//                     onChange={(e) => handleInsightChange('currentLevel', e.target.value)}
//                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     required
//                   >
//                     <option value="">Select your level</option>
//                     <option value="beginner">Beginner</option>
//                     <option value="intermediate">Intermediate</option>
//                     <option value="advanced">Advanced</option>
//                   </select>
//                 </div>

//                 {/* Weak Areas */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Select your weak areas (Multiple)
//                   </label>
//                   <div className="grid grid-cols-2 gap-2">
//                     {['algebra', 'physics', 'chemistry'].map((area) => (
//                       <label key={area} className="flex items-center space-x-2">
//                         <input
//                           type="checkbox"
//                           checked={userInsights.weakAreas.includes(area)}
//                           onChange={(e) => {
//                             const newAreas = e.target.checked
//                               ? [...userInsights.weakAreas, area]
//                               : userInsights.weakAreas.filter(a => a !== area);
//                             handleInsightChange('weakAreas', newAreas);
//                           }}
//                           className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                         />
//                         <span className="text-sm text-gray-700 capitalize">{area}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Learning Style */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     What's your preferred learning style?
//                   </label>
//                   <select
//                     value={userInsights.learningStyle}
//                     onChange={(e) => handleInsightChange('learningStyle', e.target.value)}
//                     className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     required
//                   >
//                     <option value="">Select learning style</option>
//                     <option value="visual">Visual learner</option>
//                     <option value="practical">Practice-oriented</option>
//                     <option value="theoretical">Theory-focused</option>
//                   </select>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 
//                            transition-colors flex items-center justify-center space-x-2"
//                 >
//                   <span>Generate My Sprint</span>
//                   <Rocket className="w-4 h-4" />
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}

//         {step === 'sprint' && generatedSprint && (
//           <div className="flex-1 overflow-auto px-4">
//             <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="bg-indigo-500 rounded-full p-3 text-white">
//                   {generatedSprint.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900">{generatedSprint.title}</h3>
//                   <p className="text-gray-500">{generatedSprint.description}</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {generatedSprint.days.map((day, index) => (
//                   <div key={index} className="bg-indigo-50 p-4 rounded-lg">
//                     <div className="flex items-center space-x-2 mb-2">
//                       <Timer className="w-4 h-4 text-indigo-600" />
//                       <h5 className="font-medium text-gray-900">{day.title}</h5>
//                     </div>
//                     <p className="text-sm text-gray-600">{day.description}</p>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-6 flex justify-between items-center">
//                 <button
//                   onClick={() => setStep('questionnaire')}
//                   className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
//                 >
//                   Regenerate Sprint
//                 </button>
//                 <button className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 
//                                  transition-colors flex items-center space-x-2">
//                   <span>Start Your Sprint</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Call to Action - Compact */}
//         <div className="py-4 text-center bg-white bg-opacity-50">
//           <p className="text-sm text-gray-600">Want more personalized learning?</p>
//           <button className="mt-2 inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
//             Sign Up for Full Access <Rocket className="ml-2 w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default personalizedSprint;



import React, { useState } from 'react';
import {
  BookOpen,
  Brain,
  Calculator,
  ChevronRight,
  Beaker,
  Rocket,
  Timer,
  Zap,
  Target,
  Clock,
  BookCheck,
  ArrowRight,
  GraduationCap,
  Clock3,
  Sparkles,
  Target as TargetIcon,
  Lightbulb,
  ChevronLeft
} from 'lucide-react';

// Base sprint templates data
const baseSprintTemplates = {
  algebra: {
    topics: [
      'Linear Equations',
      'Quadratic Equations',
      'Polynomials',
      'Factorization',
      'Algebraic Expressions'
    ],
    difficulties: {
      beginner: 'Basic concepts and simple problems',
      intermediate: 'Mixed application problems',
      advanced: 'Complex word problems and proofs'
    },
    timeSlots: {
      '30min': '2 problems',
      '1hour': '4-5 problems',
      '2hours': '8-10 problems'
    }
  },
  physics: {
    topics: [
      'Mechanics',
      'Thermodynamics',
      'Electromagnetism',
      'Optics',
      'Modern Physics'
    ],
    difficulties: {
      beginner: 'Concept understanding and basic numericals',
      intermediate: 'Multiple concept problems',
      advanced: 'Complex numerical problems'
    },
    timeSlots: {
      '30min': '1-2 problems',
      '1hour': '3-4 problems',
      '2hours': '6-8 problems'
    }
  },
  chemistry: {
    topics: [
      'Organic Chemistry',
      'Inorganic Chemistry',
      'Physical Chemistry',
      'Chemical Bonding',
      'Reaction Mechanisms'
    ],
    difficulties: {
      beginner: 'Basic reactions and nomenclature',
      intermediate: 'Reaction mechanisms and properties',
      advanced: 'Multi-step synthesis and analysis'
    },
    timeSlots: {
      '30min': '2-3 concepts',
      '1hour': '1 chapter review',
      '2hours': 'Multiple topics practice'
    }
  }
};

function personalizedSprint() {
  const [step, setStep] = useState('initial');
  const [questionStep, setQuestionStep] = useState(0);
  const [userInsights, setUserInsights] = useState({
    studyGoal: '',
    timeAvailable: '',
    preferredTime: '',
    currentLevel: '',
    weakAreas: [],
    learningStyle: ''
  });
  const [generatedSprint, setGeneratedSprint] = useState(null);

  const questions = [
    {
      title: "What's your goal?",
      subtitle: "Let's understand what you want to achieve",
      icon: <Target className="w-12 h-12 text-indigo-600" />,
      options: [
        { value: 'exam', label: 'Ace upcoming exam', icon: <GraduationCap className="w-6 h-6" /> },
        { value: 'concept', label: 'Master concepts', icon: <Brain className="w-6 h-6" /> },
        { value: 'practice', label: 'Regular practice', icon: <Target className="w-6 h-6" /> }
      ],
      field: 'studyGoal'
    },
    {
      title: "How much time can you dedicate?",
      subtitle: "We'll optimize your learning schedule",
      icon: <Clock3 className="w-12 h-12 text-indigo-600" />,
      options: [
        { value: 'limited', label: '30 minutes', icon: <Timer className="w-6 h-6" /> },
        { value: 'moderate', label: '1 hour', icon: <Clock className="w-6 h-6" /> },
        { value: 'flexible', label: '2+ hours', icon: <Target className="w-6 h-6" /> }
      ],
      field: 'timeAvailable'
    },
    {
      title: "What's your current level?",
      subtitle: "We'll tailor the content to your expertise",
      icon: <Sparkles className="w-12 h-12 text-indigo-600" />,
      options: [
        { value: 'beginner', label: 'Beginner', icon: <BookOpen className="w-6 h-6" /> },
        { value: 'intermediate', label: 'Intermediate', icon: <BookCheck className="w-6 h-6" /> },
        { value: 'advanced', label: 'Advanced', icon: <Rocket className="w-6 h-6" /> }
      ],
      field: 'currentLevel'
    },
    {
      title: "Select your focus areas",
      subtitle: "Choose the subjects you want to improve",
      icon: <TargetIcon className="w-12 h-12 text-indigo-600" />,
      multiSelect: true,
      options: [
        { value: 'algebra', label: 'Algebra', icon: <Calculator className="w-6 h-6" /> },
        { value: 'physics', label: 'Physics', icon: <Zap className="w-6 h-6" /> },
        { value: 'chemistry', label: 'Chemistry', icon: <Beaker className="w-6 h-6" /> }
      ],
      field: 'weakAreas'
    },
    {
      title: "How do you learn best?",
      subtitle: "We'll adapt our teaching style to you",
      icon: <Lightbulb className="w-12 h-12 text-indigo-600" />,
      options: [
        { value: 'visual', label: 'Visual Learning', icon: <BookOpen className="w-6 h-6" /> },
        { value: 'practical', label: 'Practice-Oriented', icon: <Target className="w-6 h-6" /> },
        { value: 'theoretical', label: 'Theory-Focused', icon: <Brain className="w-6 h-6" /> }
      ],
      field: 'learningStyle'
    }
  ];

  const generatePersonalizedSprint = (insights) => {
    const subject = insights.weakAreas[0] || 'algebra';
    const template = baseSprintTemplates[subject];
    const timePerSession = insights.timeAvailable === 'limited' ? '30min' : '1hour';
    const difficulty = insights.currentLevel;
    
    const selectedTopics = template.topics
      .slice(0, insights.weakAreas.length + 2)
      .map(topic => ({
        title: `Day ${Math.floor(Math.random() * 3) + 1}`,
        description: `${topic} - ${template.difficulties[difficulty]}`
      }));

    const contentStyle = insights.learningStyle === 'visual' 
      ? 'with visual aids and diagrams'
      : 'with practice problems';

    return {
      id: `${subject}-${Date.now()}`,
      title: `Personalized ${subject.charAt(0).toUpperCase() + subject.slice(1)} Sprint`,
      description: `Custom ${timePerSession} sessions ${contentStyle}, focused on your weak areas`,
      icon: subject === 'physics' ? <Zap className="w-8 h-8" /> :
            subject === 'chemistry' ? <Beaker className="w-8 h-8" /> :
            <Calculator className="w-8 h-8" />,
      days: selectedTopics
    };
  };

  const handleOptionSelect = (field, value) => {
    if (field === 'weakAreas') {
      setUserInsights(prev => ({
        ...prev,
        weakAreas: prev.weakAreas.includes(value)
          ? prev.weakAreas.filter(area => area !== value)
          : [...prev.weakAreas, value]
      }));
    } else {
      setUserInsights(prev => ({ ...prev, [field]: value }));
      if (questionStep < questions.length - 1) {
        setTimeout(() => setQuestionStep(prev => prev + 1), 300);
      }
    }
  };

  const handleComplete = () => {
    const personalizedSprint = generatePersonalizedSprint(userInsights);
    setGeneratedSprint(personalizedSprint);
    setStep('sprint');
  };

  const currentQuestion = questions[questionStep];
  const progress = ((questionStep + 1) / questions.length) * 100;

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="h-full flex flex-col">
        {/* Hero Section - Compact */}
        <div className="py-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Experience Your <span className="text-indigo-600">Personalized Sprint</span>
          </h1>
          <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto">
            Let's create a learning sprint tailored specifically to your needs.
          </p>
        </div>

        {step === 'initial' && (
          <div className="flex-1 flex items-center justify-center">
            <button
              onClick={() => setStep('questionnaire')}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold
                       hover:bg-indigo-700 flex items-center space-x-2
                       transform hover:scale-105 transition-all duration-300"
            >
              <span>Start Personalizing Your Sprint</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {step === 'questionnaire' && (
          <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto w-full">
            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Question Card */}
            <div className="w-full bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500">
              <div className="flex flex-col items-center mb-8">
                {currentQuestion.icon}
                <h2 className="text-2xl font-bold text-gray-900 mt-4">{currentQuestion.title}</h2>
                <p className="text-gray-500 mt-2">{currentQuestion.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleOptionSelect(currentQuestion.field, option.value)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300
                      ${currentQuestion.multiSelect
                        ? userInsights.weakAreas.includes(option.value)
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300'
                        : userInsights[currentQuestion.field] === option.value
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300'
                      }
                      transform hover:scale-105 hover:shadow-md`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                        {option.icon}
                      </div>
                      <span className="font-medium text-gray-900">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setQuestionStep(prev => Math.max(0, prev - 1))}
                  className={`flex items-center text-gray-600 hover:text-indigo-600 transition-colors
                    ${questionStep === 0 ? 'invisible' : ''}`}
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>
                {questionStep === questions.length - 1 && (
                  <button
                    onClick={handleComplete}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700
                             transition-colors flex items-center space-x-2"
                  >
                    <span>Generate Sprint</span>
                    <Rocket className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 'sprint' && generatedSprint && (
          <div className="flex-1 overflow-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-indigo-500 rounded-full p-3 text-white">
                  {generatedSprint.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{generatedSprint.title}</h3>
                  <p className="text-gray-500">{generatedSprint.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {generatedSprint.days.map((day, index) => (
                  <div key={index} className="bg-indigo-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Timer className="w-4 h-4 text-indigo-600" />
                      <h5 className="font-medium text-gray-900">{day.title}</h5>
                    </div>
                    <p className="text-sm text-gray-600">{day.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={() => setStep('questionnaire')}
                  className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                  Regenerate Sprint
                </button>
                <button className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 
                                 transition-colors flex items-center space-x-2">
                  <span>Start Your Sprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action - Compact */}
	<div className="py-4 text-center bg-white bg-opacity-50">
          <p className="text-sm text-gray-600">Want more personalized learning?</p>
          <button className="mt-2 inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Sign Up for Full Access <Rocket className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default personalizedSprint;