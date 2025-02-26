import React from 'react';
import SecondaryNavbar1 from './components/SecondaryNavbar';
import NeetHero from './components/NeetHero';
import EducationFeatures from '../EducationFeatures/EducationFeatures';
import NeetSection from './components/NeetMentors';
import GoogleForIndia2024 from '../../components/GoogleForIndia/GoogleForIndia';
import LearnersBadge from '../GoogleForIndia/LearnBadge';
import NeetVideoClassesShowcase from './components/NeetVideoshowcase';
import App1 from '../JeePage/JeeComponents/ConceptMap1/App';
import NeetCustomCurriculum from './components/NeetCustomCurriculum';
import App from '../JeePage/JeeComponents/PersonalizedSprint/PersonalizedApp';
import ReferralBanner from '../JeePage/JeeComponents/ReferralBanner';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import StudyMaterialFooter from '../StudyMaterialFooter/StudyMaterialFooter';
import JeeFAQ from '../JeePage/JeeComponents/JeeFAQ';
import NeetFAQ from './components/NeetFAQ';


const NeetHomePage = () => {
  return (
    <div>
     <SecondaryNavbar1/>
     
     <section id="get-started" className="my-0"> <NeetHero/> </section>

        <EducationFeatures examName={"NEET"}/> 

        <br/>  

      <section id="guidence" > <NeetSection/> </section>  
        <br/>
        <br/>
        <br/>
        <br/>

      <section id='courses' className='my-0'> <GoogleForIndia2024/>   <div className=" px-6 justify-center block md:hidden">
      <LearnersBadge/>  </div> </section>

      <section id='iit-experts'> <NeetVideoClassesShowcase/> </section>  

      <section  id='concept-mapping'>  
        <div className="container mx-auto px-2 py-4">
        <div className="bg-white rounded-md shadow-lg p-4"> <App1/> </div>
        </div>
      </section>

      <section id='custom-curriculum'> <NeetCustomCurriculum/> </section>

      <section id='personalized-sprint' className='my-0'> <App/> </section>

      <section id='referral-banner'> <ReferralBanner/> </section>

      <NeetFAQ/>

      <Footer/>

      <StudyMaterialFooter/>

    </div>
  );
};

export default NeetHomePage;

