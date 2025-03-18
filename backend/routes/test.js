const express = require("express");
const router = express.Router();
const User = require("../models/User");
const authMiddleware = require("./auth"); // Ensure user is logged in

// Submit Test Result
router.post("/submit", authMiddleware, async (req, res) => {
  const { testName, score } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Store the test result
    user.testResults.push({ testName, score });
    await user.save();

    res.json({ message: "Test submitted successfully", testResults: user.testResults });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Fetch Test Results
router.get("/results", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("testResults");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.testResults);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const authMiddleware = require("./auth");

// import axios from "axios";

// const API_URL = "http://localhost:5000/api/test"; // Adjust based on your backend

// // Submit Test Result
// export const submitTestResult = async (token, testData) => {
//   try {
//     const response = await axios.post(`${API_URL}/submit`, testData, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error submitting test result:", error);
//     throw error;
//   }
// };

// // Fetch Test Results
// export const fetchTestResults = async (token) => {
//   try {
//     const response = await axios.get(`${API_URL}/results`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching test results:", error);
//     throw error;
//   }
// };
// module.exports=router;
