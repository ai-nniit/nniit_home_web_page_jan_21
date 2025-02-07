import React, { useState } from "react";
import vedu from "../../assets/converted_image.png";
import PopupForm from "./PopupForm";

const FreeDemoComponent = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8rem 4rem",
    backgroundColor: "#f9f9f9",
    fontFamily: "'Roboto', sans-serif",
    borderRadius: "2px",
    boxShadow: "10px 4px 20px rgba(0, 0, 0, 0.1)",
    gap: "2rem",
    flexDirection: "row", // Default for desktop
  };

  const contentStyle = {
    flex: "1",
    textAlign: "left",
  };

  const headingStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "1rem",
    fontFamily: "'Public Sans',sans-serif",
  };

  const highlightStyle = {
    color: "#f05454",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    margin: "1rem 0",
    color: "#666",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    position: "relative",
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#f05454",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    animation: "continuousBounce 1s ease-in-out infinite",
  };

  const buttonHoverStyle = {
    transform: "translateY(-10px)",
    backgroundColor: "#d94343",
  };

  const imageStyle = {
    flex: "1",
    textAlign: "center",
  };

  const demoImageStyle = {
    maxWidth: "80%",
    borderRadius: "10px",
  };

  return (
    <>
    <style>{`
      .demoComponent {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 4rem;
        box-sizing: border-box;
        background-color: #f9f9f9; /* Light gray background */
        margin-bottom: 2rem; /* Add gap below the component */
        border-radius: 8px; /* Add subtle rounding to the edges */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
      }
  
      .contentSection {
        flex: 1;
        text-align: left;
      }
  
      .contentSection h1 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
  
      .highlight {
        display: inline-block;
        position: relative;
      }
  
      .highlight::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        margin-top: -0.2rem;
        transform: rotate(1deg);
        background: linear-gradient(to right, #fbbf24, transparent);
        height: 5px;
      }
  
      .contentSection p {
        font-size: 1rem;
        margin-bottom: 1.5rem;
      }
  
      .btn {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        background-color: #f05454;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
  
      .btn:hover {
        background-color: #d94242;
      }
  
      .imageSection {
        flex: 1;
        display: flex;
        justify-content: center;
      }
  
      .imageSection img {
        max-width: 100%;
        height: auto;
      }
  
      @media (max-width: 568px) {
        .demoComponent {
          flex-direction: column;
          padding: 1rem 2rem;
        }
  
        .contentSection {
          text-align: center;
        }
  
        .imageSection {
          display: none;
        }
      }
    `}</style>
  
    {isPopupVisible && <PopupForm closePopup={handleClosePopup} />}
  
    <div
      className="demoComponent"
      onClick={handleOpenPopup}
    >
      <div className="contentSection">
        <h1 className="font-semibold text-2xl font-sf bg-gradient-to-r from-[#007bff] to-[#00aaff] bg-clip-text text-transparent">
          Doubts <span className="font-extrabold font-sf text-5xl text-[#FF0000]">?</span> <span className="bg-gradient-to-r from-[#007bff] to-[#00aaff] bg-clip-text text-transparent font-sf">Confusion</span>  <span className="font-extrabold font-sf text-5xl text-[#FF0000]">?</span> {" "}
          <span className="font-bold  text-3xl font-sf text-blue-400"> Not Anymore <span className="font-extrabold font-sf text-5xl text-[#FF0000]">!</span></span> <span className="text-black font-sf">Step into a learning experience built just for </span> <span className="font-bold  text-3xl font-sf text-blue-600">YOU</span>
        </h1>
        <p className="font-sf">
        "choose your perfect time, get one-on-one guidance from India’s best IIT mentors, and unlock absolute clarity. Book your free demo now!"
        </p>
        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation();
            window.open("https://calendar.app.google/ACitve3sDuj7vWWt5", "_blank");
          }}
        >
          Book a Free Demo
        </button>
      </div>
  
      <div className="imageSection">
        <img src={vedu} alt="Students and Teacher" />
      </div>
    </div>
  </>
  
  );
};

export default FreeDemoComponent;
