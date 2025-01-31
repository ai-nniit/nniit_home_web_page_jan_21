import React from "react";
import "./StudentLearningJourney.css"; // Ensure you import the CSS

const StudentLearningJourney = () => {
  return (
    <section className="BlurSection2 learnJourneyOuter">
      <div className="StudentLearnJourney" id="StudentLearnJourney">
        <div className="StudentJourneyContent">
          <h2 className="sectionHeadingBig sectionHeadingBig_white" data-aos="fade-up">
            <span className="animatedHeading" data-aos="fade-up" data-aos-delay="100">
              Student’s
            </span>
            <span className="animatedHeading" data-aos="fade-up" data-aos-delay="150">
              Learning
            </span>
            <span className="animatedHeading" data-aos="fade-up" data-aos-delay="200">
              Journey
            </span>
          </h2>
          <p className="sectionParagrah sectionParagrah_white" data-aos="fade-up">
            <span className="animatedHeading" data-aos="fade-up" data-aos-delay="100">
              Lesson
            </span>
            <span className="animatedHeading" data-aos="fade-up" data-aos-delay="150">
              plan
            </span>
            <span className="animatedHeading" data-aos="fade-up" data-aos-delay="200">
              mirrors
            </span>
            <span className="animatedHeading" data-aos="fade-up" data-aos-delay="250">
              school
            </span>
            <span className="animatedHeading" data-aos="fade-up" data-aos-delay="300">
              schedule!
            </span>
          </p>
          <div className="centerJourney">
            <div className="SvgMotionSection">
              {/* Pre-Class */}
              <div className="SvgPinPoint" id="SvgPinPointA" style={{ opacity: 1, "--rotation": "0deg" }}>
                <div className="SvgPinPointContent SvgPinPointContent_A">
                  <h3>Pre - class</h3>
                  <p className="SvgPinPointContent_A_para">Diagnostic test</p>
                  <p className="SvgPinPointContent_A_para">Pre-reads</p>
                </div>
              </div>

              {/* In-Class */}
              <div className="SvgPinPoint" id="SvgPinPointB" style={{ opacity: 1, "--rotation": "0deg" }}>
                <div className="SvgPinPointContent SvgPinPointContent_B">
                  <h3>In - class</h3>
                  <p className="SvgPinPointContent_B_para">Concept tutoring</p>
                  <p className="SvgPinPointContent_B_para">Adaptive practice</p>
                  <p className="SvgPinPointContent_B_para">Continuous assessment</p>
                </div>
              </div>

              {/* Post-Class */}
              <div className="SvgPinPoint" id="SvgPinPointC" style={{ opacity: 0, "--rotation": "-50deg" }}>
                <div className="SvgPinPointContent SvgPinPointContent_C">
                  <h3>Post - class</h3>
                  <p className="SvgPinPointContent_C_para">
                    Assignments <br />
                    On-demand support
                  </p>
                </div>
              </div>

              {/* Periodic */}
              <div className="SvgPinPoint" id="SvgPinPointD" style={{ opacity: 0, "--rotation": "-50deg" }}>
                <div className="SvgPinPointContent SvgPinPointContent_D">
                  <h3>Periodic</h3>
                  <p className="SvgPinPointContent_D_para">
                    <span className="brightText">Assessments:</span> Proctored tests
                  </p>
                  <p className="SvgPinPointContent_D_para">
                    <span className="brightText">Revision:</span> View recorded videos, Teacher support
                  </p>
                  <p className="SvgPinPointContent_D_para">
                    <span className="brightText">Reports:</span> Student dashboard
                  </p>
                </div>
              </div>

              <span className="dotstart"></span>

              {/* Web SVG Path */}
              <svg className="svgThread webSvgPath" xmlns="http://www.w3.org/2000/svg" width="1064" height="266" viewBox="0 0 1064 266" fill="none">
                <path
                  id="svgThreadPathWeb"
                  opacity="0.4"
                  d="M1 229.5C43.8333 244.167 147 275.4 205 261C277.5 243 290.5 210 297 174.5C303.494 139.034 330.5 20 397 18C463.5 16 491.5 51 536 85C580.5 119 620 145 669 146.5C718 148 746 88 718.5 67.5C691 47 644.5 57 624.5 90.5C609.079 116.33 583.5 231 749 228.5C844.077 227.064 899.041 128.725 952 76C991.226 36.9474 1002.5 17.5 1063 1.5"
                  stroke="url(#paint0_linear_50918_4159)"
                  strokeWidth="2"
                  strokeDasharray="16 16"
                ></path>
                <defs>
                  <linearGradient id="paint0_linear_50918_4159" x1="437.6" y1="54.5335" x2="435.809" y2="217.562" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFE99D"></stop>
                    <stop offset="1" stopColor="#FFBC0F"></stop>
                  </linearGradient>
                </defs>
              </svg>

              {/* Mobile SVG Path */}
              <svg className="svgThread mobileSvgPath" xmlns="http://www.w3.org/2000/svg" width="304" height="384" viewBox="0 0 304 384" fill="none">
                <path
                  id="svgThreadPathMob"
                  opacity="0.4"
                  d="M145.101 1.29299C83.5576 -1.95361 4.22256 22.164 11.6385 54.5761C19.0545 86.9882 73.6138 95.1593 113.579 98.2271C153.505 101.292 345.07 70.2259 296.024 125.998C281.508 142.505 247.474 156.793 247.474 156.793C209.197 177.796 208.645 194.697 209.935 212.02C211.225 229.342 259.432 247.342 282.51 234.363C305.588 221.384 294.33 199.437 256.617 189.998C227.538 182.719 29.6771 166.057 4.22256 234.363C-23.1446 307.802 130.853 284.263 199.424 317.033C267.995 349.804 276.692 383 276.692 383"
                  stroke="url(#paint0_linear_54901_22447)"
                  strokeWidth="2"
                  strokeDasharray="16 16"
                ></path>
                <defs>
                  <linearGradient id="paint0_linear_54901_22447" x1="242.948" y1="158.044" x2="55.4778" y2="151.452" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFE99D"></stop>
                    <stop offset="1" stopColor="#FFBC0F"></stop>
                  </linearGradient>
                </defs>
              </svg>

              <span className="plane" style={{ opacity: 1, transform: "translate(164.13px, 158.259px) rotate(-177.927deg)", top: "0px" }}>
                <img src="https://sparkl.me/assets/img/plane.svg" alt="Plane Icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLearningJourney;
