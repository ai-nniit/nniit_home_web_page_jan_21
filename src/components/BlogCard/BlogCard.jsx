import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import logoimg from '../../assets/BlogCardImages/foundation.png';
import class12 from '../../assets/BlogCardImages/class12.png';
import custom_plan from '../../assets/BlogCardImages/customized_planning.png';
import crashcourse from '../../assets/GoogleforIndia/iitjee.png';
import neetcrashcourse from '../../assets/BlogCardImages/neet_crashcourse.jpeg';
import class11 from '../../assets/BlogCardImages/class11.png'
import { ChevronLeft, ChevronRight, GraduationCap, Book, TestTube, Brain, School, ArrowRight } from 'lucide-react';
import MobileSlider from './MobileSlider';
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
    <div className='p-4'>
<div className="max-w-7xl mx-auto px-10 py-16 -mt-12 relative bg-white">
      {/* Heading */}
      <div className='hidden md:block'>
      <div className="text-left mb-7">
      <div className="flex items-center mx-auto gap-1 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" className="relative -top-1.2">
                <path
                  d="M24 11.9914C19.2924 12.4191 16.5877 12.8125 14.9272 14.1126C12.9757 15.6351 12.5136 18.4234 12 24C11.4693 18.2181 10.99 15.4469 8.85021 13.9587C7.18973 12.7954 4.50214 12.4191 0 12.0086C4.69044 11.5809 7.41227 11.1875 9.05564 9.90449C11.0243 8.36493 11.4864 5.59373 12 0C12.4793 5.14897 12.9073 7.90306 14.4993 9.49394C16.0913 11.0848 18.8645 11.5296 24 11.9914Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient id="paint0_linear" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#39B6D8" />
                    <stop offset="0.5" stopColor="#F7D344" />
                    <stop offset="1" stopColor="#E38330" />
                  </linearGradient>
                </defs>
              </svg>

            <span className="text-sm font-extrabold font-sf tracking-wider text-gray-600">
              COLLECTION
            </span>
          </div>
        <h1 className="text-3xl font-bold font-sf -mt-3 md:text-4xl sm:text-2xl">
          Explore all our{' '}
          <span className="text-[#0066FF] drop-shadow-lg inline-block relative">
            offerings
            {/* <span className="absolute left-0 right-0 top-[100%] h-[4px] bg-cyan-400"></span>   */}
          </span>
        </h1>
      </div>

      {/* Main Categories (Desktop Only) */}
      <div className="hidden md:flex flex-wrap justify-center gap-2 mb-3 -mt-3 mr-12">
        {Object.keys(examData).map((category) => {
          const Icon = categoryIcons[category];
          return (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedSubcategory("Courses");
              }}
              className={`flex items-center px-3 py-2.5 rounded-md text-sm font-sf 
                ${selectedCategory === category
                  ? "opacity-100 bg-[#4F46E5] text-white shadow-lg scale-85 font-sf"
                  : "bg-transparent text-[#4B5563] hover:bg-gray-50 hover:scale-105 font-sf"
                }
                shadow-md hover:shadow-lg`}
            >
              {Icon && <Icon className="w-4 h-4 mr-2" />}
              {category}
            </button>
          );
        })}
      </div>

      {/* Subcategories */}
      <div className="max-w-4xl mx-auto px-4 mt-1 ml-20">
  <div className="relative flex gap-2 p-2 bg-white/80 rounded-2xl ml-5 backdrop-blur-xl shadow-xl max-w-fit mx-auto border border-indigo-50">
    {subcategories.map((subcategory) => (
      <button
        key={subcategory}
        onClick={() => setSelectedSubcategory(subcategory)}
        className={`group relative flex items-center gap-1 px-2 py-1 font-medium font-sf text-[13px] rounded-xl transition-all duration-500 overflow-hidden 
          ${selectedSubcategory === subcategory ? "text-white  shadow-lg scale-105" : "text-gray-600 hover:text-indigo-600"}`}
      >
        {/* Background Layers */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          selectedSubcategory === subcategory
            ? "opacity-100 bg-gradient-to-r from-indigo-600 to-violet-600"
            : "opacity-0 group-hover:opacity-10 bg-gradient-to-r from-indigo-50 to-violet-50"
        }`} />
        
        {/* Hover Border Effect */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          selectedSubcategory === subcategory ? "opacity-0" : "opacity-0 group-hover:opacity-100"
        }`}>
          <div className="absolute inset-0 rounded-xl border-2 border-indigo-500/30 scale-90 group-hover:scale-100 transition-transform duration-500" />
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-100 to-violet-100 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        </div>

        <span className="relative z-10 tracking-wide">{subcategory.toUpperCase()}</span>
        
        {/* Active Shine Effect */}
        {selectedSubcategory === subcategory && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine-slow" />
        )}
      </button>
    ))}
  </div>
</div>



      
      </div>

      {/* Mobile Slider (Mobile Only) */}
      <div className="md:hidden">
        <MobileSlider />
      </div>

      {/* Carousel Container */}
      <div className="relative px-1 mt-1 sm:px-6 lg:px-10 max-w-screen-lg mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-3 p-3">
            {examData[selectedCategory][selectedSubcategory].map((slide, index) => (
              <div
                key={index}
                className="embla__slide flex-grow-0 flex-shrink-0 w-full md:w-1/3 lg:w-1/4"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover font-sf"
                    /> 
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                  </div>
                  <div className="p-2">
                    <span className="text-xs font-medium font-sf tracking-wider text-blue-600 mb-2 block">
                      {slide.category || "Blog"}
                    </span>
                    <h3 className="font-semibold font-sf text-sm mb-2 line-clamp-2">
                      {slide.title}
                    </h3>
                    <p className="text-gray-600 text-xs font-sf mb-2 line-clamp-2">
                      {slide.description}
                    </p>
                    <div className="flex items-center justify-between text-xs font-sf text-gray-600">
                      <span>Posted by {slide.author || "NNIIT"}</span>
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
    </div>
  );
}
