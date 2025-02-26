import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThirdBanner from '../../Blogassets/nniit_banner.png';

const BannerCarousel = () => {
  return (
    <div
      id="bannerCarousel"
      className="carousel slide mx-auto rounded-sm"
      data-bs-ride="carousel"
      style={{ maxWidth: '100%' }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src={ThirdBanner} className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={ThirdBanner} className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={ThirdBanner} className="d-block w-100" alt="Third slide" />
        </div>
      </div>

      {/* Prev Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      {/* Custom Responsive CSS */}
      <style jsx>{`
        /* Default Desktop View */
        #bannerCarousel {
          padding: 10px; /* Keep desktop padding */
        }

        #bannerCarousel .carousel-item img {
          max-height: 180px;
          object-fit: cover;
        }

        /* Mobile View: Increase height and improve visuals */
        @media (max-width: 768px) {
          #bannerCarousel {
            padding: 10px; /* Add padding for spacing */
            margin: 10px; /* Add margin for better visual */
          }
          #bannerCarousel .carousel-item img {
            max-height: 500px; /* Increase height for better visibility */
            object-fit: cover; /* Ensure the image fits nicely */
            transform: scale(1.1); /* Slight zoom for better emphasis */
            border-radius: 8px; /* Smooth corners for better aesthetics */
            transition: transform 0.5s ease-in-out; /* Smooth zoom transition */
          }
        }

        /* Extra Small Devices */
        @media (max-width: 576px) {
          #bannerCarousel {
            padding: 5px; /* Smaller padding for very small screens */
            margin: 5px;
          }
          #bannerCarousel .carousel-item img {
            max-height: 600px; /* Further increase height for smaller devices */
            object-fit: cover; /* Maintain image aspect ratio */
            transform: scale(1.15); /* Slightly more zoom */
            border-radius: 10px; /* Rounded corners for a modern look */
          }
        }
      `}</style>
    </div>
  );
};

export default BannerCarousel;
