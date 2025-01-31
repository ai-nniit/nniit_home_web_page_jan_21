// import React, { useState, useEffect, useRef } from 'react';
// import { IoMdMenu, IoMdArrowDropdown, IoIosCall, IoMdClose } from 'react-icons/io'; // Fixed import
// import { motion } from 'framer-motion';
// // import Logo from '../../assets/nniit_logo.png';
// import nniit_logo from '../../assets/logo.png';
// import { IoCalendarOutline, IoCallOutline } from 'react-icons/io5';

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
//   },
//   {
//     id: 3,
//     title: "Why Only NNIIT",
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "Study Material",
//     link: "#",
//   },
//   {
//     id: 5,
//     title: "Blog",
//     link: "#",
//   },
// ];

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu
//   const menuRef = useRef(null); // Create a ref for the menu

//   const toggleDropdown = (menuId) => {
//     setOpenDropdown(openDropdown === menuId ? null : menuId);
//   };

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden"; // Disable scrolling
//     } else {
//       document.body.style.overflow = ""; // Re-enable scrolling
//     }
//   }, [isMobileMenuOpen]);
  

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setOpenDropdown(null); // Close dropdown
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Toggle mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/70 shadow-lg backdrop-blur-md" : "bg-transparent"}`}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="container flex justify-between items-center"
//       >
//         {/* Logo section */}
//         <div className="flex items-center">
//           <img src={nniit_logo} alt="NNIIT Logo" className="h-14 mr-2" />
//         </div>

//         {/* Menu section for larger screens */}
//         <div className="hidden lg:block" ref={menuRef}>
//           <ul className="flex items-center gap-3 text-sm py-1">
//             {NavbarMenu.map((menu) => (
//               <li key={menu.id} className="relative">
//                 <div
//                   onClick={() => menu.subMenu && toggleDropdown(menu.id)}
//                   className="py-1 px-2 hover:text-secondary relative group flex items-center cursor-pointer"
//                 >
//                   {menu.title}
//                   {menu.subMenu && <IoMdArrowDropdown className="ml-1" />}
//                 </div>

//                 {/* Dropdown for Courses */}
//                 {menu.subMenu && openDropdown === menu.id && (
//                   <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-6 w-48">
//                     {menu.subMenu.map((subItem, index) => (
//                       <a
//                         key={index}
//                         href={subItem.path}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         {subItem.title}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </li>
//             ))}
//             <button
//               type="submit"
//               className="primary-btn flex items-center gap-2 group justify-center"
//               onClick={() => window.open('https://calendar.app.google/ACitve3sDuj7vWWt5', '_blank')}
//             >
//               Book a Free Demo
//               <IoCalendarOutline className="text-xl animate-[phone-ring_1s_infinite]" />
//             </button>

// {/* <motion.button
//   className="primary-btn flex items-center gap-2 group justify-center bg-white/20 backdrop-blur-sm border border-white/40 text-white px-4 py-2 rounded-md hover:bg-white/50 transition shadow-lg hover:shadow-white/70"
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   type="submit"
//   onClick={() => window.open("https://calendar.google.com/calendar/u/0/r/eventedit?text=Free+Demo", "_blank")}
// >
//   Book a Free Demo
//   <IoCalendarOutline className="text-xl animate-[phone-ring_1s_infinite]" />
// </motion.button> */}

//             <button
//               type="button"
//               className="primary-btn flex items-center gap-3 group px-4 py-2 bg-white w-18 h-12 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
//               onClick={() => window.open('https://calendar.app.google/ACitve3sDuj7vWWt5', '_blank')}
//             >
//               <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full group-hover:bg-orange-500 transition duration-300">
//                 <IoCallOutline className="text-white text-sm group-hover:text-white transition duration-300" />
//               </div>

//               <div>
//                 <p className="text-sm text-gray-500">Talk to our experts <br /> +91 987654321</p>
//               </div>
//             </button>
//             {/* <button
//               className="primary-btn px-3 py-1 text-md"
//               onClick={() => window.open("https://nniit.com/signup", "_blank")}
//             >
//               Sign In
//             </button> */}
// <button
//   className="primary-btn px-3 py-1 text-md flex items-center gap-2 group justify-center bg-white/30 backdrop-blur-sm border border-white/40 text-white rounded-md hover:bg-white/50 transition shadow-lg hover:shadow-white/70"
//   onClick={() => window.open("https://nniit.com/signup", "_blank")}
// >
//   Sign In
// </button>
//           </ul>
//         </div>

//         {/* Mobile Hamburger menu section */}
//         <div className="lg:hidden" onClick={toggleMobileMenu}>
//           <IoMdMenu className="text-4xl cursor-pointer" />
//         </div>
//       </motion.div>

//       {/* Mobile menu that appears on clicking hamburger */}
//       {isMobileMenuOpen && (
//   <div
//     className={`fixed top-0 left-0 w-3/4 h-full bg-gray-100 z-[9999] shadow-lg transition-transform duration-300 transform ${
//       isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//     }`} // Ensure transition happens horizontally from left to right
//   >
//     <div className="flex justify-between items-center p-4">
//       <IoMdClose className="text-4xl cursor-pointer" onClick={toggleMobileMenu} />
//     </div>
//     <ul className="px-4 py-2 text-lg">
//       {NavbarMenu.map((menu) => (
//         <li key={menu.id} className="relative">
//           <div
//             onClick={() => menu.subMenu && toggleDropdown(menu.id)}
//             className="py-3 px-2 hover:text-white relative group flex items-center cursor-pointer border-b border-gray-200"
//           >
//             {menu.title}
//             {menu.subMenu && <IoMdArrowDropdown className="ml-1" />}
//           </div>

//           {/* Dropdown for Courses */}
//           {menu.subMenu && openDropdown === menu.id && (
//             <div className="mt-2 bg-white shadow-lg rounded-md py-2 w-full">
//               {menu.subMenu.map((subItem, index) => (
//                 <a
//                   key={index}
//                   href={subItem.path}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   {subItem.title}
//                 </a>
//               ))}
//             </div>
//           )}
//         </li>
//       ))}
//       <button
//         type="submit"
//         className="primary-btn flex items-center gap-2 group justify-center w-full py-2 mt-4"
//         onClick={() => window.open('https://calendar.app.google/ACitve3sDuj7vWWt5', '_blank')}
//       >
//         Book a Free Demo
//         <IoCalendarOutline className="text-xl animate-[phone-ring_1s_infinite]" />
//       </button>

//       <button
//         className="primary-btn px-3 py-1 text-md mt-4 w-full"
//         onClick={() => window.open("https://nniit.com/signup", "_blank")}
//       >
//         Sign In
//       </button>
//     </ul>
//   </div>
// )}
//     </nav>
//   );
// };

// export default Navbar;






import React, { useState, useEffect, useRef } from 'react';
import { IoMdMenu, IoMdArrowDropdown, IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import nniit_logo from '../../assets/logo.png';
import { IoCalendarOutline, IoCallOutline } from 'react-icons/io5';

const NavbarMenu = [
  { id: 2, title: "Courses", link: "#", subMenu: [
      { title: "JEE", path: "/courses/jee" },
      { title: "NEET", path: "/courses/neet" },
      { title: "6 to 12", path: "/courses/k6tok12" },
    ]},
  { id: 3, title: "Why Only NNIIT", link: "#" },
  { id: 4, title: "Study Material", link: "#" },
  { id: 5, title: "Blog", link: "#" },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = (menuId) => {
    setOpenDropdown(openDropdown === menuId ? null : menuId);
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
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="container flex justify-between items-center px-4 py-2">
        <img src={nniit_logo} alt="NNIIT Logo" className="h-12 sm:h-14" />

        <div className="hidden lg:flex items-center gap-4" ref={menuRef}>
          {NavbarMenu.map((menu) => (
            <div key={menu.id} className="relative group">
              <button className="py-2 px-3 hover:text-secondary flex items-center" onClick={() => menu.subMenu && toggleDropdown(menu.id)}>
                {menu.title} {menu.subMenu && <IoMdArrowDropdown className="ml-1" />}
              </button>
              {menu.subMenu && openDropdown === menu.id && (
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
          <button className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm" onClick={() => window.open('https://calendar.app.google/ACitve3sDuj7vWWt5', '_blank')}>Book a Free Demo</button>
          <button className="bg-gray-200 px-3 py-2 rounded-md flex items-center gap-2">
            <IoCallOutline className="text-gray-600" /> +91 987654321
          </button>
          <button className="bg-black text-white px-3 py-2 rounded-md text-sm" onClick={() => window.open('https://nniit.com/signup', '_blank')}>Sign In</button>
        </div>

        <div className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <IoMdMenu className="text-3xl cursor-pointer" />
        </div>
      </motion.div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-100 z-50 p-6 w-4/5 sm:w-3/5 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <img src={nniit_logo} alt="NNIIT Logo" className="h-10" />
            <IoMdClose className="text-3xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
          </div>
          <ul className="space-y-3 text-lg">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <button className="w-full text-left py-2 border-b border-gray-300 flex items-center justify-between" onClick={() => menu.subMenu && toggleDropdown(menu.id)}>
                  {menu.title} {menu.subMenu && <IoMdArrowDropdown className="ml-1" />}
                </button>
                {menu.subMenu && openDropdown === menu.id && (
                  <div className="mt-2 bg-white shadow-md rounded-md py-2">
                    {menu.subMenu.map((sub, index) => (
                      <a key={index} href={sub.path} className="block px-4 py-2 hover:bg-gray-100">{sub.title}</a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 rounded-md text-center" onClick={() => window.open('https://calendar.app.google/ACitve3sDuj7vWWt5', '_blank')}>Book a Free Demo</button>
            <button className="w-full bg-gray-200 py-2 rounded-md flex items-center justify-center gap-2">
              <IoCallOutline className="text-gray-600" /> +91 987654321
            </button>
            <button className="w-full bg-black text-white py-2 rounded-md text-center" onClick={() => window.open('https://nniit.com/signup', '_blank')}>Sign In</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
