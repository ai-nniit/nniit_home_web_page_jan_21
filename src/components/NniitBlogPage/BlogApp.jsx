import { useState } from 'react';
import DelayedFormPopup from '../DelayedComponent/DelayedComponent';
import Navbar from '../Navbar/Navbar';
//import Navbar from './components/Navbar/Navbar';
//import ExamBlog from './components/Examblog/Examblog';
//import ScrollableBar from './components/Scrollablebar/Scrollablebar';
//import BlogContentAndForm from './components/BlogForm/Blogform';
//import GravitationalForceSection from './components/TheoryStart/TheoryStart';
// import VideoSection from './components/BlogPost/VideoSection';
// import PollComponent from './components/PollComponent/PollComponent';
// import BlogHighlightSection from './components/Card/CourseHighlight';
// import ImportantPoints from './components/ImportantPoints/ImportantPoints';
// import BannerCarousel from './components/TheoryStart/BannerCarousal';
// import FreeDemoComponent from './components/FreeDemo/FreeDemo';
// import DelayedFormPopup from './components/DelayedComponent/DelayedComponent';
// import FAQ from './components/FAQ/FAQ';
// import StudyMaterialFooter from './components/StudyMaterialFooter/StudyMaterialFooter';
// import Blog_App from './components/BlogPost/Blog_App';
// import EducationChatbot from './components/ChatBot/ChatBot';
// import QuizTest from './components/Quiz/Quiz';
// import KnowledgeAtTheUnion from './components/VideoSec/VideoSec';
// import CommentsSection from './components/CommentSection/CommentSection';
// import VideoAdAndScrollTop from './components/VideoSec/VideoSec';
// import HeroSection from './components/Examblog/HeroSection';
// import Navbar1 from './components/Examblog/Navbar1';
// import StickyButtons from './components/StickyButtons/StickyButtons';
// import CarouselsUnion from './components/MastersUnion/CarouselsUnion';
// import MobileSlider from './components/Examblog/MobileNavbar';
// import VideoCard from './components/VideoCard/VideoCard';
// import VideoCard1 from './components/VideoCard/VideoCard1';

import HeroSection from '../NniitBlogPage/BlogComponents/Examblog/HeroSection';
import BannerCarousel from '../NniitBlogPage/BlogComponents/TheoryStart/BannerCarousal';
import BlogContentAndForm from '../NniitBlogPage/BlogComponents/BlogForm/Blogform';
import CarouselsUnion from '../NniitBlogPage/BlogComponents/MastersUnion/CarouselsUnion';
import QuizTest from '../NniitBlogPage/BlogComponents/Quiz/Quiz';
import VideoCard1 from '../NniitBlogPage/BlogComponents/VideoCard/VideoCard1';
import PollComponent from '../NniitBlogPage/BlogComponents/PollComponent/PollComponent';
import FreeDemoComponent from '../NniitBlogPage/BlogComponents/FreeDemo/FreeDemo';
import BlogHighlightSection from '../NniitBlogPage/BlogComponents/Card/CourseHighlight';
import ImportantPoints from '../NniitBlogPage/BlogComponents/ImportantPoints/ImportantPoints';
import FAQ from '../NniitBlogPage/BlogComponents/FAQ/FAQ';
import CommentsSection from '../NniitBlogPage/BlogComponents/CommentSection/CommentSection';
import StudyMaterialFooter from '../StudyMaterialFooter/StudyMaterialFooter';
import EducationChatbot from '../NniitBlogPage/BlogComponents/ChatBot/ChatBot';
import StickyButtons from '../NniitBlogPage/BlogComponents/StickyButtons/StickyButtons';
import MobileSlider from '../NniitBlogPage/BlogComponents/Examblog/MobileNavbar';
import Navbar1 from '../NniitBlogPage/BlogComponents/Examblog/Navbar1';
import VideoCard from '../NniitBlogPage/BlogComponents/VideoCard/VideoCard';
import Blog_App from '../NniitBlogPage/BlogComponents/BlogPost/Blog_App';
import VideoAdAndScrollTop from '../NniitBlogPage/BlogComponents/VideoSec/VideoSec';



function BlogApp() {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      {/* Global Components */}
      <DelayedFormPopup/>
     <div className="relative z-30">
     <Navbar/>
     </div>
      <div className="md:hidden sticky top-0 z-10">
  <MobileSlider />
</div>
      <br />
      <br />
      <br />
      
      {/* Home Page Components */}
      {/* <ExamBlog /> */}
      <div className="hidden md:block">
          <Navbar1 />
      </div>
      <HeroSection/>
      {/* <ScrollableBar /> */}
      <BannerCarousel />
      <div className="block md:hidden">
    <VideoCard />
      </div>

      <BlogContentAndForm />

      {/* Blog_App Component */}
      <div className="h-screen overflow-y-auto">
        <Blog_App />
      </div>

      <div>
      <CarouselsUnion/>
      </div>
      <div>
        <QuizTest/>
      </div>

      {/* Remaining Home Page Components */}
      <div className="container -my-3 p-1">
        <h1 className="text-3xl font-bold font-serif text-center justify-center mb-8">
          Understand JEE Pattern & Structure With Our Experts
        </h1>
        {/* <VideoSection videoData={videoData} /> */}
        {/* <KnowledgeAtTheUnion/> */}
        <VideoCard1/>
        <br/>
        <br/>
        <PollComponent />
        <br />
        <br />
        <FreeDemoComponent />
        <br />
        <br />
        <br />
        <BlogHighlightSection />
        <ImportantPoints />
        <FAQ />
        <CommentsSection/>
        <StudyMaterialFooter />
        <EducationChatbot/>
        <div className="min-h-screen">
      <VideoAdAndScrollTop/>
    </div>
    <StickyButtons/>
      </div>
    </main>
  );
}

export default BlogApp;
