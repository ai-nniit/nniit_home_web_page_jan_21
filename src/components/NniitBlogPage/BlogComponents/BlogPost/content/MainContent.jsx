// import { forwardRef, useEffect, useRef } from 'react';
// import Section from './Section';
// import { SECTIONS } from '../section';

// import BlogHighlightSection from '../../Card/CourseHighlight';
// import CarouselsUnion from '../../MastersUnion/CarouselsUnion';
// import CarouselsUnion1 from '../../MastersUnion/CarouselsUnion1';

// const MainContent = forwardRef((props, forwardedRef) => {
//   // Internal scroll ref
//   const localRef = useRef(null);

//   // Function to merge refs
//   const setRef = (node) => {
//     localRef.current = node;
//     if (typeof forwardedRef === 'function') {
//       forwardedRef(node);
//     } else if (forwardedRef) {
//       forwardedRef.current = node;
//     }
//   };

//   useEffect(() => {
//     const contentElement = localRef.current;

//     // Scroll logic
//     const handleScroll = () => {
//       if (contentElement) {
//         const isAtBottom =
//           contentElement.scrollTop + contentElement.clientHeight >= contentElement.scrollHeight;

//         if (isAtBottom) {
//           window.scrollBy({
//             top: 480, // 2 inches (~192px)
//             behavior: 'smooth',
//           });
//         }
//       }
//     };

//     // Add event listener
//     if (contentElement) {
//       contentElement.addEventListener('scroll', handleScroll);
//     }

//     // Cleanup
//     return () => {
//       if (contentElement) {
//         contentElement.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

//   return (
//     <main
//       ref={setRef}
//       className="col-span-6 px-5 py-5 prose prose-slate max-w-none"
//       style={{
//         height: '400px', // Default height for desktop
//         overflowY: 'auto',
//         ...(window.innerWidth <= 640 && { height: '480px' }), // Adjust height for mobile
//       }}
//     >
//       {SECTIONS.map((section, index) => (
//         <div key={section.id}>
//           <Section
//             id={section.id}
//             title={section.title}
//             content={section.content}
//           />
//           {index === 1 && (
//             <div className="block sm:hidden">
//               <CarouselsUnion1 />
//             </div>
//           )}
//         </div>
//       ))}
//     </main>
//   );
// });

// export default MainContent;







import { forwardRef, useEffect, useRef } from 'react';
import Section from './Section';
import { SECTIONS } from '../section';

import BlogHighlightSection from '../../Card/CourseHighlight';
import CarouselsUnion from '../../MastersUnion/CarouselsUnion';
import CarouselsUnion1 from '../../MastersUnion/CarouselsUnion1';
import VideoCard from '../../VideoCard/VideoCard';

const MainContent = forwardRef((props, forwardedRef) => {
  // Internal scroll ref
  const localRef = useRef(null);

  // Function to merge refs
  const setRef = (node) => {
    localRef.current = node;
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  };

  useEffect(() => {
    const contentElement = localRef.current;

    const isScrollAtBottom = () => {
      return (
        contentElement.scrollTop + contentElement.clientHeight >=
        contentElement.scrollHeight - 1 // Small offset for precision
      );
    };

    const autoScroll = () => {
      if (isScrollAtBottom()) {
        window.scrollBy({
          top: 480, // Scroll 5 inches (~480px)
          behavior: 'smooth',
        });
      }
    };

    // Optimized scroll listener
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          autoScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Mobile-specific touch handling
    const handleTouchEnd = () => {
      setTimeout(() => {
        autoScroll();
      }, 100); // Small delay to ensure scroll position is updated
    };

    // Add listeners
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll, { passive: true });
      contentElement.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    // Cleanup listeners
    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
        contentElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  return (
    <main
      ref={setRef}
      className="col-span-6 px-5 py-5 prose prose-slate max-w-none"
      style={{
        height: '400px', // Default height for desktop
        overflowY: 'auto',
        ...(window.innerWidth <= 640 && { height: '880px' }), // Adjust height for mobile
        WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
      }}
    >
      {SECTIONS.map((section, index) => (
        <div key={section.id}>
          <Section
            id={section.id}
            title={section.title}
            content={section.content}
          />
          {index === 1 && (
            <div className="block sm:hidden">
              <CarouselsUnion1 />
             
            </div>
          )}
        </div>
      ))}
    </main>
  );
});

export default MainContent;
