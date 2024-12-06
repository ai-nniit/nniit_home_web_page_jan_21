// import React, { useState } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import { ChevronLeft, ChevronRight, GraduationCap, Book, TestTube, Brain, School ,ArrowRight } from 'lucide-react';

// const examData = {
//   'IIT-JEE': {
//     Courses: [
//       {
//         title: 'Master JEE Physics',
//         description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
//         image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//     'Study Material': [
//       {
//         title: 'Physics Notes',
//         description: 'Detailed notes and problem-solving tips for JEE Physics.',
//         image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//   },
//   'NEET': {
//     Courses: [
//       {
//         title: 'Master JEE Physics',
//         description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
//         image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//     'Study Material': [
//       {
//         title: 'Physics Notes',
//         description: 'Detailed notes and problem-solving tips for JEE Physics.',
//         image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//   },
//   'SAT': {
//     Courses: [
//       {
//         title: 'Master JEE Physics',
//         description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
//         image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//     'Study Material': [
//       {
//         title: 'Physics Notes',
//         description: 'Detailed notes and problem-solving tips for JEE Physics.',
//         image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//   },
//   'IPMAT': {
//     Courses: [
//       {
//         title: 'Master JEE Physics',
//         description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
//         image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//     'Study Material': [
//       {
//         title: 'Physics Notes',
//         description: 'Detailed notes and problem-solving tips for JEE Physics.',
//         image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//   },
//   'K12': {
//     Courses: [
//       {
//         title: 'Master JEE Physics',
//         description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
//         image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//     'Study Material': [
//       {
//         title: 'Physics Notes',
//         description: 'Detailed notes and problem-solving tips for JEE Physics.',
//         image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//   },
//   'K11': {
//     Courses: [
//       {
//         title: 'Master JEE Physics',
//         description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
//         image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//     'Study Material': [
//       {
//         title: 'Physics Notes',
//         description: 'Detailed notes and problem-solving tips for JEE Physics.',
//         image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//   },
//   'K10': {
//     Courses: [
//       {
//         title: 'Master JEE Physics',
//         description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
//         image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//     'Study Material': [
//       {
//         title: 'Physics Notes',
//         description: 'Detailed notes and problem-solving tips for JEE Physics.',
//         image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//   },
//   // Update other categories similarly...
//   'K9': {
//     Courses: [
//       {
//         title: 'Master JEE Physics',
//         description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
//         image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//     'Study Material': [
//       {
//         title: 'Physics Notes',
//         description: 'Detailed notes and problem-solving tips for JEE Physics.',
//         image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//   },
//   'K8': {
//     Courses: [
//       {
//         title: 'Master JEE Physics',
//         description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
//         image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//     'Study Material': [
//       {
//         title: 'Physics Notes',
//         description: 'Detailed notes and problem-solving tips for JEE Physics.',
//         image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//   },
//   'K7': {
//     Courses: [
//       {
//         title: 'Master JEE Physics',
//         description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
//         image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
//       }
//     ],
//     'Study Material': [
//       {
//         title: 'Physics Notes',
//         description: 'Detailed notes and problem-solving tips for JEE Physics.',
//         image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
//       }
//     ],
//   },
//   'K6': {
//     Courses: [
//       {
//         title: 'Master JEE Physics',
//         description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
//         image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
//       }
//     ],
//     'Study Material': [
//       {
//         title: 'Physics Notes',
//         description: 'Detailed notes and problem-solving tips for JEE Physics.',
//         image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
//       },
//     ],
//   },
  
// };

// const categoryIcons = {
//   'IIT-JEE': GraduationCap,
//   'NEET': TestTube,
//   'SAT': Book,
//   'IPMAT': Brain,
//   'K12': School,
//   'K11': TestTube,
//   'K10': Book,
//   'K9' : Brain,
//   'K8' : GraduationCap,
//   'K7' : TestTube,
//   'K6' : Book,
// };

// export default function ExamCarousel() {
//   const [selectedCategory, setSelectedCategory] = useState('IIT-JEE');
//   const [selectedSubcategory, setSelectedSubcategory] = useState('Courses');
//   const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false });

//   const scrollPrev = () => emblaApi?.scrollPrev();
//   const scrollNext = () => emblaApi?.scrollNext();

//   const subcategories = Object.keys(examData[selectedCategory]);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12 relative">
//       {/* Main Categories */}
//       <div className="flex flex-wrap justify-center gap-3 mb-8">
//         {Object.keys(examData).map((category) => {
//           const Icon = categoryIcons[category];
//           return (
//             <button
//               key={category}
//               onClick={() => {
//                 setSelectedCategory(category);
//                 setSelectedSubcategory('Courses');
//               }}
//               className={`flex items-center px-4 py-3 rounded-md text-sm font-sans 
//                 ${selectedCategory === category
//                   ? 'bg-black text-white shadow-lg scale-85'
//                   : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-105'
//                 }
//                 shadow-md hover:shadow-lg`}
//             >
//               <Icon className="w-4 h-4" />
//               {category}
//             </button>
//           );
//         })}
//       </div>

//       {/* Subcategories */}
//       <div className="flex gap-2 mb-8">
//         {subcategories.map((subcategory) => (
//           <button
//             key={subcategory}
//             onClick={() => setSelectedSubcategory(subcategory)}
//             className={`px-6 py-3 rounded-full text-sm font-semibold transition-all
//               ${selectedSubcategory === subcategory
//                 ? 'bg-black text-white shadow-lg scale-85'
//                 : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-100'
//               }
//               shadow-md hover:shadow-lg`}
//           >
//             {subcategory}
//           </button>
//         ))}
//       </div>
// {/*GoogleForIndia Card Design*/}
//       <div className="overflow-hidden" ref={emblaRef}>
//       <div className="embla__container flex gap-2">
//         {examData[selectedCategory][selectedSubcategory].map((slide, index) => (
//           <div key={index} className="embla__slide w-full md:w-1/4 lg:w-1/4">
//             <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//               <div className="relative aspect-[4/3]">
//                 <img 
//                   src={slide.image} 
//                   alt={slide.title} 
//                   className="w-full h-full object-cover" 
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
//               </div>
              
//               <div className="p-4">
//                 <span className="text-xs font-medium tracking-wider text-blue-600 mb-2 block">
//                   {slide.category || 'Blog'}
//                 </span>
                
//                 <h3 className="font-semibold text-lg mb-4 line-clamp-2">
//                   {slide.title}
//                 </h3>
                
//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                   {slide.description}
//                 </p>
                
//                 <div className="flex items-center justify-between text-sm text-gray-600">
//                   <span>Posted by {slide.author || 'Anonymous'}</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//       {/* Scroll Buttons */}
//       <button
//         onClick={scrollPrev}
//         className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
//       >
//         <ChevronLeft className="w-6 h-6 text-gray-600" />
//       </button>
//       <button
//         onClick={scrollNext}
//         className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
//       >
//         <ChevronRight className="w-6 h-6 text-gray-600" />
//       </button>
//     </div>
//   );
// }

// {/* Carousel */}
//       {/* <div className="overflow-hidden" ref={emblaRef}>
//         <div className="embla__container flex gap-2">
//           {examData[selectedCategory][selectedSubcategory].map((slide, index) => (
//             <div key={index} className="embla__slide w-full md:w-1/3">
//               <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
//                 <div className="relative aspect-[4/3]">
//                   <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg mb-2">{slide.title}</h3>
//                   <p className="text-gray-600 text-sm">{slide.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div> */}
import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import logoimg from '../../assets/converted_image.png';
import class12 from '../../assets/BlogCardImages/class12.png';
import custom_plan from '../../assets/BlogCardImages/customized_planning.png';
import crashcourse from '../../assets/GoogleforIndia/iitjee.png';
import neetcrashcourse from '../../assets/BlogCardImages/neet_crashcourse.jpeg';
import class11 from '../../assets/BlogCardImages/class11.png'
import { ChevronLeft, ChevronRight, GraduationCap, Book, TestTube, Brain, School, ArrowRight } from 'lucide-react';

const examData = {
  'IIT-JEE': {
    Courses: [
      {
        title: 'FOUNDATION',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: logoimg,
      },
      {
        title: 'CRASH COURSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: crashcourse,
      },
      {
        title: 'CLASS 11 PROGRAM',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: class11,
      },
      {
        title: 'CLASS 12 PROGRAM',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: class12,
      },
      {
        title: 'CUSTOMIZED PLAN',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: custom_plan,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NCERT BOOKS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'REVISION NOTES',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  'NEET': {
    Courses: [
      {
        title: 'FOUNDATION',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'CRASH CROUSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: neetcrashcourse,
      },
      {
        title: 'CLASS 11 PROGRAM',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: class11,
      },
      {
        title: 'CLASS 12 PROGRAM',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: class12,
      },
      {
        title: 'CUSTOMIZED PLAN',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: custom_plan,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NCERT BOOKS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'REVISION NOTES',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  'SAT': {
    Courses: [
      {
        title: 'FOUNDATION',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'CRASH COURSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'CLASS 11 PROGRAM',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: class11,
      },
      {
        title: 'CLASS 12 PROGRAM',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: class12,
      },
      {
        title: 'CUSTOMIZED PLAN',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: custom_plan,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NCERT BOOKS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'REVISION NOTES',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  'IPMAT': {
    Courses: [
      {
        title: 'FOUNDATION',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'CRASH COURSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'CLASS 11 PROGRAM',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: class11,
      },
      {
        title: 'CLASS 12 PROGRAM',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: class12,
      },
      {
        title: 'CUSTOMIZED PLAN',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: custom_plan,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NCERT BOOKS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'REVISION NOTES',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  'K12': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'CBSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NOIS',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IB',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SSC',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NCERT BOOKS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'REVISION NOTES',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  'K11': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'CBSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NOIS',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IB',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SSC',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NCERT BOOKS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'REVISION NOTES',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  'K10': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'CBSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NOIS',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IB',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SSC',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NCERT BOOKS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'REVISION NOTES',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  // Update other categories similarly...
  'K9': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'CBSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NOIS',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IB',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SSC',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NCERT BOOKS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'REVISION NOTES',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  'K8': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'CBSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NOIS',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IB',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SSC',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NCERT BOOKS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'REVISION NOTES',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  'K7': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'CBSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NOIS',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IB',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SSC',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NCERT BOOKS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'REVISION NOTES',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  'K6': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'CBSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NOIS',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IB',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IGCSE',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SSC',
        description: 'Comprehensive physics preparation with focus on mechanics and electromagnetism.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NCERT BOOKS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'REVISION NOTES',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Detailed notes and problem-solving tips for JEE Physics.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  // Add more categories as needed
};

const categoryIcons = {
  'IIT-JEE': GraduationCap,
  'NEET': TestTube,
  'SAT': Book,
  'IPMAT': Brain,
  'K12': School,
  'K11': TestTube,
  'K10': Book,
  'K9' : Brain,
  'K8' : GraduationCap,
  'K7' : TestTube,
  'K6' : Book,
};



export default function ExamCarousel() {
  const [selectedCategory, setSelectedCategory] = useState('IIT-JEE');
  const [selectedSubcategory, setSelectedSubcategory] = useState('Courses');
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start', 
    loop: false,
    slidesToScroll: 1 // This ensures one slide scrolls at a time
  });
  


  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  const subcategories = Object.keys(examData[selectedCategory]);
  
  return (
    <div className="max-w-7xl mx-auto px-16 py-15 relative">
      <div className="text-left mb-7">
    <h1 className="text-4xl font-bold ml-16">
      Explore all our{' '}
      <span className="text-blue-600 inline-block relative">
    offerings
    <span className="absolute left-0 right-0 top-[100%] mt-2 transform rotate-30 bg-gradient-to-r from-yellow-500 to-transparent h-[5px]"></span>
  </span> 
    </h1>
  </div>
      {/* Main Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-3">
        {Object.keys(examData).map((category) => {
          const Icon = categoryIcons[category];
          return (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedSubcategory('Courses');
              }}
              className={`flex items-center px-3 py-2.5 rounded-md text-sm font-sans 
                ${selectedCategory === category
                  ? 'bg-black text-white shadow-lg scale-85'
                  : 'bg-transparent text-gray-600 hover:bg-gray-50 hover:scale-105'
                }
                shadow-md hover:shadow-lg`}
            >
              {Icon && <Icon className="w-4 h-4 mr-2" />}
              {category}
            </button>
          );
        })}
      </div>
      
      <div className="flex gap-3 mb-3 p-2 ml-16 items-center">
        {subcategories.map((subcategory) => (
        <div
          key={subcategory}
          onClick={() => setSelectedSubcategory(subcategory)}
          className={`cursor-pointer text-xl font-bold transition-all relative ${
            selectedSubcategory === subcategory ? 'text-black' : 'text-black'
          }`}
        >
          {subcategory.toUpperCase()}
          {/* Underline for the selected subcategory */}
          {selectedSubcategory === subcategory && (
            <div
              className="absolute left-0 right-0 h-0.5 bg-red-500 rounded transition-all duration-300"
              style={{ bottom: '-5px' }}
            ></div>
          )}
        </div>
        ))}
      </div>

      {/* Carousel Container */}
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto">
  <div className="overflow-hidden" ref={emblaRef}>
    <div className="embla__container flex gap-3">
      {examData[selectedCategory][selectedSubcategory].map((slide, index) => (
        <div key={index} className="embla__slide flex-grow-0 flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3]">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
            </div>
            
            <div className="p-2">
              <span className="text-xs font-medium tracking-wider text-blue-600 mb-2 block">
                {slide.category || 'Blog'}
              </span>
              
              <h3 className="font-semibold text-lg mb-3 line-clamp-2">
                {slide.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {slide.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Posted by {slide.author || 'Anonymous'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Scroll Buttons */}
  <button
    onClick={scrollPrev}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
  >
    <ChevronLeft className="w-6 h-6 text-gray-600" />
  </button>
  <button
    onClick={scrollNext}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
  >
    <ChevronRight className="w-6 h-6 text-gray-600" />
  </button>
</div>

    </div>
  );
}
