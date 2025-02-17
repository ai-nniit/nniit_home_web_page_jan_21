import Bannerr from './JeeComponents/Bannerr';
import FreeDemoComponent from '../Carousel/Carousel';
import InteractiveEducationalPlatform from './JeeComponents/InteractiveEducationalPlatform';
import JEEExamLandingPage from './JeeComponents/JEEExamLandingPage';
import JEEPromoSection from './JeeComponents/JeePromoSection/JEEPromoSection';
import PersonalizedSprint from './JeeComponents/PersonalizedSprint';
import ConceptMap from './JeeComponents/ConceptMap/ConceptMap';
import VIPKidMethod from './JeeComponents/StudentLearningJourney';
import TimelineComponent from './JeeComponents/StudentLearningJourney';
import StudentLearningJourney from './JeeComponents/StudentLearningJourney';
import NetworkGraph from './JeeComponents/ConceptMap/ConceptMap';
import Features from './JeeComponents/Features';


import React from 'react';
import DelayedFormPopup from '../DelayedComponent/DelayedComponent';
import EducationFeatures from '../EducationFeatures/EducationFeatures';
import Footer from '../Footer/Footer';
import ScholarshipBanner from './JeeComponents/ScholarshipBanner';
import VideoClassesShowcase from './JeeComponents/VideoClassesShowcase';
import ReferralBanner from './JeeComponents/ReferralBanner';
import IITSection from './JeeComponents/IIT_Mentors';
import HeroSection from './JeeComponents/Bannerr';
import GoogleForIndia2024 from '../../components/GoogleForIndia/GoogleForIndia'
import LearnersBadge from '../../components/GoogleForIndia/LearnBadge'
import ScrollLockedFeatureSection from '../ScrollCards/ScrollCards';
import Carousel from './JeeComponents/CustomCirriculum';
import StudyMaterialFooter from '../StudyMaterialFooter/StudyMaterialFooter'
import FAQ from '../FAQ/FAQ';
import App from './JeeComponents/PersonalizedSprint/PersonalizedApp';
import CompetitorAnalysis from './JeeComponents/Topper_Section';
import App1 from './JeeComponents/ConceptMap1/App';
import SecondaryNavbar from './JeeComponents/SecondNavbar';

const IITJEEPage = () => {
  return (
    <div className="iit-jee-page">
      <SecondaryNavbar/>

      <section id="get-started" className="my-0">
        <HeroSection/>
        <DelayedFormPopup/> 
      </section>
      <br/>
      {/* <Features/> */}

      <EducationFeatures/>
      <br/>
      <br/>
      <section id='guidence'> <IITSection/>  </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <section id="courses" className="my-0">
      <GoogleForIndia2024 />
      <div className=" px-6 justify-center block md:hidden">
      <LearnersBadge />
        </div>
      </section>
      

      <section id='iit-experts'><VideoClassesShowcase/></section>



    <section id='concept-mapping'>
    <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <App1/>
        </div>
      </div>
    </section>
      
    <section id='custom-curriculum'> <Carousel/> </section>
     
      <section id="personalized-sprint" className="my-0">
      {/* <FreeDemoComponent/> */}
      <App/>
      </section>
      
    <div className="block md:hidden">
    <ScrollLockedFeatureSection/>
    {/* <TimelineComponent/> */}
    {/* <StudentLearningJourney/> */}
    </div>
    
    {/* <PersonalizedSprint/> */}
    
      <section id="educators" className="my-0">
      <ScholarshipBanner/>
        
        
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
