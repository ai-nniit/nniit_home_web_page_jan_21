import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import FirstBanner from '../../assets/vedantu_banner.png';
// import SecondBanner from '../../assets/vedantu_banner1.png';
import ThirdBanner from '../../assets/nniit_banner.png';

const BannerCarousel = () => {
  return (
    <div id="bannerCarousel" className="carousel slide p-10 mx-auto rounded-sm" data-bs-ride="carousel" style={{ maxWidth: '90%' }}>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img 
        src={ThirdBanner} 
        className="d-block w-100" 
        alt="First slide" 
        style={{ maxHeight: '115px', objectFit: 'cover' }} // Increased size
      />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img 
        src={ThirdBanner} 
        className="d-block w-100" 
        alt="Second slide" 
        style={{ maxHeight: '115px', objectFit: 'cover' }} // Increased size
      />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img 
        src={ThirdBanner}
        className="d-block w-100" 
        alt="Third slide" 
        style={{ maxHeight: '115px', objectFit: 'cover' }} // Increased size
      />
    </div>
  </div>
  <button 
    className="carousel-control-prev" 
    type="button" 
    data-bs-target="#bannerCarousel" 
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button 
    className="carousel-control-next" 
    type="button" 
    data-bs-target="#bannerCarousel" 
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  );
};

export default BannerCarousel;