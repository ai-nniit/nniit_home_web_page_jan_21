import React, { useState } from "react";
import { Star, Calendar, Book, Phone, CheckCircle, PlayCircle,Heart } from "lucide-react";
import instructorImage from '../../../../assets/instructorImage.jpg';
import instructorImage2 from "../../../../assets/instructorImage2.jpg";
import instructorImage3 from "../../../../assets/instructorImage3.jpg";
import instructorImage4 from "../../../../assets/instructorImage4.jpg";
import lrn1 from "../../../../assets/lrn1.jpeg";
import lrn2 from "../../../../assets/lrn2.jpeg";
import lrn3 from "../../../../assets/lrn3.jpeg";


const JEEPromoSection = () => {
  // State for selected class
  const [selectedClass, setSelectedClass] = useState("Class 11");

  // Data for each class
  const classData = {
    "Class 11": {
      title: "Class 11 JEE Preparation",
      description:
        "Comprehensive courses covering Physics, Chemistry, and Mathematics for JEE Main and Advanced.",
      features: [
        "Full syllabus completion for Class 11 topics",
        "Live and recorded classes for foundational learning",
        "Top educators guiding you through basics and advanced topics",
      ],
      image: instructorImage,
    },
    "Class 12": {
      title: "Class 12 JEE Preparation",
      description:
        "Advanced preparation for JEE with in-depth coverage of Class 12 topics and practice tests.",
      features: [
        "In-depth coverage of Class 12 concepts",
        "Problem-solving practice with live examples",
        "Focused preparation for JEE Main and Advanced",
      ],
      image: instructorImage2,
    },
    "Dropper": {
      title: "Dropper Batch for JEE",
      description:
        "Specialized courses for droppers focusing on improving problem-solving skills and completing the syllabus.",
      features: [
        "Focused coaching for dropper students",
        "Advanced topic mastery and problem-solving",
        "Complete syllabus completion within the year",
      ],
      image: instructorImage3,
    },
    "Customized Learning": {
      title: "Customized Learning for JEE",
      description:
        "Flexible learning paths tailored to individual needs, focusing on weak areas and revision.",
      features: [
        "Personalized course plans and test series",
        "Targeted doubt-clearing sessions",
        "Flexible learning schedules",
      ],
      image: instructorImage4,
    },
  };

  return (
    <div className="w-full bg-[#E6F2EC] py-6 style={{ transform: 'scale(0.8)', transformOrigin: 'top left' }}">
      <div className="max-w-6xl mx-auto p-6 font-sans-serif">
        {/* Main Heading */}
        <h1 className="text-3xl text-gray-800 font-semibold mb-6">
          Crack IIT-JEE with our full syllabus batches
        </h1>

        {/* Features Section */}
        <div className="flex justify-start space-x-8 mb-8">
          <div className="flex items-center gap-3 text-gray-700" style={{ fontStyle: "normal", fontSize: "13px", lineHeight: "12px", fontWeight: 400 }}>
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span>Best for full syllabus preparation</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 " style={{ fontStyle: "normal", fontSize: "13px", lineHeight: "12px", fontWeight: 400 }}>
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span>Live & recorded online classes</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700" style={{ fontStyle: "normal", fontSize: "13px", lineHeight: "12px", fontWeight: 400 }}>
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span>Curated by best educators</span>
          </div>
        </div>

        {/* Learners and Class Options */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          {/* Class Buttons */}
          <div className="flex flex-wrap gap-4">
  {["Class 11", "Class 12", "Dropper", "Customized Learning"].map(
    (label, i) => (
      <button
        key={i}
        className={`btn ${
          selectedClass === label
            ? "bg-emerald-500 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
        onClick={() => setSelectedClass(label)}
      >
        {label}
      </button>
    )
  )}
</div>

          {/* Learners */}
          <div className="flex items-center gap-2 text-gray-600 ml-auto">
            <div className="flex -space-x-2">
              <img
                src={lrn1}
                alt="Learner 1"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src={lrn2}
                alt="Learner 2"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src={lrn3}
                alt="Learner 3"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <span className="text-sm">15 Lakh learners explored a batch today</span>
          </div>
        </div>

        {/* Recommended Batch Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image Section */}
            <div className="md:w-3/5 relative flex flex-col justify-between">
              <img
                src={classData[selectedClass].image}
                alt={`Instructor for ${selectedClass}`}
                className="w-full h-78 object-cover rounded-lg"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full" />
              </button>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm">Hinglish</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm">Full syllabus</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-3/5 flex flex-col justify-between">
              {/* Recommended Badge */}
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Recommended
                </div>
                {/* Ratings */}
                <div className="text-purple-600 text-sm">Top rated • Exceptional educators</div>
              </div>

              {/* Title */}
              <h3 className="text-xl text-gray-800 font-medium mb-4">
                {classData[selectedClass].title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                {classData[selectedClass].description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {classData[selectedClass].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <Book className="w-5 h-5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="flex items-center justify-between ">
                <div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">Starts in 27 days</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                    View batch details
                  </button>
                  <button className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors">
                    <Phone className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JEEPromoSection;
