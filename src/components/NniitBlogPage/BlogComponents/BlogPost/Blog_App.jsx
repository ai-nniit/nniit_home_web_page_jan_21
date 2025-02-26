import { useEffect, useRef, useState } from 'react';
import Layout from '../BlogPost/layout/Layout';
import MainContent from '../BlogPost/content/MainContent';
import AdsSection from '../BlogPost/adss/AdsSection';
import ProgressBar from '../BlogPost/ui/ProgressBar';
import { useReadingProgress } from '../BlogPost/useReadingProgress';
import TableOfContents from './navigation/TableOfContents';
import Carousel from './Carousel';

function App() {
  const [activeSection, setActiveSection] = useState('section1');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Check initial viewport width
  const mainContentRef = useRef(null);
  const progress = useReadingProgress();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Update state on window resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
      }
    );

    const sections = mainContentRef.current?.querySelectorAll('section') || [];
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <ProgressBar progress={progress} />
      {isDesktop ? (
        <Layout>
          <TableOfContents activeSection={activeSection} />
          <MainContent ref={mainContentRef} />
          <AdsSection />
        </Layout>
      ) : (
        <>
          <MainContent ref={mainContentRef} />
          {/* <Carousel ads={adsData} /> */}
          {/* <BannerCarousel/> */}
        </>
      )}
    </>
  );
}

export default App;
