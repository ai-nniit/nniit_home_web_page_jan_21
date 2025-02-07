import React, { useState } from 'react';
import img1 from '../../../assets/vipkid/image_1.png';
import img2 from '../../../assets/vipkid/image_22.png';
import img3 from '../../../assets/vipkid/image_3.png';
import img4 from '../../../assets/vipkid/image_4.png';
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    img1,
    img2, 
    img3,
    img4
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    e.target.setAttribute('data-start', touchStartX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchStartX = e.target.getAttribute('data-start');
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100">
  {/* Heading */}
  <h2 className="text-center text-3xl sm:text-xl font-semibold mt-4">
    NNIIT's Curriculum System
  </h2>

  {/* Image Carousel */}
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((image, index) => (
      <div key={index} className="w-full flex-shrink-0">
        <img
          src={image}
          alt={`Slide ${index + 1}`}
          className="w-full h-[500px] object-cover mx-auto"
          style={{ maxWidth: '700px' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />
      </div>
    ))}
  </div>

  {/* Left Arrow */}
  <button
    onClick={prevSlide}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
  >
    &#10094;
  </button>

  {/* Right Arrow */}
  <button
    onClick={nextSlide}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
  >
    &#10095;
  </button>

  {/* Dots */}
  <div className="flex justify-center mt-4 space-x-2">
    {images.map((_, index) => (
      <span
        key={index}
        className={`h-2 w-2 rounded-full ${
          index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
        }`}
      ></span>
    ))}
  </div>
</div>

  );
};

export default Carousel;
