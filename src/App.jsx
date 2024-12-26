import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Import Navbar for consistent navigation
import Hero from "./components/Hero/Hero";
import InvestorLogoBar from "./components/Slidebar/Slidebar";
import ExamCarousel from "./components/BlogCard/BlogCard";
import EducationFeatures from "./components/EducationFeatures/EducationFeatures";
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
import IITJEEPage from "./components/JeePage/IITJEEPage";
//import IITJEEPage from "./pages/IITJEEPage"; // Import the IIT JEE page component

const HomePage = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <DelayedFormPopup />
      <Hero />
      <InvestorLogoBar />
      <br />
      <GoogleForIndia2024 />
      <FreeDemoComponent />
      <ExamCarousel />
      <EducationFeatures />
      <ExampleUsage1 />
      <ReviewSection />
      <TestimonialSlider />
      <br />
      <DivComponent />
      <FAQ />
      <Footer />
      <StudyMaterialFooter />
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include Navbar for consistent navigation */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/courses/jee" element={<IITJEEPage/>} /> 
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;




{/* <WebRTCCall/> */}
{/* <Testimonials items={testimonialData}/> */}
{/* <Subscribe /> */}
{/* <Services /> */}
{/* <Banner /> */}{/* <Banner2 /> */}{/* <TimelineSection/> */}
{/* <LearningPrograms/> */}
{/* <StageShowcase/> */}
{/* <LearnAnywhere/> */}
{/* <MedicalTestimonials/> */}
           


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
//import MedicalTestimonials from "./components/Testimonials/Testimonials";
