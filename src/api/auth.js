import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Backend URL

// Register (Sign-Up)
export const signup = async (name, email, password) => {
    try {
        const res = await axios.post(`${API_URL}/signup`, { name, email, password });
        localStorage.setItem("token", res.data.token); // Store token
        return res.data.user; // Return user details
    } catch (err) {
        throw err.response.data.message || "Signup failed";
    }
};

// Login
export const login = async (email, password) => {
    try {
        const res = await axios.post(`${API_URL}/login`, { email, password });
        localStorage.setItem("token", res.data.token);
        return res.data.user;
    } catch (err) {
        throw err.response.data.message || "Login failed";
    }
};

// Get User Profile (Protected)
export const getProfile = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const res = await axios.get(`${API_URL}/profile`, {
            headers: { Authorization: token }
        });
        return res.data;
    } catch (err) {
        throw err.response?.data?.message || "Failed to fetch profile";
    }
};

// Logout
export const logout = () => {
    localStorage.removeItem("token");
};

export const submitTestResult = async (token, testData) => {
    return await axios.post(`${API_URL}/test/submit`, testData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  
  export const fetchTestResults = async (token) => {
    return await axios.get(`${API_URL}/test/results`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };