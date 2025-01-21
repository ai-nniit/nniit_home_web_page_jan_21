import React from 'react';
import Bannerr from './JeeComponents/Bannerr';
import DelayedFormPopup from '../DelayedComponent/DelayedComponent';
import FreeDemoComponent from '../Carousel/Carousel';
import EducationFeatures from '../EducationFeatures/EducationFeatures';
import Footer from '../Footer/Footer';
import ScholarshipBanner from './JeeComponents/ScholarshipBanner';
import VideoClassesShowcase from './JeeComponents/VideoClassesShowcase';
import InteractiveEducationalPlatform from './JeeComponents/InteractiveEducationalPlatform';
import ReferralBanner from './JeeComponents/ReferralBanner';
import JEEExamLandingPage from './JeeComponents/JEEExamLandingPage';
import JEEPromoSection from './JeeComponents/JeePromoSection/JEEPromoSection';
import IITSection from './JeeComponents/IIT_Mentors';
import HeroSection from './JeeComponents/Bannerr';
import GoogleForIndia2024 from '../../components/GoogleForIndia/GoogleForIndia'
import LearnersBadge from '../../components/GoogleForIndia/LearnBadge'
import ScrollLockedFeatureSection from '../ScrollCards/ScrollCards';
import PersonalizedSprint from './JeeComponents/PersonalizedSprint';
import Carousel from './JeeComponents/CustomCirriculum';
import StudyMaterialFooter from '../StudyMaterialFooter/StudyMaterialFooter'
import FAQ from '../FAQ/FAQ';
import App from './JeeComponents/PersonalizedSprint/PersonalizedApp';
import CompetitorAnalysis from './JeeComponents/Topper_Section';
import ConceptMap from './JeeComponents/ConceptMap/ConceptMap';

const IITJEEPage = () => {
  return (
    <div className="iit-jee-page">
      <section id="get-started" className="my-0">
        <HeroSection/>
        <DelayedFormPopup/> 
      </section>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          JEE Concept Map
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <ConceptMap/>
        </div>
      </div>
    
      <section id="features" className="my-0">
      {/* <FreeDemoComponent/> */}
      <App/>
      </section>
      
      <section id="batch" className="my-0">
      <GoogleForIndia2024 />
      <div className=" px-6 justify-center block md:hidden">
      <LearnersBadge />
    </div>
      </section>
      <div className="block md:hidden">
    <ScrollLockedFeatureSection/>
   
    </div>
    <IITSection/>
    {/* <PersonalizedSprint/> */}
    <Carousel/>
      <section id="educators" className="my-0">
      <ScholarshipBanner/>
        <EducationFeatures/>
        <VideoClassesShowcase/>
        <br/>
        {/* <InteractiveEducationalPlatform/> */}
      </section>
      
      <section id="success-stories" className="md:-mt-24">
        <ReferralBanner/>
      </section>
      <CompetitorAnalysis/>
      <section id="about-exam" className="my-0">
      <FAQ />
      </section>
      <Footer/>
      <StudyMaterialFooter />
    </div>
  );
};

export default IITJEEPage;
