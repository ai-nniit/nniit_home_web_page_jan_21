// import React, { useState } from "react";
// import { login } from "../api/auth";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await login(email, password);
//             navigate("/dashboard"); // Redirect after login
//         } catch (err) {
//             setError(err);
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             {error && <p style={{ color: "red" }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;





// import { useState } from "react";
// import { login } from "../api/auth";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await login(email, password);
//             navigate("/dashboard"); // Redirect after login
//         } catch (err) {
//             setError(err.message || "Login failed");
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded-lg shadow-md w-80">
//                 <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//                 {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
//                 <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//                     <input 
//                         type="email" 
//                         placeholder="Email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         required 
//                         className="p-2 border rounded-md w-full"
//                     />
//                     <input 
//                         type="password" 
//                         placeholder="Password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                         required 
//                         className="p-2 border rounded-md w-full"
//                     />
//                     <button 
//                         type="submit" 
//                         className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//                     >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;





// import { useState } from "react";
// import { login } from "../api/auth";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(""); // Clear previous errors

//         try {
//             const response = await login(email, password);

//             // Store token and user data in localStorage
//             localStorage.setItem("token", response.token);
//             localStorage.setItem("user", JSON.stringify(response.user));

//             navigate("/dashboard"); // Redirect after login
//         } catch (err) {
//             setError(err.message || "Login failed. Please check your credentials.");
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded-lg shadow-md w-80">
//                 <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//                 {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}
//                 <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//                     <input 
//                         type="email" 
//                         placeholder="Email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         required 
//                         className="p-2 border rounded-md w-full"
//                     />
//                     <input 
//                         type="password" 
//                         placeholder="Password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                         required 
//                         className="p-2 border rounded-md w-full"
//                     />
//                     <button 
//                         type="submit" 
//                         className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//                     >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;


//7-3-25 12 35 pm update

// --- components/pages/Login.jsx ---
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/dashboard");
        } catch (err) {
            setError(err.message || "Login failed. Try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
