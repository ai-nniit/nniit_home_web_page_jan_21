// import React from "react";
// import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
// import { TbWorldWww } from "react-icons/tb";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <footer className="py-28 bg-[#f7f7f7]">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="container"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
//           {/* first section */}
//           {/* <div className="space-y-4 max-w-[300px]">
//             <h1 className="text-2xl font-bold">NNIIT - Power of Knowledge</h1>
//             <p className="text-dark2">
//             Nniit(Gsna Education private limited) is the first of its kind in India. An organization that works closely with classroom teachers, the media, and technology solutions to create a high-quality, affordable and accessible education for Indian students. We have created a platform that helps Indian students to become the best they can be - an app that allows them to increase their academic achievement and prepare for the future in a variety of fields and disciplines.
//             </p>
//           </div> */}
//           <div className="space-y-4 max-w-[300px]">
//             <h1 className="text-2xl font-bold">Get In Touch</h1>
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 placeholder="Enter your email"
//                 className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
//               />
//               <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
//                 Go
//               </button>
//             </div>
//             <div className="flex space-x-6 py-3">
//               <a href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0">
//                 <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
//               </a>
//               <a href="https://www.instagram.com/">
//                 <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
//               </a>
//               <a href="https://thecodingjourney.com/">
//                 <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
//               </a>
//               <a href="https://www.youtube.com/@TheCodingJourney">
//                 <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
//               </a>
//             </div>
//           </div>
//           {/* second section */}
//           <div className="grid grid-cols-2 gap-10">
//             <div className="space-y-4">
//               <h1 className="text-2xl font-bold">Company</h1>
//               <div className="text-dark2">
//                 <ul className="space-y-2 text-lg">
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     About Us
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Contact Us
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     NNIIT blog
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     News
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Child Safety
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Why NNIIT
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Our Results
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Career
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Help India Learn
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <h1 className="text-2xl font-bold">Other Links</h1>
//               <div className="text-dark2">
//                 <ul className="space-y-2 text-lg">
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Free Live Classes
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Why Teach with NNIIT
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Try WAVE
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Try WhiteBoard
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     NNIIT improvement promise
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Micro courses
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Benefits
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Engineering Blog
//                   </li>
//                 </ul>
//               </div>
//             </div>
            
//           </div>
//           {/* third section */}
          
//           <div className="space-y-4">
//               <h1 className="text-2xl font-bold">Courses</h1>
//               <div className="text-dark2">
//                 <ul className="space-y-2 text-lg">
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Free Live Classes
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Why Teach with NNIIT
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Try WAVE
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Try WhiteBoard
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     NNIIT improvement promise
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Micro courses
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Benefits
//                   </li>
//                   <li className="cursor-pointer hover:text-secondary duration-200">
//                     Engineering Blog
//                   </li>
//                 </ul>
//               </div>
//             </div>
//         </div>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import FooterColumn from './FooterColumn';
import AppDownload from './AppDownload';
import CounselingCard from './CounselingCard';
import ContactInfo from './ContactInfo';
import { companyLinks, otherLinks, courseLinks, superKidsLinks, course } from './FooterLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12  pb-8 px-4 md:px-8">
      <div className="max-w-7xl px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {/* Column 1: App Download & Counseling */}
          <div className="space-y-8">
            <AppDownload />
            <CounselingCard />
          </div>

          {/* Column 2: Company Links */}
          <FooterColumn 
            title="Company"
            links={companyLinks}
          />

          {/* Column 3: Other Links & Courses */}
          <div className="">
            <FooterColumn 
              title="Other Links"
              links={otherLinks}
            />
            {/* <FooterColumn 
              title="Courses"
              links={courseLinks}
            /> */}
            {/* <FooterColumn 
              title="Vedantu Super Kids"
              links={superKidsLinks}
            /> */}
            {/* <div className=''>
              <FooterColumn
               title="Courses"
               links={course}
              />
            </div> */}
          </div>
        </div>
        <ContactInfo />
      </div>
    </footer>
  );
};

export default Footer;
