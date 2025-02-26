// import React, { useState } from "react";
// import { FaUserCircle, FaThumbsUp, FaThumbsDown, FaThumbtack } from "react-icons/fa";

// const CommentsSection = () => {
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [isVerified, setIsVerified] = useState(false);
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);

//   // Upvotes state for default comments
//   const [votes, setVotes] = useState([
//     { upvotes: 99, isUpvoted: false },
//     { upvotes: 99, isUpvoted: false },
//   ]);

//   // Default comments and replies
//   const defaultComments = [
//     {
//       name: "Mani Sai Shetty",
//       comment: "What is the best strategy to revise Physics for JEE?",
//       reply: "Thilak Jain - IIT Kharagpur: Focus on key formulas and solve previous year papers regularly.",
//     },
//     {
//       name: "Vishnu",
//       comment: "How do I manage time between Math and Chemistry revision?",
//       reply: "Varma - IIT Delhi: Divide your day into 2-hour slots per subject to balance preparation.",
//     },
//   ];

//   // Handler for sending OTP
//   const handleSendOtp = () => {
//     if (phoneNumber) {
//       setOtpSent(true);
//       alert("OTP sent to " + phoneNumber);
//     } else {
//       alert("Please enter a valid phone number.");
//     }
//   };

//   // Handler for verifying OTP
//   const handleVerifyOtp = () => {
//     if (otp === "1234") {
//       setIsVerified(true);
//       alert("OTP verified successfully!");
//     } else {
//       alert("Invalid OTP. Please try again.");
//     }
//   };

//   // Handler for adding a comment
//   const handleSubmitComment = () => {
//     if (!isVerified || phoneNumber === "") {
//       alert("Please verify your phone number before commenting.");
//       return;
//     }
//     if (comment.length > 0 && comment.length <= 100 && name) {
//       setComments([...comments, { name, text: comment }]);
//       setComment("");
//     } else {
//       alert("Comment must be between 1 and 100 characters, and name is required.");
//     }
//   };

//   // Handle Upvote
//   const handleUpvote = (index) => {
//     setVotes((prevVotes) =>
//       prevVotes.map((vote, i) =>
//         i === index && !vote.isUpvoted
//           ? { ...vote, upvotes: vote.upvotes + 1, isUpvoted: true }
//           : vote
//       )
//     );
//   };

//   return (
//     <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold text-white mb-4">Leave a Comment</h2>

//       {/* Name and Phone Number Inputs */}
//       <div className="flex items-center mb-4 space-x-2">
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="p-2 border border-gray-300 rounded-l-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <input
//           type="text"
//           placeholder="Enter your phone number"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           className="p-2 border border-gray-300 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <button
//           onClick={handleSendOtp}
//           className="bg-blue-600 text-white px-3 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           Send OTP
//         </button>
//       </div>

//       {/* OTP Input */}
//       {otpSent && !isVerified && (
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             className="p-2 border border-gray-300 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={handleVerifyOtp}
//             className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             Verify
//           </button>
//         </div>
//       )}

//       {/* Default Comments with Upvote/Downvote */}
//       <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
//         <h3 className="text-lg font-semibold text-gray-700 mb-2">Our Top Comments</h3>
//         {defaultComments.map((item, index) => (
//           <div key={index} className="mb-4 border-b pb-2 flex items-start">
//             <FaThumbtack className="text-yellow-500 mr-2 mt-1" title="Pinned Comment" />
//             <div className="w-full">
//               <p>
//                 <strong>{item.name}:</strong> {item.comment}
//               </p>
//               <p className="text-blue-600 mt-1">
//                 <em>{item.reply}</em>
//               </p>
//               <div className="flex items-center mt-2">
//                 {/* Upvote */}
//                 <button
//                   onClick={() => handleUpvote(index)}
//                   className={`flex items-center text-green-600 ${
//                     votes[index].isUpvoted ? "cursor-not-allowed" : "hover:text-green-800"
//                   }`}
//                   disabled={votes[index].isUpvoted}
//                 >
//                   <FaThumbsUp className="mr-1" /> {votes[index].upvotes}
//                 </button>

//                 {/* Downvote */}
//                 <button className="flex items-center ml-4 text-red-600 cursor-not-allowed">
//                   <FaThumbsDown className="mr-1" /> 0
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CommentsSection;


import React, { useState } from "react";
import { FaUserCircle, FaHeart, FaEye, FaThumbtack } from "react-icons/fa";
import { IoMdShare } from "react-icons/io"; // Importing the Instagram-like share icon

const CommentsSection = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Default comments
  const [defaultComments, setDefaultComments] = useState([
    {
      name: "Mani Sai Shetty",
      comment: "What is the best strategy to revise Physics for JEE?",
      loves: 500,
      views: "10K",
      shares: 1000,
      reply: "For Physics, focusing on problem-solving and understanding core concepts is essential. Practice frequently and make sure to revise regularly!",
      pinned: false,
      isLoved: false, // To track whether the comment has already been liked
    },
    {
      name: "Vishnu",
      comment: "How do I manage time between Math and Chemistry revision?",
      loves: 500,
      views: "10K",
      shares: 1000,
      reply: "You should allocate fixed time slots for both subjects, ensuring that you get enough practice for each. Prioritize weak areas.",
      pinned: false,
      isLoved: false, // To track whether the comment has already been liked
    },
  ]);

  // Handler for sending OTP
  const handleSendOtp = () => {
    if (phoneNumber) {
      setOtpSent(true);
      alert("OTP sent to " + phoneNumber);
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  // Handler for verifying OTP
  const handleVerifyOtp = () => {
    if (otp === "1234") {
      setIsVerified(true);
      alert("OTP verified successfully!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  // Handler for adding a comment
  const handleSubmitComment = () => {
    if (!isVerified || phoneNumber === "") {
      alert("Please verify your phone number before commenting.");
      return;
    }
    if (comment.length > 0 && comment.length <= 100 && name) {
      setComments([...comments, { name, text: comment }]);
      setComment("");
    } else {
      alert("Comment must be between 1 and 100 characters, and name is required.");
    }
  };

  // Handler for pinning a comment
  const handlePinComment = (index) => {
    const updatedComments = [...defaultComments];
    updatedComments[index].pinned = !updatedComments[index].pinned;
    setDefaultComments(updatedComments);
  };

  // Handler for incrementing the love count
  const handleLoveClick = (index) => {
    const updatedComments = [...defaultComments];
    if (!updatedComments[index].isLoved) {
      updatedComments[index].loves += 1; // Increment the love count by 1
      updatedComments[index].isLoved = true; // Mark the comment as loved
      setDefaultComments(updatedComments); // Update only defaultComments
    }
  };

  return (
    <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-md max-w-md mx-auto md:max-w-lg lg:max-w-4xl">
      <h2 className="text-xl font-bold text-white mb-4 text-center">Leave a Comment</h2>

      {/* Name and Phone Number Inputs */}
      <div className="flex flex-col md:flex-row items-center mb-4 space-y-2 md:space-y-0 md:space-x-2">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSendOtp}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
        >
          Send OTP
        </button>
      </div>

      {/* OTP Input */}
      {otpSent && !isVerified && (
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="p-2 border border-gray-300 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleVerifyOtp}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Verify
          </button>
        </div>
      )}

      {/* Default Comments with Reply and Pin Option */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Our Top Comments</h3>
        {defaultComments.map((item, index) => (
          <div key={index} className="mb-4 border-b pb-4 flex flex-col">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm md:text-base">
                  <strong>{item.name}:</strong> {item.comment}
                </p>
                <div className="flex items-center mt-2 text-gray-600">
                  <FaHeart
                    onClick={() => handleLoveClick(index)}
                    className={`cursor-pointer ${item.isLoved ? 'text-red-500' : 'text-red-600'}`} // Love icon will be red by default and remain red after clicking
                  />{" "}
                  {item.loves} <span className="mx-2">.</span>
                  <FaEye className="text-blue-500 mr-2" /> {item.views} <span className="mx-2">.</span>
                  <IoMdShare className="text-green-500 cursor-pointer" /> 1K {/* Curved share icon */}
                </div>
              </div>
              <div className="flex items-center">
                {item.pinned && (
                  <span className="text-sm text-yellow-600 mr-2">Pinned</span>
                )}
                <FaThumbtack
                  onClick={() => handlePinComment(index)}
                  className={`cursor-pointer ${item.pinned ? 'text-yellow-500' : 'text-gray-400'}`}
                />
              </div>
            </div>
            <div className="mt-2 p-2 bg-gray-100 rounded-lg text-sm text-gray-700">
              <strong>Reply:</strong> {item.reply}
            </div>
          </div>
        ))}
      </div>

      {/* User Comments */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Your Comments</h3>
        {comments.map((item, index) => (
          <div key={index} className="mb-4 flex items-start">
            <FaUserCircle className="text-blue-500 mr-2 mt-1" size={24} />
            <div>
              <p className="text-sm md:text-base">
                <strong>{item.name}:</strong> {item.text}
              </p>
            </div>
          </div>
        ))}
        <textarea
          placeholder="Write your comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="p-2 border border-gray-300 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
        ></textarea>
        <button
          onClick={handleSubmitComment}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2 w-full"
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default CommentsSection;
