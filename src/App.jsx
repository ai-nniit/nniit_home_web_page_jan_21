

import React from "react";
import Hero from "./components/Hero/Hero";
import InvestorLogoBar from "./components/Slidebar/Slidebar";
import ExamCarousel from "./components/BlogCard/BlogCard";
import EducationFeatures from "./components/EducationFeatures/EducationFeatures";
//import MedicalTestimonials from "./components/Testimonials/Testimonials";
import GoogleForIndia2024 from "./components/GoogleForIndia/GoogleForIndia";
import DelayedFormPopup from "./components/DelayedComponent/DelayedComponent";
import Footer from "./components/Footer/Footer";
import FreeDemoComponent from "./components/Carousel/Carousel";
import ExampleUsage1 from "./components/ImpactAtScale/ExampleUsage";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import StudyMaterialFooter from "./components/StudyMaterialFooter/StudyMaterialFooter";
import FAQ from "./components/FAQ/FAQ";
import TestimonialSlider from "./components/Testimonials/TestimonialSlider";
import DivComponent from "./components/Testimonials/DivComponent";



//import WebRTCCall from "./components/WebRTC/WebRTCcall";
//import StageShowcase from "./components/Animation/Animation";
//import LearnAnywhere from "./components/Helper/Helper";
//import Reviews from "./components/ReviewSection/ReviewSection";
//import TimelineSection from "./components/Greata/Greata";
// import Services from "./components/Services/Services";
//import Banner from "./components/Banner/Banner";
//import Subscribe from "./components/Subscribe/Subscribe";
//import Banner2 from "./components/Banner/Banner2";
//import TabletCourses from "./components/Carousel/Carousel";
//import Testimonials from "./components/Testimonials/Testimonials";
//import LearningPrograms from "./components/LearningPrograms/LearningPrograms";
//import ExampleUsage from "./components/GoogleForIndia/GoogleForIndia";
//import BlogCardGrid from "./components/BlogCard/BlogCard";



const App = () => {
  const testimonialData = [
    ['/path/to/image1.jpg', 'Vamsi', 'Student, NNIIT', 'Great experience!'],
    ['/path/to/image2.jpg', 'Vishal', 'Student, NNIIT', 'Highly recommended!'],
    ['/path/to/image2.jpg', 'Venu', 'Student, NNIIT', 'Highly recommended!'],
    ['/path/to/image2.jpg', 'Vikas', 'Student, NNIIT', 'Highly recommended!']
  ];
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <DelayedFormPopup/>
      <Hero />
      {/* <WebRTCCall/> */}
      {/* <Testimonials items={testimonialData}/> */}
      <InvestorLogoBar/>
      <br/> 
      <GoogleForIndia2024/>
      <FreeDemoComponent/>
      <ExamCarousel/>
      <EducationFeatures/>
      <ExampleUsage1/>
      <ReviewSection/>
      {/* <MedicalTestimonials/> */}
      <TestimonialSlider/>
      <br/>
      <DivComponent/>
      <FAQ/>
      {/* <LearnAnywhere/> */}
      <Footer />
      {/* <StageShowcase/> */}
      {/* <Subscribe /> */}
      {/* <Services /> */}
      {/* <Banner /> */}
      {/* <Banner2 /> */}
      {/* <TimelineSection/> */}
      {/* <LearningPrograms/> */}
      <StudyMaterialFooter/>
    </main>
  );
};

export default App;
