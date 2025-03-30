const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow frontend to call backend
app.use(bodyParser.json()); // Parse JSON requests

// 📌 Signup Route
app.post("/api/signup", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    console.log("New User:", { email, password });

    // In real implementation, save user to database (MongoDB, MySQL, etc.)

    res.status(201).json({ message: "Signup successful!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
