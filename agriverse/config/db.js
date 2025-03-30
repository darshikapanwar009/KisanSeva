const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",  // Check if this is correct
    password: "Panwar24",  // Replace with your actual MySQL password
    database: "agriverse",  // Ensure this matches the database you created
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("Connected to MySQL database");
    }
});

module.exports = db;
