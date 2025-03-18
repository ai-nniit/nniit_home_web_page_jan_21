// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const router = express.Router();

// // Register Route
// router.post("/signup", async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ message: "User already exists" });

//         // Hash password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Create new user
//         const newUser = new User({ name, email, password: hashedPassword });
//         await newUser.save();

//         res.status(201).json({ message: "User registered successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Login Route
// router.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "Invalid credentials" });

//         // Check password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         // Generate JWT Token
//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//     } catch (error) {
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// module.exports = router;







// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const router = express.Router();

// // Register Route
// router.post("/signup", async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         // Check if user already exists
//         let user = await User.findOne({ email });
//         if (user) return res.status(400).json({ message: "User already exists" });

//         // Hash password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Create new user
//         user = new User({ name, email, password: hashedPassword });
//         await user.save();

//         // Generate JWT token
//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.status(201).json({ message: "User registered successfully", token, user: { id: user._id, name, email } });
//     } catch (error) {
//         res.status(500).json({ message: "Server Error", error: error.message });
//     }
// });

// // Login Route
// router.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "Invalid credentials" });

//         // Check password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         // Generate JWT Token
//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.json({ token, user: { id: user._id, name, email } });
//     } catch (error) {
//         res.status(500).json({ message: "Server Error", error: error.message });
//     }
// });

const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// Register Route
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        // Store password as entered (not recommended for production)
        user = new User({ name, email, password });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ token, user: { id: user._id, name, email } });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        console.log("🔹 Login request received:", req.body); // Log request data

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            console.log("❌ User not found in the database");
            return res.status(400).json({ message: "Invalid credentials" });
        }

        console.log("✅ User found in database:", user.email);
        console.log("🔍 Entered password:", password);
        console.log("🔍 Stored password:", user.password);

        if (password !== user.password) {
            console.log("❌ Incorrect password entered");
            return res.status(400).json({ message: "Invalid credentials" });
        }

        if (!process.env.JWT_SECRET) {
            console.log("⚠️ JWT_SECRET is missing in .env file!");
            return res.status(500).json({ message: "Server error: Missing JWT Secret" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        console.log("✅ User logged in successfully:", user.email);
        res.json({ token, user: { id: user._id, name: user.name, email } });
    } catch (error) {
        console.error("❌ Error in login route:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// Middleware to verify JWT token
const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

// Protected Route Example
router.get("/profile", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;


//7-3-25, 12 30 pm update 

