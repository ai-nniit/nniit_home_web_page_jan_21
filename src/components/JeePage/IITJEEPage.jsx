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


const IITJEEPage = () => {
  return (
    <div className="iit-jee-page">
      <section id="get-started" className="my-4">
        <Bannerr/>
        <DelayedFormPopup/>
      </section>
      <section id="features" className="my-0">
      <FreeDemoComponent/>
      </section>
      <section id="batch" className="my-0">
        <JEEPromoSection/>
      </section>
      <section id="educators" className="my-0">
      <ScholarshipBanner/>
        <EducationFeatures/>
        <VideoClassesShowcase/>
        <InteractiveEducationalPlatform/>
      </section>
      <section id="success-stories" className="my-0">
        <ReferralBanner/>
      </section>
      <section id="about-exam" className="my-0">
        <JEEExamLandingPage/>
      </section>
      <Footer/>
    </div>
  );
};

export default IITJEEPage;
