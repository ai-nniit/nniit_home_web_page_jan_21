import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
// import logoimg from '../../assets/BlogCardImages/foundation.png';
// import class12 from '../../assets/BlogCardImages/class12.png';
// import custom_plan from '../../assets/BlogCardImages/customized_planning.png';
// import crashcourse from '../../assets/GoogleforIndia/iitjee.png';
// import neetcrashcourse from '../../assets/BlogCardImages/neet_crashcourse.jpeg';
// import class11 from '../../assets/BlogCardImages/class11.png'

import tut1 from '../../assets/Tutors/Tut1.png';
import tut2 from '../../assets/Tutors/Tut2.png';
import tut3 from '../../assets/Tutors/Tut3.png';
import tut4 from '../../assets/Tutors/Tut4.png';
import tut5 from '../../assets/Tutors/Tut5.png';
import tut6 from '../../assets/Tutors/Tut6.png';
import tut7 from '../../assets/Tutors/Tut7.png';
import tut8 from '../../assets/Tutors/Tut8.png';
import tut9 from '../../assets/Tutors/Tut9.png';
import tut10 from '../../assets/Tutors/Tut10.png';


import tut11 from '../../assets/Tutors/Tut11.png';
import tut12 from '../../assets/Tutors/Tut12.png';
import tut13 from '../../assets/Tutors/Tut13.png';
import tut14 from '../../assets/Tutors/Tut14.png';
import tut15 from '../../assets/Tutors/Tut15.png';
import tut16 from '../../assets/Tutors/Tut16.png';
import tut17 from '../../assets/Tutors/Tut17.png';
import tut18 from '../../assets/Tutors/Tut18.png';
import tut19 from '../../assets/Tutors/Tut19.png';
import tut20 from '../../assets/Tutors/Tut20.png';
import tut21 from '../../assets/Tutors/Tut21.png';


import gk from '../../assets/BlogCardImages/StudyMaterial/general_knowledge.jpeg';
import gk1 from '../../assets/BlogCardImages/StudyMaterial/general_knowledge1.jpeg';
import gk2 from '../../assets/BlogCardImages/StudyMaterial/general_knowledge2.jpeg';
import gk3 from '../../assets/BlogCardImages/StudyMaterial/general_knowledge3.jpeg';
import gk4 from '../../assets/BlogCardImages/StudyMaterial/general_knowledge4.jpeg';
import gk5 from '../../assets/BlogCardImages/StudyMaterial/general_knowledge5.jpeg';
import gk6 from '../../assets/BlogCardImages/StudyMaterial/general_knowledge6.jpeg';
import gk7 from '../../assets/BlogCardImages/StudyMaterial/general_knowledge7.jpeg';
import gk8 from '../../assets/BlogCardImages/StudyMaterial/general_knowledge8.jpeg';

import imp from '../../assets/BlogCardImages/StudyMaterial/imp_q.jpeg';
import imp1 from '../../assets/BlogCardImages/StudyMaterial/imp_q1.jpeg';
import imp2 from '../../assets/BlogCardImages/StudyMaterial/imp_q2.jpeg';
import imp3 from '../../assets/BlogCardImages/StudyMaterial/imp_q3.jpeg';
import imp4 from '../../assets/BlogCardImages/StudyMaterial/imp_q4.jpeg';
import imp5 from '../../assets/BlogCardImages/StudyMaterial/imp_q5.jpeg';
import imp6 from '../../assets/BlogCardImages/StudyMaterial/imp_q6.jpeg';
import imp7 from '../../assets/BlogCardImages/StudyMaterial/imp_q7.jpeg';
import imp8 from '../../assets/BlogCardImages/StudyMaterial/imp_q8.jpeg';



import nb from '../../assets/BlogCardImages/StudyMaterial/ncert_book.jpeg';
import nb1 from '../../assets/BlogCardImages/StudyMaterial/ncert_book1.jpeg';
import nb2 from '../../assets/BlogCardImages/StudyMaterial/ncert_book2.jpeg';
import nb3 from '../../assets/BlogCardImages/StudyMaterial/ncert_book3.jpeg';
import nb4 from '../../assets/BlogCardImages/StudyMaterial/ncert_book4.jpeg';
import nb5 from '../../assets/BlogCardImages/StudyMaterial/ncert_book5.jpeg';
import nb6 from '../../assets/BlogCardImages/StudyMaterial/ncert_book6.jpeg';
import nb7 from '../../assets/BlogCardImages/StudyMaterial/ncert_book7.jpeg';
import nb8 from '../../assets/BlogCardImages/StudyMaterial/ncert_book8.jpeg';

import n from '../../assets/BlogCardImages/StudyMaterial/ncert.jpeg';
import n1 from '../../assets/BlogCardImages/StudyMaterial/ncert1.jpeg';
import n2 from '../../assets/BlogCardImages/StudyMaterial/ncert2.jpeg';
import n3 from '../../assets/BlogCardImages/StudyMaterial/ncert3.jpeg';
import n4 from '../../assets/BlogCardImages/StudyMaterial/ncert4.jpeg';
import n5 from '../../assets/BlogCardImages/StudyMaterial/ncert5.jpeg';
import n6 from '../../assets/BlogCardImages/StudyMaterial/ncert6.jpeg';


import pyq from '../../assets/BlogCardImages/StudyMaterial/pyq.jpeg';
import pyq1 from '../../assets/BlogCardImages/StudyMaterial/pyq1.jpeg';
import pyq2 from '../../assets/BlogCardImages/StudyMaterial/pyq2.jpeg';
import pyq3 from '../../assets/BlogCardImages/StudyMaterial/pyq3.jpeg';
import pyq4 from '../../assets/BlogCardImages/StudyMaterial/pyq4.jpeg';
import pyq5 from '../../assets/BlogCardImages/StudyMaterial/pyq5.jpeg';
import pyq6 from '../../assets/BlogCardImages/StudyMaterial/pyq6.jpeg';
import pyq7 from '../../assets/BlogCardImages/StudyMaterial/pyq7.jpeg';
import pyq8 from '../../assets/BlogCardImages/StudyMaterial/pyq8.jpeg';

import rn from '../../assets/BlogCardImages/StudyMaterial/revision_notes.jpeg';
import rn1 from '../../assets/BlogCardImages/StudyMaterial/revision_notes1.jpeg';
import rn2 from '../../assets/BlogCardImages/StudyMaterial/revision_notes2.jpeg';
import rn3 from '../../assets/BlogCardImages/StudyMaterial/revision_notes3.jpeg';
import rn4 from '../../assets/BlogCardImages/StudyMaterial/revision_notes4.jpeg';
import rn5 from '../../assets/BlogCardImages/StudyMaterial/revision_notes5.jpeg';
import rn6 from '../../assets/BlogCardImages/StudyMaterial/revision_notes6.jpeg';
import rn7 from '../../assets/BlogCardImages/StudyMaterial/revision_notes7.jpeg';
import rn8 from '../../assets/BlogCardImages/StudyMaterial/revision_notes8.jpeg';

import sqp from '../../assets/BlogCardImages/StudyMaterial/sample_qp.jpeg';
import sqp1 from '../../assets/BlogCardImages/StudyMaterial/sample_qp1.jpeg';
import sqp2 from '../../assets/BlogCardImages/StudyMaterial/sample_qp2.jpeg';
import sqp3 from '../../assets/BlogCardImages/StudyMaterial/sample_qp3.jpeg';
import sqp4 from '../../assets/BlogCardImages/StudyMaterial/sample_qp4.jpeg';
import sqp5 from '../../assets/BlogCardImages/StudyMaterial/sample_qp5.jpeg';
import sqp6 from '../../assets/BlogCardImages/StudyMaterial/sample_qp6.jpeg';
import sqp7 from '../../assets/BlogCardImages/StudyMaterial/sample_qp7.jpeg';
import sqp8 from '../../assets/BlogCardImages/StudyMaterial/sample_qp8.jpeg';



import { ChevronLeft, ChevronRight, GraduationCap, Book, TestTube, Brain, School, ArrowRight } from 'lucide-react';
import MobileSlider from './MobileSlider';
const examData = {
  'IIT-JEE': {
    Courses: [
      {
        title: 'FOUNDATION',
        description: 'Build a rock-solid foundation in Math, Physics, and Chemistry to ace JEE with confidence.',
        image: tut1,
      },
      {
        title: 'CRASH COURSE',
        description: 'Power-packed revision with expert shortcuts, tips, and tricks to boost your JEE score in record time!',
        image: tut2,
      },
      {
        title: 'CLASS 11 PROGRAM',
        description: 'Master JEE concepts from the ground up with personalized learning and expert mentoring.',
        image: tut11,
      },
      {
        title: 'CLASS 12 PROGRAM',
        description: 'Strengthen your problem-solving skills and fast-track your JEE preparation for top ranks.',
        image: tut12,
      },
      {
        title: 'CUSTOMIZED PLAN',
        description: 'Tailored learning plans designed to fit your strengths and weaknesses for JEE success.',
        image: tut5,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Master NCERT concepts with a strong foundation for JEE. Our expert explanations simplify complex topics to ensure conceptual clarity.',
        image: n,
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Solve past JEE papers to understand exam patterns, improve problem-solving skills, and boost confidence for the real test.',
        image: pyq,
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Practice with JEE-specific sample papers to get familiar with the difficulty level and time management strategies.',
        image: sqp,
      },
      {
        title: 'NCERT BOOKS',
        description: 'Access essential NCERT textbooks with in-depth coverage of Physics, Chemistry, and Mathematics, forming the backbone of JEE preparation.',
        image: nb,
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Focus on frequently asked and high-weightage questions to streamline your JEE preparation efficiently.',
        image: imp,
      },
      {
        title: 'REVISION NOTES',
        description: 'Crisp and concise notes designed by IIT experts to help you revise critical topics quickly before the exam.',
        image: rn,
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Stay updated with essential general knowledge, including scientific advancements and mathematical theories, relevant for JEE aspirants.',
        image: gk,
      },
    ],
  },
  'NEET': {
    Courses: [
      {
        title: 'FOUNDATION',
        description: 'Strengthen your basics in Biology, Physics, and Chemistry for a head start in NEET prep.',
        image: tut12,
      },
      {
        title: 'CRASH CROUSE',
        description: 'Quick, effective, and high-yield NEET revision to maximize your score in minimal time.',
        image: tut16,
      },
      {
        title: 'CLASS 11 PROGRAM',
        description: 'Deep dive into NEET concepts with structured guidance and expert mentoring.',
        image: tut13,
      },
      {
        title: 'CLASS 12 PROGRAM',
        description: 'Master NCERT and beyond with targeted preparation to ace NEET with confidence.',
        image: tut15,
      },
      {
        title: 'CUSTOMIZED PLAN',
        description: 'A learning plan crafted just for you, focusing on your strengths for NEET success.',
        image: tut8,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Strengthen your NEET preparation with detailed NCERT explanations, covering key Biology, Physics, and Chemistry concepts.',
        image: n1,
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Analyze past NEET papers to identify trends and improve your accuracy with real exam-style questions.',
        image: pyq1,
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Solve expertly designed sample papers to simulate the NEET exam and enhance your problem-solving speed.',
        image: sqp1,
      },
      {
        title: 'NCERT BOOKS',
        description: 'Get access to NCERT Biology, Physics, and Chemistry books, the core resources for NEET success.',
        image: nb1,
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Focus on high-yield topics and frequently asked NEET questions to maximize your score.',
        image: imp1,
      },
      {
        title: 'REVISION NOTES',
        description: 'Quick-to-revise notes that summarize key concepts, perfect for last-minute NEET preparation.',
        image: rn1,
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Expand your medical and scientific awareness with relevant GK topics useful for NEET aspirants.',
        image: gk1,
      },
    ],
  },
  'SAT': {
    Courses: [
      {
        title: 'FOUNDATION',
        description: 'Build essential skills in Math, English, and critical thinking to excel in the SAT.',
        image: tut1,
      },
      {
        title: 'CRASH COURSE',
        description: 'High-impact strategies, shortcuts, and practice to boost your SAT score fast!',
        image: tut11,
      },
      {
        title: 'CLASS 11 PROGRAM',
        description: 'Master SAT concepts with personalized mentoring and strategic test-taking techniques.',
        image: tut9,
      },
      {
        title: 'CLASS 12 PROGRAM',
        description: 'Fine-tune your SAT skills with focused prep to achieve your dream university score.',
        image: tut7,
      },
      {
        title: 'CUSTOMIZED PLAN',
        description: 'A flexible, expert-guided SAT prep plan designed to match your learning style.',
        image: tut2,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Utilize NCERT fundamentals to strengthen your SAT Mathematics and Science reasoning skills.',
        image: n2,
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Practice with past SAT papers to understand the exam structure and question styles.',
        image: pyq2,
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Attempt SAT-specific sample tests to refine time management and strategy.',
        image: sqp2,
      },
      {
        title: 'NCERT BOOKS',
        description: 'Enhance conceptual clarity using NCERT textbooks, especially for SAT Math preparation.',
        image: nb2,
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Focus on commonly tested SAT topics to improve accuracy and efficiency.',
        image: imp2,
      },
      {
        title: 'REVISION NOTES',
        description: 'Concise, well-structured notes to revise key concepts quickly before the SAT.',
        image: rn2,
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Stay informed about international affairs, history, and logical reasoning for SAT’s reading and writing sections.',
        image: gk2,
      },
    ],
  },
  'IPMAT': {
    Courses: [
      {
        title: 'FOUNDATION',
        description: 'Develop strong analytical and verbal skills for a winning start in IPMAT preparation.',
        image: tut2,
      },
      {
        title: 'CRASH COURSE',
        description: 'Smart strategies and rapid practice to crack IPMAT with confidence in limited time!',
        image: tut1,
      },
      {
        title: 'CLASS 11 PROGRAM',
        description: 'Master logical reasoning, quantitative aptitude, and verbal ability with expert support.',
        image: tut4,
      },
      {
        title: 'CLASS 12 PROGRAM',
        description: 'Intensive IPMAT training to sharpen your problem-solving and time management skills.',
        image: tut5,
      },
      {
        title: 'CUSTOMIZED PLAN',
        description: 'A strategic, tailor-made plan to help you ace IPMAT with personalized learning.',
        image: tut6,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Strengthen logical reasoning and quantitative skills with NCERT-based study material tailored for IPMAT.',
        image: n3,
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Solve past IPMAT questions to understand exam trends and question difficulty.',
        image: pyq3,
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: ' Prepare with IPMAT sample tests to boost problem-solving accuracy.',
        image: sqp3,
      },
      {
        title: 'NCERT BOOKS',
        description: 'Build strong fundamentals in Mathematics and English with NCERT textbooks.',
        image: nb3,
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Focus on high-scoring questions for quantitative and verbal ability sections.',
        image: imp3,
      },
      {
        title: 'REVISION NOTES',
        description: 'Short, effective notes covering essential topics for quick revision before IPMAT.',
        image: rn3,
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Improve awareness of business trends, economics, and logical reasoning for IPMAT interviews.  ',
        image: gk3,
      },
    ],
  },
  'K12': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: 'Strengthen your core concepts in Physics, Chemistry, and Biology for a head start in competitive exams.',
        image: tut4,
      },
      {
        title: 'IGCSE',
        description: ' Master IGCSE subjects with expert-led sessions and strategic exam preparation.',
        image: tut16,
      },
      {
        title: 'CBSE',
        description: 'Build conceptual clarity and excel in CBSE with structured guidance and practice.',
        image: tut3,
      },
      {
        title: 'NOIS',
        description: 'Flexible learning with expert mentoring to help you ace NIOS exams with confidence.',
        image: tut14,
      },
      {
        title: 'IB',
        description: ' Deep-dive into IB subjects with personalized tutoring and exam-focused strategies.',
        image: tut1,
      },
      
      {
        title: 'SSC',
        description: 'Smart strategies and expert guidance to score high in SSC board exams.',
        image: tut20,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Strengthen subject fundamentals with NCERT textbook explanations for Class 12.',
        image: n4,
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Practice Class 12 board exam questions to improve accuracy and performance.',
        image: pyq4,
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Solve CBSE/ICSE/State Board sample papers for effective exam preparation.',
        image: sqp4,
      },
      {
        title: 'NCERT BOOKS',
        description: 'Access all Class 12 NCERT books for comprehensive learning.',
        image: nb4,
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Revise high-weightage topics and questions frequently asked in board exams.',
        image: imp4,
      },
      {
        title: 'REVISION NOTES',
        description: 'Concise notes covering crucial Class 12 concepts for quick revision.',
        image: rn4,
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Enhance awareness of current affairs and fundamental concepts useful beyond academics.',
        image: gk4,
      },
    ],
  },
  'K11': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: 'Get an early advantage with structured prep in Math, Physics, Chemistry, and Biology.',
        image: tut3,
      },
      {
        title: 'IGCSE',
        description: 'Strengthen problem-solving and analytical skills for top scores in IGCSE.',
        image: tut15,
      },
      {
        title: 'CBSE',
        description: 'Master CBSE concepts with in-depth explanations and expert-led problem-solving.',
        image: tut12,
      },
      {
        title: 'NOIS',
        description: 'Personalized learning plans to make NIOS exam prep smooth and stress-free.',
        image: tut3,
      },
      {
        title: 'IB',
        description: 'Unlock your full potential in IB with subject mastery and test-taking strategies.',
        image: tut5,
      },
      {
        title: 'SSC',
        description: 'Build a strong foundation with expert-led sessions to ace SSC exams.',
        image: tut20,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: ' Master Class 11 NCERT concepts, forming the foundation for competitive exams.',
        image: n5,
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Solve past board papers for better exam preparedness',
        image: pyq5,
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Get hands-on experience with structured sample papers',
        image: sqp5,
      },
      {
        title: 'NCERT BOOKS',
        description: 'Gain in-depth subject knowledge with Class 11 NCERT books.',
        image: nb5,
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Focus on must-know questions crucial for exams and higher studies.',
        image: imp5,
      },
      {
        title: 'REVISION NOTES',
        description: 'Summarized key concepts for fast and effective revision.',
        image: rn5,
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Stay informed with relevant GK topics for holistic learning.',
        image: gk5,
      },
    ],
  },
  'K10': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: 'Sharpen your problem-solving skills early with focused learning in science and math.',
        image: tut2,
      },
      {
        title: 'IGCSE',
        description: 'Strengthen key concepts with expert guidance for outstanding IGCSE results.',
        image: tut4,
      },
      {
        title: 'CBSE',
        description: 'Master Class 10 concepts with structured learning for board exam success.',
        image: tut6,
      },
      {
        title: 'NOIS',
        description: 'Simplified learning with expert strategies to help you ace your NIOS exams.',
        image: tut12,
      },
      {
        title: 'IB',
        description: 'Develop critical thinking and in-depth understanding to excel in IB subjects.',
        image: tut14,
      },
      {
        title: 'SSC',
        description: 'Prepare smartly with expert guidance and score high in your SSC exams.',
        image:tut13,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Grasp key concepts from Class 10 NCERT textbooks for a strong academic foundation.',
        image: n6,
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Solve past board exam papers to understand question trends.',
        image: pyq6,
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Practice structured sample papers to score high in Class 10 exams.',
        image: sqp6,
      },
      {
        title: 'NCERT BOOKS',
        description: ' Study from NCERT books covering all subjects with detailed explanations.',
        image: nb6,
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Revise critical Class 10 topics often repeated in exams.',
        image: imp6,
      },
      {
        title: 'REVISION NOTES',
        description: 'Well-organized notes for effective and quick revisions before exams.',
        image:rn6 ,
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Enhance your awareness of science, history, and current affairs.',
        image: gk6 ,
      },
    ],
  },
  // Update other categories similarly...
  'K9': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: ' Build early conceptual clarity in science and math for future success.',
        image: tut1,
      },
      {
        title: 'IGCSE',
        description: 'Lay a strong foundation in IGCSE subjects with engaging, expert-led lessons.',
        image: tut2,
      },
      {
        title: 'CBSE',
        description: 'Understand key topics with clarity and boost your confidence for Class 9.',
        image: tut11,
      },
      {
        title: 'NOIS',
        description: 'Flexible and structured learning to ensure success in NIOS exams.',
        image: tut12,
      },
      {
        title: 'IB',
        description: 'Gain a deep understanding of IB subjects with expert mentoring.',
        image: tut15,
      },
      {
        title: 'SSC',
        description: 'Strengthen your fundamentals with focused learning to score high in SSC.',
        image: tut18,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Build a solid conceptual base with Class 9 NCERT subject materials.',
        image: n,
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Solve past year papers to improve problem-solving abilities.',
        image: pyq7,
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Get familiar with Class 9 exam patterns through sample papers.',
        image: sqp7,
      },
      {
        title: 'NCERT BOOKS',
        description: 'Strengthen your knowledge with Class 9 NCERT textbooks.',
        image: nb7,
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Focus on essential questions that form the core of Class 9 subjects.',
        image: imp7,
      },
      {
        title: 'REVISION NOTES',
        description: 'Compact, easy-to-understand notes for effective revision.',
        image: rn7,
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Stay updated with fundamental science and general awareness topics.',
        image:gk7 ,
      },
    ],
  },
  'K8': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: 'Start early with a strong foundation in math and science for future exams.',
        image: tut10,
      },
      {
        title: 'IGCSE',
        description: 'Explore key IGCSE concepts with interactive and engaging learning.',
        image: tut9,
      },
      {
        title: 'CBSE',
        description: 'Master Class 8 subjects with expert explanations and easy-to-understand lessons.',
        image: tut20,
      },
      {
        title: 'NOIS',
        description: 'Structured learning plans to help you excel in NIOS curriculum.',
        image: tut16,
      },
      {
        title: 'IB',
        description: 'Develop analytical and problem-solving skills for IB success.',
        image: tut14,
      },
      {
        title: 'SSC',
        description: 'Focused preparation with expert guidance to perform well in SSC exams.',
        image: tut1,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Understand Class 8 concepts in-depth with NCERT materials.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Practice past exam questions to gain confidence.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Attempt sample papers for better exam preparation.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'NCERT BOOKS',
        description: 'Strengthen subject knowledge with NCERT books.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Focus on significant topics to score well in Class 8 exams.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'REVISION NOTES',
        description: 'Summarized notes for effective learning and quick revision.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Broaden your knowledge of world events and science.',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  'K7': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: ' Build curiosity and problem-solving skills in science and math.',
        image: tut13,
      },
      {
        title: 'IGCSE',
        description: ' Fun and interactive lessons to strengthen IGCSE fundamentals.',
        image: tut1,
      },
      {
        title: 'CBSE',
        description: 'Master concepts with engaging learning and expert support.',
        image: tut2,
      },
      {
        title: 'NOIS',
        description: 'Personalized support for smooth learning and excellent results in NIOS.',
        image: tut19,
      },
      {
        title: 'IB',
        description: ' Develop critical thinking and subject mastery for IB success.',
        image: tut15,
      },
      {
        title: 'SSC',
        description: 'Strengthen your core concepts with step-by-step learning for SSC.',
        image: tut14,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Build strong academic fundamentals with Class 7 NCERT books.',
        image: n,
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Solve past papers to enhance understanding.',
        image: pyq,
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Practice structured sample papers for better learning.',
        image: sqp,
      },
      {
        title: 'NCERT BOOKS',
        description: 'Study from detailed NCERT textbooks for Class 7.',
        image: nb,
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Focus on key questions relevant to Class 7 subjects.',
        image: imp,
      },
      {
        title: 'REVISION NOTES',
        description: 'Well-organized notes for quick topic review.',
        image: rn,
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Develop awareness about global and scientific topics.',
        image: gk,
      },
    ],
  },
  'K6': {
    Courses: [
      {
        title: 'FOUNDATION FOR JEE/NEET',
        description: 'Start your journey with engaging lessons in science and math.',
        image: tut12,
      },
      {
        title: 'IGCSE',
        description: 'Build strong basics in IGCSE subjects through interactive learning.',
        image: tut7,
      },
      {
        title: 'CBSE',
        description: 'Fun and easy learning methods to master CBSE concepts with confidence.',
        image: tut17,
      },
      {
        title: 'NOIS',
        description: 'Simplified learning with expert guidance for a strong academic foundation.',
        image: tut3,
      },
      {
        title: 'IB',
        description: 'Exciting lessons to develop curiosity and problem-solving skills in IB.',
        image: tut4,
      },
      {
        title: 'SSC',
        description: 'Learn smarter with expert-backed strategies to excel in SSC.',
        image: tut9,
      },
    ],
    'Study Material': [
      {
        title: 'NCERT',
        description: 'Strengthen fundamental concepts with Class 6 NCERT materials.',
        image: n6,
      },
      {
        title: 'PREVIOUS YEAR QUESTION PAPERS',
        description: 'Solve past questions to improve comprehension skills.',
        image:pyq2 ,
      },
      {
        title: 'SAMPLE QUESTION PAPERS',
        description: 'Gain confidence with sample test papers.',
        image:sqp2 ,
      },
      {
        title: 'NCERT BOOKS',
        description: 'Study from NCERT textbooks to build a strong subject foundation.',
        image: nb2,
      },
      {
        title: 'IMPORTANT QUESTION PAPERS',
        description: 'Revise key topics that form the basics of advanced learning.',
        image: imp2,
      },
      {
        title: 'REVISION NOTES',
        description: 'Simplified notes to help in better understanding and memorization.',
        image: rn2,
      },
      {
        title: 'GENERAL KNOWLEDGE',
        description: 'Enhance your curiosity with knowledge of global events and innovations.',
        image: gk2
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
      <div className="hidden md:flex flex-wrap justify-center gap-2 mb-3 -mt-3 mr-10">
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
            <div className="max-w-4xl mx-auto px-4 mt-1">
  <div className="relative flex gap-2 p-2 bg-white/80 rounded-2xl -ml-8 backdrop-blur-xl shadow-xl w-56 border border-indigo-50 justify-start">
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
