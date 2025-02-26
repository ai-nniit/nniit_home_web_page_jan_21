// import React, { useState, useEffect } from "react";
// import PopupForm from "./PopupForm";

// const StickyButtons = () => {
//   const [show, setShow] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY > 100;
//       setShow(scrolled);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Sticky Buttons */}
//       <div
//         className={`fixed bottom-0 z-40 flex justify-center gap-4 p-2 bg-white/50 backdrop-blur-md transition-transform duration-300 ${
//           show ? "translate-y-0" : "translate-y-full"
//         } max-w-sm mx-auto rounded-t-lg md:left-0 md:right-0 md:max-w-none w-full
//         sm:flex-row sm:gap-4 sm:justify-center sm:bg-opacity-100`}
//       >
//         <button
//           className="bg-blue-600 bg-opacity-90 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//           onClick={() => setShowForm(true)}
//         >
//           Talk to Experts
//         </button>
//         <button className="bg-purple-600 bg-opacity-90 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
//           Get Started
//         </button>
//       </div>

//       {/* Popup Form */}
//       {showForm && <PopupForm onClose={() => setShowForm(false)} />}
//     </>
//   );
// };

// export default StickyButtons;





import React, { useState, useEffect } from "react";
import PopupForm from "./PopupForm";

const StickyButtons = () => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setShow(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Buttons */}
      <div
        className={`fixed bottom-0 z-20 flex justify-center transition-transform duration-300 ${
          show ? "translate-y-0" : "translate-y-full"
        } w-full`}
      >
        {/* Wrapper for buttons */}
        <div
          className="flex gap-2 bg-white/70 backdrop-blur-md p-2 rounded-t-lg w-fit mx-auto"
        >
          <button
            className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => setShowForm(true)}
          >
            Talk to Experts
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Popup Form */}
      {showForm && <PopupForm onClose={() => setShowForm(false)} />}
    </>
  );
};

export default StickyButtons;
