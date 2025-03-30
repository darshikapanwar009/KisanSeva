router.post('/signup', (req, res) => {
    console.log('Received signup data:', req.body); // ✅ Debugging

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";

    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error('❌ Database error:', err); // ✅ Print any SQL errors
            return res.status(500).json({ message: 'Error inserting data', error: err });
        }
        console.log('✅ User added to database:', result);
        res.json({ message: 'Signup successful!' });
    });
});
