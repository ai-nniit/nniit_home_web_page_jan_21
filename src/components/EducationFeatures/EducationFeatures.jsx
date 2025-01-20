// import React from 'react';
// import DivComponent from '../Testimonials/DivComponent';

// const FeatureCard = ({ icon, title, description, color }) => (
//   <div className="group flex items-start gap-2 p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all cursor-pointer max-w-3xl mx-auto">
//     <br/>
//     <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
//       {icon}
//     </div>
//     <div className="flex-1">
//       <div className="flex items-center justify-between">
//         <h3 className="font-semibold text-gray-900">{title}</h3>
//         <svg
//           className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           aria-hidden="true"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </div>
//       <p className="text-sm text-gray-600 mt-1">{description}</p>
//     </div>
//   </div>
// );

// const EducationFeatures = () => {
//   const features = [
//     {
//       icon: (
//         <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-.553.894L16 18l-4 2v-8L8 14l-4-2v-8l4-2 4 2v8l4-2v-8l4 2v8z" />
//         </svg>
//       ),
//       title: "Live classes",
//       description: "Watch free online coaching classes by our best educators.",
//       color: "bg-red-500",
//     },
//     {
//         icon: (
//           <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//           </svg>
//         ),
//         title: "Top educators",
//         description: "Learn from some of the best educators in the country.",
//         color: "bg-blue-500",
//       },
//       {
//         icon: (
//           <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//           </svg>
//         ),
//         title: "Batches",
//         description: "Curated batches to simplify the learning journey for your goal.",
//         color: "bg-yellow-500",
//       },
//       {
//         icon: (
//           <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//           </svg>
//         ),
//         title: "Courses",
//         description: "Learn every subject in detail from your favourite educator.",
//         color: "bg-purple-500",
//       },
//       {
//         icon: (
//           <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//           </svg>
//         ),
//         title: "Playlist",
//         description: "High quality lecture videos for the entire syllabus for all your subjects.",
//         color: "bg-teal-500",
//       },
//       {
//         icon: (
//           <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
//           </svg>
//         ),
//         title: "Practice",
//         description: "Strengthen your exam preparation with adaptive practice tests.",
//         color: "bg-indigo-500",
//       },
//       {
//         icon: (
//           <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//           </svg>
//         ),
//         title: "Test series",
//         description: "Evaluate and boost your exam preparation with test series.",
//         color: "bg-sky-500",
//       },
//       {
//         icon: (
//           <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         ),
//         title: "Doubts & solutions",
//         description: "Get quick and detailed solutions to clarify your doubts.",
//         color: "bg-green-500",
//       },
  
//   ];

//   return (
  //   <div className="custom-container mx-auto px-4 sm:px-6 lg:px-8">
  // <div className="max-w-6xl p-8 mx-auto">
    // <div className="mb-12 text-center">
    //   <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
    //     Features We Provide
    //   </h2>
    //   <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    //     Comprehensive tools and resources designed to support your learning journey
    //   </p>
    // </div>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//       {features.map((feature) => (
//         <FeatureCard
//           key={feature.title}
//           icon={feature.icon}
//           title={feature.title}
//           description={feature.description}
//           color={feature.color}
//         />
//       ))}
//     </div>
//     <br />
//     <DivComponent />
//   </div>
// </div>
//   );
// };

// export default EducationFeatures;







import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DivComponent from '../Testimonials/DivComponent';

const FeatureCard = ({ icon, title, description, color }) => (
  <div className="group flex items-start gap-2 p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all cursor-pointer max-w-2xl mx-auto">
    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <svg
          className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const MobileFeatureCard = ({ icon, title, color }) => (
  <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 transition-all cursor-pointer">
    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
      {icon}
    </div>
    <h3 className="font-semibold text-gray-900">{title}</h3>
  </div>
);

const EducationFeatures = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-.553.894L16 18l-4 2v-8L8 14l-4-2v-8l4-2 4 2v8l4-2v-8l4 2v8z" />
        </svg>
      ),
      title: "Live classes",
      description: "Watch free online coaching classes by our best educators.",
      color: "bg-red-500",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Top educators",
      description: "Learn from some of the best educators in the country.",
      color: "bg-blue-500",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Batches",
      description: "Curated batches to simplify the learning journey for your goal.",
      color: "bg-yellow-500",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Courses",
      description: "Learn every subject in detail from your favourite educator.",
      color: "bg-purple-500",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Playlist",
      description: "High quality lecture videos for the entire syllabus for all your subjects.",
      color: "bg-teal-500",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Test series",
      description: "Evaluate and boost your exam preparation with test series.",
      color: "bg-sky-500",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "FAQs",
      description: "Answers to all your questions and doubts related to the course.",
      color: "bg-green-500",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "FAQs",
      description: "Answers to all your questions and doubts related to the course.",
      color: "bg-green-500",
    },
  ];

  return (
    <>
      <div className="mb-6 text-center mt-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Features We Provide
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Comprehensive tools and resources designed to support your learning journey
        </p>
      </div>
      <div>
        {isMobile ? (
          <div className="grid grid-cols-2 gap-2 mt-6 p-4">
            {features.map((feature, idx) => (
              <MobileFeatureCard key={idx} {...feature} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 mt-6 max-w-4xl mx-auto">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default EducationFeatures;
