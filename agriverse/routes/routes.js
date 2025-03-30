const express = require('express');
const router = express.Router();
const db = require('./db'); // Your database connection file

router.post('/api/signup', (req, res) => {
    const { email, password, name, mobile, homeaddress, farmaddress, aadhar } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const sql = "INSERT INTO farmers (email, password, name, mobile, homeaddress, farmaddress, aadhar) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [email, password, name, mobile, homeaddress, farmaddress, aadhar], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Error inserting data' });
        }
        res.json({ message: 'Signup successful!' });
    });
});

module.exports = router;
