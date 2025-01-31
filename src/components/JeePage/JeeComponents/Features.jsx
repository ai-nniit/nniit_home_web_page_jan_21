import React from "react";

const Features = () => {
  const features = [
    {
      title: "Live classes",
      description: "Watch free online coaching classes by our best educators.",
      icon: "📹", // Placeholder for icons
    },
    {
      title: "Top educators",
      description: "Learn from some of the best educators in the country.",
      icon: "👨‍🏫",
    },
    {
      title: "Batches",
      description: "Curated batches to simplify the learning journey for your goal.",
      icon: "🗂️",
    },
    {
      title: "Courses",
      description: "Learn every subject in detail from your favorite educator.",
      icon: "📘",
    },
    {
      title: "Playlist",
      description: "High-quality lecture videos for the entire syllabus.",
      icon: "🎧",
    },
    {
      title: "Practice",
      description: "Strengthen your exam preparation with adaptive practice tests.",
      icon: "📝",
    },
    {
      title: "Test series",
      description: "Evaluate and boost your preparation with test series.",
      icon: "📊",
    },
    {
      title: "Doubts & solutions",
      description: "Get quick and detailed solutions to clarify your doubts.",
      icon: "💬",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Crack IIT JEE with Unacademy</h1>
        <p className="text-gray-600">
          Over <span className="text-green-500 font-semibold">10 crore</span> learners trust us for online and offline coaching
        </p>
      </div>
      <div className="flex justify-center gap-4 mb-8">
        <button className="bg-gray-100 text-gray-800 py-2 px-4 rounded-lg shadow-sm hover:bg-gray-200">
          Try learning for free
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600">
          View subscription plans
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-md hover:border-gray-400 transition-all duration-300"
          >
            <div className="text-3xl mb-2">{feature.icon}</div>
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
