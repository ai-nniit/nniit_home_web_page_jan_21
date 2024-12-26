// import React from "react";

// const StudyMaterialFooter = () => {
//   const styles = {
//     footer: {
//       backgroundColor: "#f9f9f9",
//       padding: "2rem",
//     },
//     container: {
//       maxWidth: "1200px",
//       margin: "auto",
//     },
//     title: {
//       fontSize: "1.5rem",
//       fontWeight: "bold",
//       marginBottom: "1rem",
//     },
//     highlight: {
//       color: "#5b21b6", // Purple color
//       textDecoration: "underline",
//     },
//     columns: {
//       display: "grid",
//       gridTemplateColumns: "repeat(4, 1fr)",
//       gap: "1.5rem",
//     },
//     heading: {
//       fontSize: "1.2rem",
//       marginBottom: "0.5rem",
//     },
//     list: {
//       listStyleType: "none",
//       padding: 0,
//     },
//     listItem: {
//       fontSize: "0.9rem",
//       marginBottom: "0.3rem",
//       color: "#333",
//       cursor: "pointer",
//     },
//     listItemHover: {
//       textDecoration: "underline",
//     },
//   };

//   return (
//     <>
//     <footer style={styles.footer}>
//       <div style={styles.container} className="max-auto px-10">
//         <h3 style={styles.title}>
//           Study <span style={styles.highlight}>Material</span>
//         </h3>
//         <div style={styles.columns}>
//           <div>
//             <h4 style={styles.heading}>NCERT</h4>
//             <ul style={styles.list}>
//               <li style={styles.listItem}>NCERT</li>
//               <li style={styles.listItem}>NCERT Solutions</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 12</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 12 Maths</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 12 Physics</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 12 Chemistry</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 12 Biology</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 12 Business Studies</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 12 Economics</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 12 Accountancy</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 12 English</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 12 Hindi</li>
//             </ul>
//           </div>
//           <div>
//             <ul style={styles.list}>
//               <li style={styles.listItem}>NCERT Solutions for Class 11</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 11 Maths</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 11 Physics</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 11 Chemistry</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 11 Biology</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 11 Business Studies</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 11 Economics</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 11 Accountancy</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 11 English</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 11 Hindi</li>
//             </ul>
//           </div>
//           <div>
//             <ul style={styles.list}>
//               <li style={styles.listItem}>NCERT Solutions for Class 10</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 10 Maths</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 10 Science</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 10 English</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 10 Social Science</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 10 Hindi</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 9</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 9 Maths</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 9 Science</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 9 English</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 9 Social Science</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 9 Hindi</li>
//             </ul>
//           </div>
//           <div>
//             <ul style={styles.list}>
//               <li style={styles.listItem}>NCERT Solutions for Class 8</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 8 Maths</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 8 Science</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 8 English</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 8 Social Science</li>
//               <li style={styles.listItem}>NCERT Solutions for Class 8 Hindi</li>
//               <li style={styles.listItem}>NCERT Books</li>
//               <li style={styles.listItem}>NCERT Books Class 12</li>
//               <li style={styles.listItem}>NCERT Books Class 11</li>
//               <li style={styles.listItem}>NCERT Books Class 10</li>
//               <li style={styles.listItem}>NCERT Books Class 9</li>
//               <li style={styles.listItem}>NCERT Books Class 8</li>
//             </ul>
//           </div>
//         </div>
//         <br/>
//         {/*second*/}
//         <div style={styles.columns}>
//           <div>
//             <h4 style={styles.heading}>Reference Book Solutions</h4>
//             <ul style={styles.list}>
//               <li style={styles.listItem}>Reference Book Solutions</li>
//               <li style={styles.listItem}>HC Verma Solutions</li>
//               <li style={styles.listItem}>RD Sharma Solutions</li>
//               <li style={styles.listItem}>RS Aggarwal Solutions</li>
//               <li style={styles.listItem}>NCERT Exemplar Solutions</li>
//               <li style={styles.listItem}>
//               Lakhmir Singh Solutions</li>
//               <li style={styles.listItem}>DK Goel Solutions</li>
//               <li style={styles.listItem}>
//               TS Grewal Solutions</li>
//               <li style={styles.listItem}>Sandeep Garg</li>
             
//             </ul>
//           </div>
//           <div>
//             <ul style={styles.list}>
//             <h4 style={styles.heading}>Competitive Exams</h4>
//               <li style={styles.listItem}>JEE Main</li>
//               <li style={styles.listItem}>JEE Advanced</li>
//               <li style={styles.listItem}>
//               NEET</li>
//               <li style={styles.listItem}>Olympiad Preparation</li>
//               <li style={styles.listItem}>NDA</li>
//               <li style={styles.listItem}>KVPY</li>
//               <li style={styles.listItem}>NTSE</li>
             
//             </ul>
//           </div>
//           <div>
//             <ul style={styles.list}>
//             <h4 style={styles.heading}>
//             CBSE</h4>
//               <li style={styles.listItem}>CBSE Syllabus</li>
//               <li style={styles.listItem}>
//               CBSE Sample Paper</li>
//               <li style={styles.listItem}>
//               CBSE Worksheets</li>
//               <li style={styles.listItem}>
//               CBSE Important Questions</li>
//               <li style={styles.listItem}>
//               CBSE Previous Year Question Papers Class 12</li>
//               <li style={styles.listItem}>CBSE Previous Year Question Papers Class 10</li>
//               <li style={styles.listItem}>CBSE Important Formulas
//               </li>
             
//             </ul>
//           </div>
//           <div>
//             <ul style={styles.list}>
//             <h4 style={styles.heading}>
//             ICSE</h4>
//               <li style={styles.listItem}>ICSE</li>
//               <li style={styles.listItem}>ICSE Solutions</li>
//               <li style={styles.listItem}>ICSE Class 10 Solutions</li>
//               <li style={styles.listItem}>ICSE Class 9 Solutions</li>
//               <li style={styles.listItem}>ICSE Class 8 Solutions</li>
//             </ul>
//           </div>
//         </div>
//         <br/>
//           {/*third*/}
//         <div style={styles.columns}>
//           <div>
//             <h4 style={styles.heading}>State Boards
//             </h4>
//             <ul style={styles.list}>
//               <li style={styles.listItem}>State Boards
//               </li>
//               <li style={styles.listItem}>AP Board</li>
//               <li style={styles.listItem}>Bihar Board</li>
//               <li style={styles.listItem}>
//               Gujarat Board</li>
//               <li style={styles.listItem}>
//               Karnataka Board</li>
//               <li style={styles.listItem}>Kerala Board</li>
//               <li style={styles.listItem}>Maharashtra Board</li>
//               <li style={styles.listItem}>MP Board</li>
//               <li style={styles.listItem}>
//               Rajasthan Board</li>
//               <li style={styles.listItem}>
//               Telangana Board</li>
//               <li style={styles.listItem}>TN Board</li>
//               <li style={styles.listItem}>UP Board</li>
//               <li style={styles.listItem}>WB Board</li>
//             </ul>
//           </div>
//           <div>
//             <ul style={styles.list}>
//             <h4 style={styles.heading}>Free Study Material
//             </h4>
//               <li style={styles.listItem}>Free Study Material</li>
//               <li style={styles.listItem}>Previous Year Question Paper</li>
//               <li style={styles.listItem}>Sample Papers</li>
//               <li style={styles.listItem}>JEE Main Study Material</li>
//               <li style={styles.listItem}>JEE Advanced Study Material</li>
//               <li style={styles.listItem}>NEET Study Materials</li>
//               <li style={styles.listItem}>Olympaid Study Material</li>
//               <li style={styles.listItem}>Kids Learning</li>
//               <li style={styles.listItem}>Ask Questions</li>
              
//             </ul>
//           </div>
//           <div>
//             <ul style={styles.list}>
//             <h4 style={styles.heading}>Important Subjects</h4>

//               <li style={styles.listItem}>Physics</li>
//               <li style={styles.listItem}>Biology</li>
//               <li style={styles.listItem}>Chemistry</li>
//               <li style={styles.listItem}>Maths</li>
//               <li style={styles.listItem}>English</li>
//               <li style={styles.listItem}>Commerce</li>
//               <li style={styles.listItem}>Geography</li>
//               <li style={styles.listItem}>Civics</li>
              
//             </ul>
//           </div>
//           <div>
//             <ul style={styles.list}>
//             <h4 style={styles.heading}>Revision Notes</h4>
//               <li style={styles.listItem}>Revision Notes</li>
//               <li style={styles.listItem}>CBSE Class 12 Notes</li>
//               <li style={styles.listItem}>CBSE Class 11 Notes</li>
//               <li style={styles.listItem}>CBSE Class 10 Notes</li>
//               <li style={styles.listItem}>CBSE Class 9 Notes</li>
//               <li style={styles.listItem}>CBSE Class 8 Notes</li>
//             </ul>
//           </div>
//         </div>
// <br/>
//             {/*fourth*/}

//         <div style={styles.columns}>
//           <div>
//             <h4 style={styles.heading}>JEE MAIN</h4>
//             <ul style={styles.list}>
//               <li style={styles.listItem}>JEE Main</li>
//               <li style={styles.listItem}>JEE Main Important Questions</li>
//               <li style={styles.listItem}>JEE Main Important Chapters</li>
//               <li style={styles.listItem}>JEE Main Notes</li>
//               <li style={styles.listItem}>JEE Main Formulas</li>
//               <li style={styles.listItem}>JEE Main Difference between</li>
//               <li style={styles.listItem}>
//               JEE Main Syllabus</li>
//               <li style={styles.listItem}>JEE Main Physics Syllabus</li>
//               <li style={styles.listItem}>JEE Main Mathematics Syllabus</li>
//               <li style={styles.listItem}>JEE Main Chemistry Syllabus</li>
//               <li style={styles.listItem}>JEE Main Previous Year Question Paper</li>
//             </ul>
//           </div>
//           <div>
//             <ul style={styles.list}>
//                <h4 style={styles.heading}>JEE ADVANCED</h4>
//               <li style={styles.listItem}>JEE Advanced</li>
//               <li style={styles.listItem}>JEE Advanced Important Questions</li>
//               <li style={styles.listItem}>
//               JEE Advanced Important Chapters</li>
//               <li style={styles.listItem}>
//               JEE Advanced Notes</li>
//               <li style={styles.listItem}>JEE Advanced Formulas</li>
//               <li style={styles.listItem}>JEE Advanced Difference between</li>
//               <li style={styles.listItem}>JEE Advanced Syllabus</li>
//               <li style={styles.listItem}>JEE Advanced Physics Syllabus</li>
//               <li style={styles.listItem}>JEE Advanced Mathematics Syllabus</li>
//               <li style={styles.listItem}>JEE Advanced Chemistry Syllabus</li>
//               <li style={styles.listItem}>JEE Advanced Previous Year Question Paper</li>
//             </ul>
//           </div>
//           <div>
//             <ul style={styles.list}>
//             <h4 style={styles.heading}>NEET</h4>
//               <li style={styles.listItem}>NEET</li>
//               <li style={styles.listItem}>NEET Important Questions</li>
//               <li style={styles.listItem}>NEET Important Chapters</li>
//               <li style={styles.listItem}>NEET Notes</li>
//               <li style={styles.listItem}>NEET Diagrams</li>
//               <li style={styles.listItem}>NEET Difference between</li>
//               <li style={styles.listItem}>NEET Syllabus</li>
//               <li style={styles.listItem}>NEET Physics Syllabus</li>
//               <li style={styles.listItem}>NEET Chemistry Syllabus</li>
//               <li style={styles.listItem}>
//               NEET Biology Syllabus</li>
//               <li style={styles.listItem}>NEET Previous Year Question Paper</li>
              
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="mt-12 pt-8 border-t border-gray-200 space-y-4">
//       <div className="flex justify-between items-center py-4 border-t border-gray-300 text-sm text-gray-700">
//       <span>© 2024 nniit.com. All rights reserved</span>
//       <div className="flex space-x-4">
//         <a href="#" className="hover:underline">
//           Privacy policy
//         </a>
//         <a href="#" className="hover:underline">
//           Terms and conditions
//         </a>
//       </div>
//     </div>
//   </div>
    
//   </footer>
//     </>
    
//   );
// };

// export default StudyMaterialFooter;







import React from "react";

const StudyMaterialFooter = () => {
  return (
    <footer className="bg-[#f9f9f9] py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">
          Study <span className="text-purple-700 underline">Material</span>
        </h3>

        {/* Grid container */}
        <div className="space-y-8">
          {/* First section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-2">NCERT</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">NCERT</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">NCERT Solutions</a>
                </li>
                {/* More NCERT links */}
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">NCERT Solutions for Class 12</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">NCERT Solutions for Class 12 Maths</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">NCERT Solutions for Class 11</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">NCERT Solutions for Class 11 Maths</a>
                </li>
                {/* More Class 11 links */}
              </ul>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">NCERT Solutions for Class 10</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">NCERT Solutions for Class 10 Maths</a>
                </li>
                {/* More Class 10 links */}
              </ul>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">NCERT Solutions for Class 8</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">NCERT Solutions for Class 8 Maths</a>
                </li>
                {/* More Class 8 links */}
              </ul>
            </div>
          </div>

          {/* Second section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-2">Reference Book Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">Reference Book Solutions</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">HC Verma Solutions</a>
                </li>
                {/* More reference book links */}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-2">Competitive Exams</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">JEE Main</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">JEE Advanced</a>
                </li>
                {/* More exam links */}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-2">CBSE</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">CBSE Syllabus</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">CBSE Sample Paper</a>
                </li>
                {/* More CBSE links */}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-2">ICSE</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">ICSE</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:underline focus:underline active:underline">ICSE Solutions</a>
                </li>
                {/* More ICSE links */}
              </ul>
            </div>
          </div>

          {/* Copyright section */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <span className="text-sm text-gray-700">© 2024 nniit.com. All rights reserved</span>
              <div className="flex space-x-4">
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Privacy policy
                </a>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Terms and conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StudyMaterialFooter;