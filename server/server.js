const express = require('express');
const cors = require('cors');
const User = require('./User');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Array of users - hardcoded data
const users = [
    new User('user1', '1990-01-15', 35, 'user1@example.com', 'password1'),
    new User('admin', '1985-05-20', 40, 'admin@example.com', 'admin123'),
    new User('testuser', '1995-12-10', 29, 'user2@example.com', 'password2')
];

// Route for authentication
app.post('/api/auth', (req, res) => {
    const { email, password } = req.body;
    
    console.log('Login attempt:', { email, password });
    
    // Find user by email and password
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // User found - return user data without password
        const userData = user.getPublicData();
        console.log('Login successful:', userData);
        res.json(userData);
    } else {
        // User not found - return invalid response
        console.log('Login failed for:', email);
        res.json({ valid: false });
    }
});

// Default route
app.get('/', (req, res) => {
    res.json({ message: 'Week 5 Server is running!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Available users:');
    users.forEach(user => {
        console.log(`- ${user.email} / ${user.password}`);
    });
});
