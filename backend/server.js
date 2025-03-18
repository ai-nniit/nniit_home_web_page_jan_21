// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const dotenv = require("dotenv");

// // dotenv.config();

// // const app = express();

// // app.use(express.json());
// // app.use(cors());

// // mongoose.connect(process.env.MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUndefinedTopology: true,
// // }).then(()=> console.log("mongodb connected"))
// // .catch(err => console.log("mongodb connection failed", err));

// // app.use("/api/auth", require("./routes/auth"));

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log("server running at port 5k"));


// require('dotenv').config();
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URI, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.error("MongoDB Connection Error:", err));






// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./db");

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// connectDB();

// // Routes
// const authRoutes = require("./routes/auth");  // Import properly
// app.use("/api/auth", authRoutes);  // Use correctly


// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");
const testRoutes = require("./routes/test");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB (using mongoose directly)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes); // Added test route

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
