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
import VideoCard from "./components/VideoCard/VideoCard";
import ScrollLockedFeatureSection from "./components/ScrollCards/ScrollCards";
import LearnersBadge from "./components/GoogleForIndia/LearnBadge";
import ResultsDashboard from "./components/ResultDashboard/ResultDashboard";
import ResultsSection from "./components/ResultDashboard/ResultDashboard";
import DesktopFeatureSection from "./components/ScrollCards/ScrollCards1";
import SlideContent from "./components/Testimonials1/Testimonials1";
import ClaimYourSpot from "./components/ClaimYourSpot/ClaimYourSpot";
import CompanyShowcase from "./components/Testimonials1/Testimonials2";
import CompanyShowcase1 from "./components/Testimonials1/Testimonials2";
import InspiredResults from "./components/Rankers/InspiredResults";

//import IITJEEPage from "./pages/IITJEEPage"; // Import the IIT JEE page component

const HomePage = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
    <DelayedFormPopup />
    <Hero />
    <InvestorLogoBar />
    {/* GoogleForIndia2024 is visible only on desktop */}
    <br/>
    <br/>
    <br/>
    <br/>
      <GoogleForIndia2024 />
      <div className=" px-6 justify-center block md:hidden">
      <LearnersBadge />
    </div>
    {/* VideoCard is visible only on mobile */}
    <br/>
    <br/>
    <div className="hidden md:block">
    <FreeDemoComponent />
    </div>
    <div className="block md:hidden">
      <ClaimYourSpot/>
    </div>
    
    <div className="hidden md:block">
    <ExamCarousel />
     </div>
     <div className="hidden md:block">
      <InspiredResults/>
     </div>
    <div className="block md:hidden">
    <VideoCard/>
    </div>
    {/* <EducationFeatures /> */}
    {/* <div className="block md:hidden">
    <ScrollLockedFeatureSection/>
    </div> */}
    {/* <div className="hidden sm:block"> */}
      <DesktopFeatureSection/>
    {/* </div> */}
    {/* <ExampleUsage1 /> */}
    <ResultsSection/>
    <ReviewSection />
    {/* <TestimonialSlider /> */}
    <div className="block md:hidden">
    <SlideContent/>
    </div>
    <div className="hidden sm:block">
      <CompanyShowcase1/>
    </div>
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