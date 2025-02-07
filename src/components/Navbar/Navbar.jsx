// import React, { useState, useEffect, useRef } from 'react';
// import { IoMdMenu, IoMdArrowDropdown, IoMdClose } from 'react-icons/io';
// import { motion } from 'framer-motion';
// import nniit_logo from '../../assets/logo.png';
// import { IoCalendarOutline, IoCallOutline } from 'react-icons/io5';

// const NavbarMenu = [
//   { id: 2, title: "Courses", link: "#", subMenu: [
//       { title: "JEE", path: "/courses/jee" },
//       { title: "NEET", path: "/courses/neet" },
//       { title: "6 to 12", path: "/courses/k6tok12" },
//     ]},
//   { id: 3, title: "Why Only NNIIT", link: "#" },
//   { id: 4, title: "Study Material", link: "#" },
//   { id: 5, title: "Blog", link: "#" },
// ];

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const toggleDropdown = (menuId) => {
//     setOpenDropdown(openDropdown === menuId ? null : menuId);
//   };

//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
//   }, [isMobileMenuOpen]);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setOpenDropdown(null);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/70 shadow-lg backdrop-blur-md" : "bg-transparent"}`}>
//   <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="container flex justify-between items-center px-11 py-2">
//     <img src={nniit_logo} alt="NNIIT Logo" className="h-12 sm:h-14" />

//     <div className="hidden lg:flex items-center gap-4" ref={menuRef}>
//       {NavbarMenu.map((menu) => (
//         <div key={menu.id} className="relative group">
//           <button 
//             className={`py-2 px-3 flex items-center transition-colors duration-300 ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-secondary"}`}
//             onClick={() => menu.subMenu && toggleDropdown(menu.id)}
//           >
//             {menu.title} {menu.subMenu && <IoMdArrowDropdown className="ml-1" />}
//           </button>
//           {menu.subMenu && openDropdown === menu.id && (
//             <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 w-44">
//               {menu.subMenu.map((sub, index) => (
//                 <a key={index} href={sub.path} className="block px-4 py-2 hover:bg-gray-100">{sub.title}</a>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>

//     <div className="hidden lg:flex items-center gap-3">
//       <button
//         className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-3 py-2 rounded-md text-sm flex items-center gap-2"
//         onClick={() => window.open('https://calendar.app.google/ACitve3sDuj7vWWt5', '_blank')}
//       >
//         Book a Free Demo
//         <IoCalendarOutline className="text-xl animate-[phone-ring_1s_infinite]" />
//       </button>


//       <div className={`flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full group-hover:bg-orange-500 transition duration-300`}>
//           <IoCallOutline className="text-white text-sm group-hover:text-white transition duration-300" />
//         </div>
//         <div>
//           <p className="text-sm text-white hover:text-green-400">Talk to our experts <br /> +91 987654321</p>
//         </div>


//         <button className="px-6 py-2 border border-white text-white rounded-md transition-colors duration-300 hover:border-gray-300">
//       Sign in
//     </button>

//     </div>

//     <div className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//       <IoMdMenu className="text-3xl cursor-pointer" />
//     </div>
//   </motion.div>

//   {isMobileMenuOpen && (
//     <div className="fixed inset-0 bg-gray-100 z-50 p-6 w-4/5 sm:w-3/5 shadow-lg">
//       <div className="flex justify-between items-center mb-6">
//         <img src={nniit_logo} alt="NNIIT Logo" className="h-10" />
//         <IoMdClose className="text-3xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
//       </div>
//       <ul className="space-y-3 text-lg">
//         {NavbarMenu.map((menu) => (
//           <li key={menu.id}>
//             <button className="w-full text-left py-2 border-b border-gray-300 flex items-center justify-between" onClick={() => menu.subMenu && toggleDropdown(menu.id)}>
//               {menu.title} {menu.subMenu && <IoMdArrowDropdown className="ml-1" />}
//             </button>
//             {menu.subMenu && openDropdown === menu.id && (
//               <div className="mt-2 bg-white shadow-md rounded-md py-2">
//                 {menu.subMenu.map((sub, index) => (
//                   <a key={index} href={sub.path} className="block px-4 py-2 hover:bg-gray-100">{sub.title}</a>
//                 ))}
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>

//       <div className="mt-6 space-y-3">
//         <button className="w-full bg-blue-600 text-white py-2 rounded-md text-center" onClick={() => window.open('https://calendar.app.google/ACitve3sDuj7vWWt5', '_blank')}>Book a Free Demo</button>
//         <button className="w-full bg-gray-200 py-2 rounded-md flex items-center justify-center gap-2">
//           <IoCallOutline className="text-gray-600" /> +91 987654321
//         </button>
//         <button className="w-full bg-black text-white py-2 rounded-md text-center" onClick={() => window.open('https://nniit.com/signup', '_blank')}>Sign In</button>
//       </div>
//     </div>
//   )}
// </nav>

//   );
// };

// export default Navbar;





// import React, { useState, useEffect, useRef } from 'react';
// import { IoMdMenu, IoMdArrowDropdown, IoMdClose } from 'react-icons/io';
// import { motion } from 'framer-motion';
// import nniit_logo from '../../assets/logo.png';
// import { IoCalendarOutline, IoCallOutline } from 'react-icons/io5';

// const NavbarMenu = [
//   { id: 2, title: "Courses", link: "#", subMenu: [
//       { title: "JEE", path: "/courses/jee" },
//       { title: "NEET", path: "/courses/neet" },
//       { title: "6 to 12", path: "/courses/k6tok12" },
//     ]},
//   { id: 3, title: "Why Only NNIIT", link: "#" },
//   { id: 4, title: "Study Material", link: "#" },
//   { id: 5, title: "Blog", link: "#" },
// ];

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const toggleDropdown = (menuId) => {
//     setOpenDropdown(openDropdown === menuId ? null : menuId);
//   };

//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
//   }, [isMobileMenuOpen]);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setOpenDropdown(null);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/70 shadow-lg backdrop-blur-md" : "bg-transparent"}`}>
//       <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="container flex justify-between items-center px-11 py-2">
//         <img src={nniit_logo} alt="NNIIT Logo" className="h-12 sm:h-14" />

//         <div className="hidden lg:flex items-center gap-4" ref={menuRef}>
//           {NavbarMenu.map((menu) => (
//             <div key={menu.id} className="relative group">
//               <button 
//                 className={`py-2 px-3 flex items-center font-sf transition-colors duration-300 ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-secondary"}`}
//                 onClick={() => menu.subMenu && toggleDropdown(menu.id)}
//               >
//                 {menu.title} {menu.subMenu && <IoMdArrowDropdown className="ml-1" />}
//               </button>
//               {menu.subMenu && openDropdown === menu.id && (
//                 <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 w-44">
//                   {menu.subMenu.map((sub, index) => (
//                     <a key={index} href={sub.path} className="block px-4 py-2 hover:bg-gray-100">{sub.title}</a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="hidden lg:flex items-center gap-3">
//           <button
//             className=" font-sf bg-gradient-to-r from-indigo-500  to-blue-500 text-white px-3 py-2 rounded-md text-sm flex items-center gap-2"
//             onClick={() => window.open('https://calendar.app.google/ACitve3sDuj7vWWt5', '_blank')}
//           >
//             Book a Free Demo
//             <IoCalendarOutline className="text-xl animate-[phone-ring_1s_infinite]" />
//           </button>

//           <div className={`flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full group-hover:bg-orange-500 transition duration-300`}>
//             <IoCallOutline className="text-white text-sm group-hover:text-white transition duration-300" />
//           </div>
//           <div>
//             <p className={`text-sm font-sf transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"} hover:text-green-400`}>
//               Talk to our experts <br /> +91 987654321
//             </p>
//           </div>

//           <button className={`px-6 py-2 border font-sf transition-colors duration-300 rounded-md ${isScrolled ? "border-black text-black hover:border-gray-500" : "border-white text-white hover:border-gray-300"}`}>
//             Sign in
//           </button>
//         </div>

//         <div className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           <IoMdMenu className="text-3xl cursor-pointer" />
//         </div>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect, useRef } from 'react';
// import { IoMdMenu, IoMdArrowDropdown, IoMdClose } from 'react-icons/io';
// import { motion } from 'framer-motion';
// import nniit_logo from '../../assets/logo.png';
// import { IoCalendarOutline, IoCallOutline } from 'react-icons/io5';
// import { 
//   BookOpen, 
//   GraduationCap, 
//   Users, 
//   BookOpenCheck,
//   Target,
//   School,
//   TestTube,
//   Award,
//   Brain,
//   Sparkles,
//   ChevronRight
// } from 'lucide-react';

// const NavbarMenu = [
//   { 
//     id: 2, 
//     title: "Courses", 
//     link: "#", 
//     subMenu: [
//       { title: "JEE", path: "/courses/jee" },
//       { title: "NEET", path: "/courses/neet" },
//       { title: "6 to 12", path: "/courses/k6tok12" },
//     ],
//     megaMenu: {
//       sections: [
//         {
//           title: "Long Term Courses",
//           icon: <GraduationCap className="w-6 h-6 text-orange-500" />,
//           items: [
//             { 
//               name: "Guaranteed Success Program", 
//               icon: <Award className="w-5 h-5 text-green-500" />,
//               subtext: "Guaranteed improvement in marks or get your fees back",
//               link: "#" 
//             },
//             { 
//               name: "One-to-one LIVE classes",
//               icon: <Users className="w-5 h-5 text-blue-500" />,
//               subtext: "Learn one-to-one with a teacher for a personalised experience",
//               link: "#" 
//             },
//             { 
//               name: "Topic specific courses",
//               icon: <BookOpenCheck className="w-5 h-5 text-purple-500" />,
//               subtext: "Master any topic at just ₹1",
//               link: "#" 
//             }
//           ]
//         },
//         {
//           title: "Find courses by class",
//           icon: <BookOpen className="w-6 h-6 text-blue-500" />,
//           items: [
//             { name: "Repeater Science PCM", link: "#", emoji: "" },
//             { name: "Repeater Science PCB", link: "#", emoji: "" },
//             { name: "Class 12 Science PCM", link: "#", emoji: "" },
//             { name: "Class 12 Science PCB", link: "#", emoji: "" },
//             { name: "Class 11 Science PCM", link: "#", emoji: "" },
//             { name: "Class 11 Science PCB", link: "#", emoji: "" },
//             { name: "Class 10", link: "#", emoji: "" },
//             { name: "Class 9", link: "#", emoji: "" },
//             { name: "Class 8", link: "#", emoji: "" }
//           ]
//         },
//         {
//           title: "Find courses by target",
//           icon: <Target className="w-6 h-6 text-red-500" />,
//           items: [
//             { 
//               name: "School tuition", 
//               subtext: "For Class 3-12", 
//               link: "#",
//               // icon: <School className="w-5 h-5 text-blue-500" />,
//               relatedData: {
//                 title: "School Boards",
//                 items: [
//                   { name: "CBSE", subtext: "Class 6-12", link: "#" },
//                   { name: "ICSE", subtext: "Class 6-10", link: "#" },
//                   { name: "All Boards", subtext: "Class 3-5", link: "#" },
//                   { name: "Maharashtra Board", subtext: "Class 8-10", link: "#" }
//                 ]
//               }
//             },
//             { 
//               name: "JEE", 
//               subtext: "For Class 11-13", 
//               link: "/courses/jee",
//               // icon: <TestTube className="w-5 h-5 text-green-500" />,
//               relatedData: {
//                 title: "JEE Programs",
//                 items: [
//                   { name: "JEE Main", subtext: "Complete Course", link: "#" },
//                   { name: "JEE Advanced", subtext: "Advanced Preparation", link: "#" },
//                   { name: "Crash Course", subtext: "Quick Revision", link: "#" }
//                 ]
//               }
//             },
//             { 
//               name: "NEET", 
//               subtext: "For Class 11-13", 
//               link: "/courses/neet",
//               // icon: <Brain className="w-5 h-5 text-purple-500" />,
//               relatedData: {
//                 title: "NEET Programs",
//                 items: [
//                   { name: "Complete NEET Course", subtext: "Full Preparation", link: "#" },
//                   { name: "Test Series", subtext: "Practice Tests", link: "#" },
//                   { name: "Topic-wise Course", subtext: "Focus Learning", link: "#" }
//                 ]
//               }
//             },
//             { 
//               name: "Olympiad", 
//               subtext: "For Class 3-13", 
//               link: "#",
//               // icon: <Sparkles className="w-5 h-5 text-yellow-500" />,
//               relatedData: {
//                 title: "Olympiad Programs",
//                 items: [
//                   { name: "Mathematics", subtext: "Class 6-12", link: "#" },
//                   { name: "Science", subtext: "Class 6-12", link: "#" },
//                   { name: "English", subtext: "Class 3-12", link: "#" }
//                 ]
//               }
//             }
//           ]
//         }
//       ]
//     }
//   },
//   { id: 3, title: "Why Only NNIIT", link: "#" },
//   { id: 4, title: "Study Material", link: "#" },
//   { id: 5, title: "Blog", link: "#" },
// ];

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [hoveredMenu, setHoveredMenu] = useState(null);
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const menuRef = useRef(null);
//   const timeoutRef = useRef(null);

//   const handleMouseEnter = (menuId) => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setHoveredMenu(menuId);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setHoveredMenu(null);
//       setHoveredItem(null);
//     }, 100);
//   };

//   const handleItemHover = (item) => {
//     setHoveredItem(item);
//   };

//   const toggleDropdown = (menuId) => {
//     setOpenDropdown(openDropdown === menuId ? null : menuId);
//   };

//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
//   }, [isMobileMenuOpen]);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setOpenDropdown(null);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/70 shadow-lg backdrop-blur-md" : "bg-transparent"}`}>
//       <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="container flex justify-between items-center px-11 py-2">
//         <img src={nniit_logo} alt="NNIIT Logo" className="h-12 sm:h-14" />

//         <div className="hidden lg:flex items-center gap-4" ref={menuRef}>
//   {NavbarMenu.map((menu) => (
//     <div 
//       key={menu.id} 
//       className="relative group"
//       onMouseEnter={() => handleMouseEnter(menu.id)}
//       onMouseLeave={handleMouseLeave}
//     >
//       <button 
//         className={`py-2 px-3 flex items-center font-sf transition-colors duration-300 ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-secondary"}`}
//         onClick={() => menu.subMenu && toggleDropdown(menu.id)}
//       >
//         {menu.title} {menu.subMenu && <IoMdArrowDropdown className="ml-1" />}
//       </button>
      
//       {menu.megaMenu && hoveredMenu === menu.id && (
//         <div className="absolute left-0 top-full pt-3 w-[900px] -translate-x-1/4">
//           <div className="bg-white rounded-sm shadow-xl p-4 grid grid-cols-3 gap-8 border-t border-gray-300">
//             {menu.megaMenu.sections.map((section, idx) => (
//               <div 
//                 key={idx} 
//                 className={`space-y-2 border-gray-300 ${idx !== menu.megaMenu.sections.length - 1 ? 'border-r border-gray-300 pr-4' : ''}`}
//               >
//                 <div className="flex items-center gap-2">
//                   {section.icon}
//                   <h3 className="font-semibold text-black text-[19px]">{section.title}</h3>
//                 </div>
//                 <div className="space-y-0">
//                   {section.items.map((item, itemIdx) => (
//                     <a
//                       key={itemIdx}
//                       href={item.link}
//                       className="block hover:bg-gray-50 p-2 rounded-md transition-colors duration-150"
//                       onMouseEnter={() => handleItemHover(item)}
//                       onMouseLeave={() => handleItemHover(null)}
//                     >
//                       <div className="flex items-center gap-2">
//                         {item.icon && item.icon}
//                         {item.emoji && <span className="text-lg">{item.emoji}</span>}
//                         <div>
//                           <div className="text-gray-700 font-medium flex items-center gap-2">
//                             {item.name}
//                             {item.relatedData && <ChevronRight className="w-4 h-4" />}
//                           </div>
//                           {item.subtext && (
//                             <div className="text-sm text-gray-500">{item.subtext}</div>
//                           )}
//                         </div>
//                       </div>

//                       {item.relatedData && hoveredItem === item && (
//                         <div className="absolute left-full top-0 ml-4 w-52 bg-gray-100 rounded-sm shadow-lg p-2">
//                           <h4 className="font-semibold text-gray-800 mb-2">{item.relatedData.title}</h4>
//                           <div className="space-y-1">
//                             {item.relatedData.items.map((relatedItem, relIdx) => (
//                               <a
//                                 key={relIdx}
//                                 href={relatedItem.link}
//                                 className="block hover:bg-gray-50 p-1 rounded-md"
//                               >
//                                 <div className="text-gray-700 font-semibold">{relatedItem.name}</div>
//                                 {relatedItem.subtext && (
//                                   <div className="text-sm text-gray-500">{relatedItem.subtext}</div>
//                                 )}
//                               </a>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {menu.subMenu && openDropdown === menu.id && !menu.megaMenu && (
//         <div className="absolute top-full left-0 mt-2 bg-black shadow-md rounded-md py-2 w-28">
//           {menu.subMenu.map((sub, index) => (
//             <a key={index} href={sub.path} className="block px-4 py-2 hover:bg-gray-100">{sub.title}</a>
//           ))}
//         </div>
//       )}
//     </div>
//   ))}
// </div>

//         <div className="hidden lg:flex items-center gap-3">
//           <button
//             className="font-sf bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-3 py-2 rounded-md text-sm flex items-center gap-2"
//             onClick={() => window.open('https://calendar.app.google/ACitve3sDuj7vWWt5', '_blank')}
//           >
//             Book a Free Demo
//             <IoCalendarOutline className="text-xl animate-[phone-ring_1s_infinite]" />
//           </button>

//           <div className={`flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full group-hover:bg-orange-500 transition duration-300`}>
//             <IoCallOutline className="text-white text-sm group-hover:text-white transition duration-300" />
//           </div>
//           <div>
//             <p className={`text-sm font-sf transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"} hover:text-green-400`}>
//               Talk to our experts <br /> +91 987654321
//             </p>
//           </div>

//           <button className={`px-6 py-2 border font-sf transition-colors duration-300 rounded-md ${isScrolled ? "border-black text-black hover:border-gray-500" : "border-white text-white hover:border-gray-300"}`}>
//             Sign in
//           </button>
//         </div>

//         <div className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           <IoMdMenu className="text-3xl cursor-pointer" />
//         </div>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect, useRef } from 'react';
import { IoMdMenu, IoMdArrowDropdown, IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import nniit_logo from '../../assets/logo.png';
import { IoCalendarOutline, IoCallOutline } from 'react-icons/io5';
import { Search, Plus, BookOpen, Users, Award, Brain, MessageSquare, ChevronRight } from 'lucide-react';

const boardSubItems = {
  'CBSE': [
    { label: 'Science Stream', subLabel: 'Class 11-12', link: '#' },
    { label: 'Commerce Stream', subLabel: 'Class 11-12', link: '#' },
    { label: 'Foundation', subLabel: 'Class 6-10', link: '#' },
    { label: 'Test Series', subLabel: 'All Classes', link: '#' },
  ],
  'ICSE': [
    { label: 'Middle School', subLabel: 'Class 6-8', link: '#' },
    { label: 'High School', subLabel: 'Class 9-10', link: '#' },
    { label: 'Olympiad Preparation', subLabel: 'All Classes', link: '#' },
  ],
  'All Boards': [
    { label: 'Early Education', subLabel: 'Class 3-5', link: '#' },
    { label: 'Basic Concepts', subLabel: 'All Subjects', link: '#' },
    { label: 'Activity Based Learning', subLabel: 'All Classes', link: '#' },
  ],
  'Maharashtra Board': [
    { label: 'SSC Preparation', subLabel: 'Class 8-10', link: '#' },
    { label: 'Scholarship Exams', subLabel: 'All Classes', link: '#' },
    { label: 'Language Courses', subLabel: 'All Classes', link: '#' },
  ],
};

const NavbarMenu = [
  { 
    id: 2, 
    title: "Courses", 
    link: "#", 
    subMenu: [
      { title: "JEE", path: "/courses/jee" },
      { title: "NEET", path: "/courses/neet" },
      { title: "6 to 12", path: "/courses/k6tok12" },
    ],
    megaMenu: {
      featured: [
        {
          title: "Long Term Courses",
          description: "Guaranteed improvement in marks or get your fees back",
          icon: BookOpen,
          link: "#"
        },
        {
          title: "One-to-one LIVE classes",
          description: "Learn one-to-one with a teacher for a personalised experience",
          icon: Users,
          link: "#"
        },
        {
          title: "Topic specific courses",
          description: "Master any topic at just ₹1",
          icon: Award,
          link: "#"
        }
      ],
      columns: [
        {
          title: "Find courses by class",
          icon: Plus,
          items: [
            { label: "Repeater", subLabel: "Science PCM", link: "#" },
            { label: "Repeater", subLabel: "Science PCB", link: "#" },
            { label: "Class 12", subLabel: "Science PCM", link: "#" },
            { label: "Class 12", subLabel: "Science PCB", link: "#" },
            { label: "Class 12", subLabel: "Commerce", link: "#" },
            { label: "Class 11", subLabel: "Science PCM", link: "#" },
            { label: "Class 11", subLabel: "Science PCB", link: "#" },
            { label: "Class 11", subLabel: "Commerce", link: "#" },
            { label: "Class 10", link: "#" },
            { label: "Class 9", link: "#" },
            { label: "Class 8", link: "#" },
            { label: "Class 7", link: "#" },
            { label: "Class 6", link: "#" },
          ]
        },
        {
          title: "Find courses by target",
          icon: Search,
          items: [
            { label: "School tuition", subLabel: "For Class 3-12", link: "#" },
            { label: "Offline Centres", subLabel: "Class 8-12", link: "#" },
            { label: "JEE", subLabel: "For Class 11-13", link: "/courses/jee" },
            { label: "NEET", subLabel: "For Class 11-13", link: "/courses/neet" },
            { label: "Test Series", subLabel: "Class 9-13", link: "#" },
            { label: "Olympiad", subLabel: "For Class 3-13", link: "#" },
            { label: "JEE/NEET Foundation", subLabel: "For Class 8-10", link: "#" },
            { label: "Instasolve - 24x7 Expert Support", subLabel: "Class 6-13", link: "#" },
          ]
        },
        {
          title: "Boards",
          icon: Brain,
          items: [
            { label: "CBSE", subLabel: "Class 6-12", link: "#", hasSubMenu: true },
            { label: "ICSE", subLabel: "Class 6-10", link: "#", hasSubMenu: true },
            { label: "All Boards", subLabel: "Class 3-5", link: "#", hasSubMenu: true },
            { label: "Maharashtra Board", subLabel: "Class 8-10", link: "#", hasSubMenu: true },
          ]
        }
      ]
    }
  },
  { id: 3, title: "Why Only NNIIT", link: "#" },
  { id: 4, title: "Study Material", link: "#" },
  { id: 5, title: "Blog", link: "#" },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredBoard, setHoveredBoard] = useState(null);
  const menuRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const boardHoverTimeoutRef = useRef(null);

  const toggleDropdown = (menuId) => {
    setOpenDropdown(openDropdown === menuId ? null : menuId);
  };

  const handleMenuEnter = (menuId) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredMenu(menuId);
  };

  const handleMenuLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
      setHoveredBoard(null);
    }, 300);
  };

  const handleBoardEnter = (board) => {
    if (boardHoverTimeoutRef.current) {
      clearTimeout(boardHoverTimeoutRef.current);
    }
    setHoveredBoard(board);
  };

  const handleBoardLeave = () => {
    boardHoverTimeoutRef.current = setTimeout(() => {
      if (!document.querySelector('.board-submenu:hover')) {
        setHoveredBoard(null);
      }
    }, 200);
  };
  
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/70 shadow-lg backdrop-blur-md" : "bg-transparent"}`}>
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="container flex justify-between items-center px-11 py-2">
        <img src={nniit_logo} alt="NNIIT Logo" className="h-12 sm:h-14" />

        <div className="hidden lg:flex items-center gap-4" ref={menuRef}>
          {NavbarMenu.map((menu) => (
            <div 
              key={menu.id} 
              className="relative group"
              onMouseEnter={() => handleMenuEnter(menu.id)}
              onMouseLeave={handleMenuLeave}
            >
              <button 
                className={`py-2 px-3 flex items-center font-sf transition-colors duration-300 ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-secondary"}`}
                onClick={() => menu.subMenu && toggleDropdown(menu.id)}
              >
                {menu.title} {menu.subMenu && <IoMdArrowDropdown className="ml-1" />}
              </button>
              
              {menu.megaMenu && hoveredMenu === menu.id && (
                <div 
                  className="absolute top-full left-28 mt-3 bg-white shadow-xl rounded-lg w-[900px] -translate-x-1/4"
                  onMouseEnter={() => handleMenuEnter(menu.id)}
                  onMouseLeave={handleMenuLeave}
                >
                  {menu.megaMenu.featured && (
                    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-t-sm border-b border-gray-100">
                      {menu.megaMenu.featured.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <a
                            href={item.link}
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-all duration-200 cursor-pointer group"
                          >
                            <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-200">
                              <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{item.title}</h3>
                              <p className="text-sm text-gray-600 mt-0.5">{item.description}</p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  )}
                  <div className="grid grid-cols-4 p-2 relative ">
                    {menu.megaMenu.columns.map((column, idx) => {
                      const Icon = column.icon;
                      return (
                        <div 
                        key={idx} 
                        className={`space-y-2 px-2 ${column.title === "Boards" ? "relative group/board" : "border-r border-gray-200"}`}
                        onMouseEnter={() => column.title === "Boards" && handleBoardEnter(item.label)}
                        onMouseLeave={() => column.title === "Boards" && handleBoardLeave()}
                      >                      
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-blue-600" />
                            <h3 className="font-semibold text-gray-900">{column.title}</h3>
                          </div>
                          <div className="space-y-0.5 overflow-y-auto scrollbar-hide" style={{ maxHeight: '250px' }}>
                            {column.items.map((item, itemIdx) => (
                              <div
                                key={itemIdx}
                                className={`relative ${column.title === "Boards" ? 'group/board' : ''}`}
                                onMouseEnter={() => column.title === "Boards" && handleBoardEnter(item.label)}
                                onMouseLeave={() => column.title === "Boards" && handleBoardLeave()}
                              >
                                <a
                                  href={item.link}
                                  className="flex items-center justify-between py-1.5 px-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                >
                                  <div className="flex flex-col">
                                    <span className="text-gray-900">{item.label}</span>
                                    {item.subLabel && (
                                      <span className="text-sm text-gray-500">{item.subLabel}</span>
                                    )}
                                  </div>
                                  {/* {item.hasSubMenu && (
                                    // <ChevronRight className="w-4 h-4 text-gray-400 group-hover/board:text-blue-600" />
                                  )} */}
                                </a>
                                                                                                                                                                                {column.title === "Boards" && hoveredBoard === item.label && (
                                    <div 
                                      className="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg p-4 min-w-[280px] board-submenu"
                                      onMouseEnter={() => handleBoardEnter(item.label)}
                                      onMouseLeave={handleBoardLeave}
                                    >
                                      <h4 className="font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                                        {item.label} Courses
                                      </h4>
                                      <div className="space-y-2">
                                        {boardSubItems[item.label].map((subItem, subIdx) => (
                                          <a
                                            key={subIdx}
                                            href={subItem.link}
                                            className="flex flex-col py-1.5 px-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                          >
                                            <span className="text-gray-900">{subItem.label}</span>
                                            {subItem.subLabel && (
                                              <span className="text-sm text-gray-500">{subItem.subLabel}</span>
                                            )}
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {menu.subMenu && openDropdown === menu.id && !menu.megaMenu && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 w-44">
                  {menu.subMenu.map((sub, index) => (
                    <a key={index} href={sub.path} className="block px-4 py-2 hover:bg-gray-100">{sub.title}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            className="font-sf bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-3 py-2 rounded-md text-sm flex items-center gap-2"
            onClick={() => window.open('https://calendar.app.google/ACitve3sDuj7vWWt5', '_blank')}
          >
            Book a Free Demo
            <IoCalendarOutline className="text-xl animate-[phone-ring_1s_infinite]" />
          </button>

          <div className={`flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full group-hover:bg-orange-500 transition duration-300`}>
            <IoCallOutline className="text-white text-sm group-hover:text-white transition duration-300" />
          </div>
          <div>
            <p className={`text-sm font-sf transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"} hover:text-green-400`}>
              Talk to our experts <br /> +91 987654321
            </p>
          </div>

          <button className={`px-6 py-2 border font-sf transition-colors duration-300 rounded-md ${isScrolled ? "border-black text-black hover:border-gray-500" : "border-white text-white hover:border-gray-300"}`}>
            Sign in
          </button>
        </div>

        <div className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <IoMdMenu className="text-3xl cursor-pointer" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;