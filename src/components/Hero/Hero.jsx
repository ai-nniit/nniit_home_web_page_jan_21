// import { FiArrowRight, FiZap } from "react-icons/fi";
// import React, { useState, useEffect, useRef } from "react";
// import Navbar from "../Navbar/Navbar";
// import { IoIosArrowRoundForward } from "react-icons/io";
// //  import Blob from "../../assets/blob.svg";
// import { motion } from "framer-motion";
// //import BannerCarousel from "../Banner/Banner";
// import { FaGraduationCap, FaMicroscope } from "react-icons/fa";
// import ai_video from "../../assets/videoplayblack.mp4";
// // import background_image from '../../assets/huly_background_image.png';

// const indianStates = [
//   "Andaman and Nicobar Islands",
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chandigarh",
//   "Chhattisgarh",
//   "Dadra and Nagar Haveli and Daman and Diu",
//   "Delhi",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jammu and Kashmir",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Ladakh",
//   "Lakshadweep",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Mizoram",
//   "Nagaland",
//   "Odisha",
//   "Puducherry",
//   "Punjab",
//   "Rajasthan",
//   "Sikkim",
//   "Tamil Nadu",
//   "Telangana",
//   "Tripura",
//   "Uttar Pradesh",
//   "Uttarakhand",
//   "West Bengal"
// ];


// // Reusable CountUp Hook
// const useCountUp = (target, duration, startCount) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!startCount) return;

//     const increment = Math.ceil(target / (duration / 10)); // Increment value per interval
//     let current = 0;

//     const interval = setInterval(() => {
//       current += increment;
//       if (current >= target) {
//         clearInterval(interval);
//         setCount(target); // Ensure the final value is set
//       } else {
//         setCount(current);
//       }
//     }, 20); // 10ms interval

//     return () => clearInterval(interval);
//   }, [target, duration, startCount]);

//   return count;
// };

// // Fade Animation
// export const FadeUp = (delay) => {
//   return {
//     initial: {
//       opacity: 0,
//       y: 50,
//     },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         duration: 0.5,
//         delay: delay,
//         ease: "easeInOut",
//       },
//     },
//   };
// };

// // Hero Component
// const Hero = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     state: "",
//   });
//   const [startCount, setStartCount] = useState(false);
//   const statsRef = useRef();

//   // Intersection Observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setStartCount(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (statsRef.current) {
//       observer.observe(statsRef.current);
//     }

//     return () => {
//       if (statsRef.current) {
//         observer.unobserve(statsRef.current);
//       }
//     };
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//     console.log(formData);
//   };

//   return (
//     <section 
//   className="relative w-screen h-screen bg-cover overflow-hidden"  
//   style={{ marginBottom: "1rem" }}
// >
//   {/* Background Video */}
//   <video
//     autoPlay
//     loop
//     muted
//     playsInline
//     preload="auto"
//     className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
//   >
//     <source src={ai_video} type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>

//   {/* Content Section */}
//   <div className="relative z-10">
//     <Navbar />
//     <br />
//     <br />
//     <div style={{ marginBottom: "-1rem" }}></div>
//     <br />
//     <br />
//     <br />
//     <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-[50px]">
//       {/* Brand Info */}
//       <div className="flex flex-col justify-center py-1 md:py-1 relative">
//         <div className="text-start md:text-left space-y-2 lg:max-w-[500px]">
//           <motion.h1
//             variants={FadeUp(0.6)}
//             initial="initial"
//             animate="animate"
//             className="font-sans text-3xl font-semibold text-white"
//             style={{ marginBottom: "1rem" }}
//           >
//             Revolutionizing{" "}
//             <span className="text-white text-transparent bg-clip-text animate-gradient bg-gradient-size">
//               Education
//             </span>{" "}
//             with{" "}
//             <span className="text-white text-transparent bg-clip-text animate-gradient bg-gradient-size">
//               AI
//             </span>
//           </motion.h1>

//           <motion.h6
//             variants={FadeUp(0.8)}
//             initial="initial"
//             animate="animate"
//             className="font-sans text-2xl font-medium text-white"
//             style={{ marginBottom: "1rem" }}
//           >
//             Experience the future of learning with AI-driven online education
//             solutions.
//           </motion.h6>
//         </div>

//         {/* Buttons */}
//         <div
//           className="flex justify-start items-center space-x-8"
//           style={{ marginBottom: "1rem" }}
//         >
//           <motion.button
//             className="flex items-center bg-[#5F81C3] text-white rounded-[5%] p-2 sm:text-left hover:bg-[#C3A15F] focus:ring-2 focus:ring-blue-400 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             IIT JEE
//             <FaGraduationCap className="ml-2 text-lg" />
//           </motion.button>

//           <motion.button
//             className="flex items-center bg-[#289DD7] text-white rounded-[5%] p-2 sm:text-left hover:bg-[#076228] focus:ring-2 focus:ring-gray-400 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             NEET
//             <FaMicroscope className="ml-2 text-lg" />
//           </motion.button>
//           <motion.button
//             className="flex items-center bg-[#F89E07] text-white rounded-[5%] p-2 sm:text-left hover:bg-[#0761F8] focus:ring-2 focus:ring-gray-400 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore
//             <FiZap className="ml-2 text-lg" />
//           </motion.button>
//         </div>

//         {/* Statistics Section */}
//         <br />
//         <br />
//         <br />
//         <br />
//         <div
//           ref={statsRef}
//           className="flex flex-wrap justify-between items-center space-y-3 sm:space-y-0 sm:space-x-5 ml-0"
//           style={{ marginBottom: "1rem" }}
//         >
//           <div className="flex-1 text-center w-full sm:w-auto">
//             <h3 className="text-2xl sm:text-4xl font-bold text-[#3577F2]">
//               {useCountUp(95, 2000, startCount)}%
//             </h3>
//             <p className="text-sm sm:text-base text-gray-400">Personalization</p>
//           </div>

//           <div className="flex-1 text-center w-full sm:w-auto">
//             <h3 className="text-2xl sm:text-4xl font-bold text-[#3577F2]">
//               {useCountUp(30, 2000, startCount)}%
//             </h3>
//             <p className="text-sm sm:text-base text-gray-400">Learning</p>
//           </div>

//           <div className="flex-1 text-center w-full sm:w-auto">
//             <h3 className="text-2xl sm:text-4xl font-bold text-[#3577F2]">
//               {useCountUp(100000, 2000, startCount).toLocaleString()}+
//             </h3>
//             <p className="text-sm sm:text-base text-gray-400">Active Students</p>
//           </div>
//         </div>
//       </div>
//       {/* Form Section */}
//     </div>
//   </div>
// </section>


//   );

// };

// export default Hero;










import { FiZap } from "react-icons/fi";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMicroscope } from "react-icons/fa";
import ai_video from "../../assets/videoplayblack.mp4";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const indianStates = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];


// Reusable CountUp Hook
const useCountUp = (target, duration, startCount) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    const increment = Math.ceil(target / (duration / 10));
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [target, duration, startCount]);

  return count;
};

// Fade Animation
export const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

// Hero Component
const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    otp: "",
    dropdown: "",
    state: "",
  });

  const [showOtpField, setShowOtpField] = useState(false);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSendOtp = () => {
    if (formData.phone.length === 10) {
      setShowOtpField(true);
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  

  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef();

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate(); // Hook for navigation

  const handleNavigation = (path) => {
   //navigate(path, { replace: true }); // Navigate without full page reload
   window.open(path, "_blank");
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={ai_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Section */}
      <div className="relative z-10">
        <Navbar />
        <br/>
        <div className="container  items-center h-screen  mx-auto w-full justify-center grid grid-cols-1 lg:grid-cols-2 min-h-[50px] px-6 lg:px-12 py-12">
          {/* Brand Info */}
          <div className="flex flex-col">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className=" text-3xl md:text-4xl font-semibold font-sf text-white leading-tight"
            >
              Revolutionizing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Education
              </span>{" "}
              with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                AI
              </span>
            </motion.h1>

            <motion.h6
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="text-sm md:text-xl  font-sf text-white mt-4"
            >
             Learn your way with a fully customized curriculum and one-on-one support—education made for you.
            </motion.h6>


            {/*Buttons*/}
            <div className="flex justify-center gap-2 md:gap-4 mt-12 overflow-hidden whitespace-nowrap">
      {[
        { label: "IIT JEE", icon: <FaGraduationCap className="ml-2 text-lg" />, path: "/courses/jee" },
        { label: "NEET", icon: <FaMicroscope className="ml-2 text-lg" />, path: "/courses/neet" },
        { label: "Explore", icon: <FiZap className="ml-2 text-lg" />, path: "/explore" },
      ].map((button, index) => (
        <div key={index} className="relative w-[100px] h-[35px] md:w-[180px] md:h-[45px] group">
          <div
            className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:animate-pulse"
          ></div>
          <img
            src="/gradient1208-3p8p-200h.png"
            alt="gradient"
            className="absolute top-0 left-0 w-full h-full rounded-[30px]"
          />
          <motion.button
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[30px] bg-white/50 backdrop-blur-lg 
              group-hover:scale-[1.02] transition-transform duration-300 text-white text-[10px] md:text-[20px] font-bold font-sf leading-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation(button.path)} // Navigate when clicked
          >
            {button.label} {button.icon}
          </motion.button>
        </div>
      ))}
    </div>
           

            {/* Statistics Section */}
            <div ref={statsRef} className="flex flex-wrap gap-4 mt-12 text-center p-0.5">
  <div className="flex-1 flex flex-col items-center">
  <h3 className="text-3xl font-bold font-sf bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      {useCountUp(100000, 2000, startCount).toLocaleString()}+
    </h3>
    <p className="text-gray-300 font-sf">Active Learners</p>

  </div>

  <div className="w-[2px] bg-white opacity-50 md:block hidden"></div> {/* Thin white line */}

  <div className="flex-1 flex flex-col items-center">
    <h3 className="text-3xl font-bold font-sf bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      {useCountUp(30, 2000, startCount)}%
    </h3>
    <p className="text-gray-300 font-sf">Learning Efficiency Improvement</p>
  </div>

  <div className="w-[2px] bg-white opacity-50 md:block hidden"></div> {/* Thin white line */}

  <div className="flex-1 flex flex-col items-center">
  <h3 className="text-3xl font-bold font-sf bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      {useCountUp(100, 2000, startCount)}%
    </h3>
    <p className="text-gray-300 font-sf">Personalization Learning</p>
  </div>
</div>


 </div>


    {/* Form Close */}

    	



<div className="flex justify-center py-8 items-center -mt-5">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="w-full max-w-[500px] md:max-w-[370px] ml-2 md:ml-32"
  >
    <form onSubmit={handleSubmit} className="space-y-1 w-full">
      {/* Name Field */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Your Name"
        className="w-full p-2.5 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder-white/80 font-sf"
        required
      />

      {/* Country Code and Phone Number */}
      <div className="flex gap-2 items-center">
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg px-2 py-2 text-black font-sf"
          required
        >
          {[
            { flag: "🇮🇳", code: "+91" },
            { flag: "🇺🇸", code: "+1" },
            { flag: "🇬🇧", code: "+44" },
            { flag: "🇨🇦", code: "+1" },
            { flag: "🇦🇺", code: "+61" },
            { flag: "🇩🇪", code: "+49" },
            { flag: "🇫🇷", code: "+33" },
            { flag: "🇧🇷", code: "+55" },
            { flag: "🇯🇵", code: "+81" },
            { flag: "🇨🇳", code: "+86" }
          ].map((country, index) => (
            <option key={index} value={country.code}>
              {country.flag} {country.code}
            </option>
          ))}
        </select>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-2.5 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder-white/80 font-sf"
          required
        />
        <button
          type="button"
          onClick={handleSendOtp}
          className="bg-white/30 backdrop-blur-sm border border-white/40 text-white px-4 rounded-lg font-sf"
        >
          Send OTP
        </button>
      </div>

      {/* OTP Input (Only Renders After OTP is Sent) */}
      {showOtpField && (
        <input
          type="text"
          name="otp"
          value={formData.otp}
          onChange={handleChange}
          placeholder="Enter OTP Here"
          className="w-full p-2.5 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder-white/80 font-sf"
          required
        />
      )}

      {/* State Selection and IIT/JEE Dropdown */}
      <div className="flex gap-2">
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-1/2 p-2.5 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-black font-sf"
          required
        >
          <option value="">Select Your State</option>
          {indianStates.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        <select
          name="dropdown"
          value={formData.dropdown}
          onChange={handleChange}
          className="w-1/2 p-2.5 px-4 bg-white/30 backdrop-blur-sm border border-white/40 text-black rounded-lg font-sf"
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="iit/jee">IIT/JEE</option>
          <option value="neet">NEET</option>
          <option value="sat">SAT</option>
          <option value="ipmat">IPMAT</option>
          <option value="class 12">CLASS 12</option>
          <option value="class 11">CLASS 11</option>
          <option value="class 10">CLASS 10</option>
          <option value="class 9">CLASS 9</option>
          <option value="class 8">CLASS 8</option>
          <option value="class 7">CLASS 7</option>
          <option value="class 6">CLASS 6</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="primary-btn flex items-center gap-2 group w-full justify-center font-sf"
      >
        Submit
        <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300 font-sf" />
      </button>
    </form>
  </motion.div>
</div>



        </div>
      </div>
    </section>
  );
};

export default Hero;
