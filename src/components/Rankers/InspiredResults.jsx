import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import student from '../../assets/Students.png';
import allImage from '../../assets/all.png';
import iitjeeImage from '../../assets/iitjee.png';
import neetImage from '../../assets/neet.png';
import tenthBoardImage from '../../assets/class10.png';
import twelfthBoardImage from '../../assets/class12.png';
import ntseImage from '../../assets/ntseranking.png';
import olympiadImage from '../../assets/olympiad.png';

const categories = ["All", "IIT JEE", "NEET", "10th Board", "12th Board", "NTSE", "Olympiad"];
const slides = [allImage, iitjeeImage, neetImage, tenthBoardImage, twelfthBoardImage, ntseImage, olympiadImage];

export default function InspiredResults() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <section className="relative bg-white p-3 mr-28">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold font-sf text-gray-900 mr-96">
          Inspired students. <span className="text-orange-500 font-sf">Inspired results</span>
        </h1>
        <p className="text-gray-600 mt-2 mr-56 text-bold font-sf">Our results reflect the passion, hard work, and efforts of our students and teachers.</p>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center gap-1 mt-1 mr-64 flex-wrap">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-3 py-1 text-sm font-sf border rounded-lg text-gray-700 hover:bg-gray-100 ${currentIndex === index ? 'bg-gray-200' : ''}`}
            onClick={() => goToSlide(index)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Floating Right Image */}
      <div className="absolute right-5 mr-32 -top-1">
        <img src={student} alt="Students" className="w-56" />
      </div>

      {/* Carousel Section */}
      <div className="relative mt-11 max-w-4xl mx-auto overflow-hidden">
        <div className="flex items-center justify-between">
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                >
                <ChevronLeft size={24} />
            </button>

          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
