// import React, { useEffect, useState } from "react";
// import { getProfile, logout } from "../api/auth";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const [user, setUser] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         async function fetchUser() {
//             try {
//                 const data = await getProfile();
//                 setUser(data);
//             } catch (err) {
//                 console.error(err);
//                 navigate("/login");
//             }
//         }
//         fetchUser();
//     }, [navigate]);

//     const handleLogout = () => {
//         logout();
//         navigate("/login");
//     };

//     return (
//         <div className="mt-28">
//             <h2>Dashboard</h2>
//             {user ? <p>Welcome, {user.name}</p> : <p>Loading...</p>}
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     );
// };

// export default Dashboard;



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const userData = localStorage.getItem("user");

//     if (!token || !userData) {
//       navigate("/login"); // Redirect if no token
//     } else {
//       setUser(JSON.parse(userData)); // Load user details
//     }
//   }, [navigate]);

//   return (
//     <div>
//       <h1>Welcome {user?.name}</h1>
//       <button
//         onClick={() => {
//           localStorage.removeItem("token");
//           localStorage.removeItem("user");
//           navigate("/login");
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Dashboard;


//7-3-25 12 35 pm update 











// --- components/pages/Dashboard.jsx ---
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
// import Ads from '../assets/Dashboard_Ad.jpg';
// import { IoClose } from "react-icons/io5";

// const Dashboard = () => {
//     const [user, setUser] = useState(null);
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [showBanner, setShowBanner] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         const userData = localStorage.getItem("user");

//         if (!token || !userData) {
//             navigate("/login");
//         } else {
//             setUser(JSON.parse(userData));
//         }
//     }, [navigate]);

//     return (
//         <div className="flex min-h-screen bg-gray-100 mt-14">
//             {/* Sidebar Navigation */}
//             <aside className="w-64 bg-white shadow-md p-6">
//                 <nav className="space-y-4">
//                     <a href="#" className="block font-semibold text-blue-500">Home</a>
//                     <a href="#" className="block">Live Classes</a>
//                     <a href="#" className="block">Learn</a>
//                     <a href="#" className="block">Tests</a>
//                     <a href="#" className="block">Doubts</a>
//                     <a href="#" className="block">My Bookmarks</a>
//                     <a href="#" className="block">My Activity</a>
//                     <a href="#" className="block">Subscriptions</a>
//                     <a href="#" className="block">Refer and Earn</a>
//                     <a href="#" className="block">Contact Us</a>
//                 </nav>
//             </aside>
            
//             {/* Main Content Area */}
//             <div className="flex-1 p-6">
//                 {/* Top Navigation Bar */}
//                 <header className="flex justify-between items-center bg-white shadow-md p-3 rounded-lg">
//                     <input 
//                         type="text" 
//                         placeholder="Search chapters and topics..." 
//                         className="border p-2 rounded-lg w-1/2"
//                     />
//                     <div className="relative">
//                         <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center">
//                             <FaUserCircle className="text-3xl text-gray-600" />
//                         </button>
//                         {showDropdown && (
//                             <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg">
//                                 <button onClick={() => navigate("/profile")} className="block px-4 py-2 w-full text-left">Profile</button>
//                                 <button onClick={() => {
//                                     localStorage.clear();
//                                     navigate("/login");
//                                 }} className="block px-4 py-2 w-full text-left text-red-500">Logout</button>
//                             </div>
//                         )}
//                     </div>
//                 </header>

//                  {/* Dismissible Banner */}
//                  {showBanner && (
//                     <div className="flex items-center justify-between bg-blue-100 text-blue-900 p-2 rounded-lg mt-2 shadow-md">
//                         <p className="font-bold ml-5 text-xl">Unlock your learning potential Now by Enrolling to our Ninja Course!</p>
//                         <div className="flex items-center space-x-4">
//                             <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
//                                 Enroll Now
//                             </button>
//                             <button onClick={() => setShowBanner(false)} className="text-gray-500 hover:text-gray-700">
//                                 <IoClose className="text-2xl" />
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* Welcome Message */}
//                 <h1 className="text-2xl font-semibold mt-6">Hello, {user?.name}!</h1>

//                 {/* Promotional Banner */}
//                 <div className="mt-4">
//                     <img src={Ads} alt="Advertisement" className="w-full rounded-lg shadow-md" />
//                 </div>

//                 {/* Quick Stats */}
//                 <div className="flex space-x-4 mt-6">
//                     <div className="bg-white p-4 rounded-lg shadow-md w-1/2 text-center">
//                         <h2 className="text-xl font-semibold">Energy Points</h2>
//                         <p className="text-lg">500</p>
//                     </div>
//                     <div className="bg-white p-4 rounded-lg shadow-md w-1/2 text-center">
//                         <h2 className="text-xl font-semibold">Coins</h2>
//                         <p className="text-lg">250</p>
//                     </div>
//                 </div>

//                 {/* Subject Selection */}
//                 <h2 className="text-xl font-semibold mt-6">Select a Subject</h2>
//                 <div className="flex space-x-4 mt-4">
//                     <button className="bg-green-500 text-white p-4 rounded-lg shadow-md">Chemistry</button>
//                     <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md">Mathematics</button>
//                     <button className="bg-red-500 text-white p-4 rounded-lg shadow-md">Physics</button>
//                 </div>

//                 {/* What's New Section */}
//                 <h2 className="text-xl font-semibold mt-6">What's New</h2>
//                 <div className="bg-white p-4 rounded-lg shadow-md mt-2">
//                     <p>Latest updates and announcements...</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


//12-3-25

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Ads from '../assets/Dashboard_Ad.jpg';
import { IoClose } from "react-icons/io5";
import { fetchTestResults } from "../api/auth";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    const [testResults, setTestResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");

        if (!token || !userData) {
            navigate("/login");
        } else {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);

            // Fetch test results
            const fetchResults = async () => {
                try {
                    const res = await fetchTestResults(token);
                    setTestResults(res.data);
                } catch (err) {
                    console.error("Error fetching test results:", err);
                }
            };
            fetchResults();
        }
    }, [navigate]);

    const navigate1 = useNavigate();

    return (
        <div className="flex min-h-screen bg-gray-100 mt-14">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-white shadow-md p-6">
                <nav className="space-y-4">
                    <a href="#" className="block font-semibold text-blue-500">Home</a>
                    <a href="#" className="block">Live Classes</a>
                    <a href="#" className="block">Learn</a>
                    <a href="#" className="block">Tests</a>
                    <a href="#" className="block">Doubts</a>
                    <a href="#" className="block">My Bookmarks</a>
                    <a href="#" className="block">My Activity</a>
                    <a href="#" className="block">Subscriptions</a>
                    <a href="#" className="block">Refer and Earn</a>
                    <a href="#" className="block">Contact Us</a>
                </nav>
            </aside>
            
            {/* Main Content Area */}
            <div className="flex-1 p-6">
                {/* Top Navigation Bar */}
                <header className="flex justify-between items-center bg-white shadow-md p-3 rounded-lg">
                    <input 
                        type="text" 
                        placeholder="Search chapters and topics..." 
                        className="border p-2 rounded-lg w-1/2"
                    />
                    <div className="relative">
                        <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center">
                            <FaUserCircle className="text-3xl text-gray-600" />
                        </button>
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg">
                                <button onClick={() => navigate("/profile")} className="block px-4 py-2 w-full text-left">Profile</button>
                                <button onClick={() => {
                                    localStorage.clear();
                                    navigate("/login");
                                }} className="block px-4 py-2 w-full text-left text-red-500">Logout</button>
                            </div>
                        )}
                    </div>
                </header>

                 {/* Dismissible Banner */}
                 {showBanner && (
                    <div className="flex items-center justify-between bg-blue-100 text-blue-900 p-2 rounded-lg mt-2 shadow-md">
                        <p className="font-bold ml-5 text-xl">Unlock your learning potential Now by Enrolling to our Ninja Course!</p>
                        <div className="flex items-center space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                                Enroll Now
                            </button>
                            <button onClick={() => setShowBanner(false)} className="text-gray-500 hover:text-gray-700">
                                <IoClose className="text-2xl" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Welcome Message */}
                <h1 className="text-2xl font-semibold mt-6">Hello, {user?.name}!</h1>
                
                <button onClick={() => navigate1("/test")}>Take a Test</button>

                {/* Test Results */}
                <h3 className="text-xl font-semibold mt-4">Your Test Results:</h3>
                <ul className="mt-2">
                    {testResults.length > 0 ? (
                        testResults.map((test, index) => (
                            <li key={index} className="bg-white p-2 rounded-lg shadow-md mt-2">
                                {test.testName}: {test.score} ({new Date(test.date).toLocaleDateString()})
                            </li>
                        ))
                    ) : (
                        <p>No tests attempted yet.</p>
                    )}
                </ul>

                {/* Promotional Banner */}
                <div className="mt-4">
                    <img src={Ads} alt="Advertisement" className="w-full rounded-lg shadow-md" />
                </div>

                {/* Quick Stats */}
                <div className="flex space-x-4 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow-md w-1/2 text-center">
                        <h2 className="text-xl font-semibold">Energy Points</h2>
                        <p className="text-lg">500</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md w-1/2 text-center">
                        <h2 className="text-xl font-semibold">Coins</h2>
                        <p className="text-lg">250</p>
                    </div>
                </div>

                {/* Subject Selection */}
                <h2 className="text-xl font-semibold mt-6">Select a Subject</h2>
                <div className="flex space-x-4 mt-4">
                    <button className="bg-green-500 text-white p-4 rounded-lg shadow-md">Chemistry</button>
                    <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md">Mathematics</button>
                    <button className="bg-red-500 text-white p-4 rounded-lg shadow-md">Physics</button>
                </div>

                {/* What's New Section */}
                <h2 className="text-xl font-semibold mt-6">What's New</h2>
                <div className="bg-white p-4 rounded-lg shadow-md mt-2">
                    <p>Latest updates and announcements...</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
