const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable or default to 5000

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// POST route for sending messages
app.post('/send', (req, res) => {
    const { name, email, message } = req.body; // Extracting data from the request body
    console.log(`Received message from ${name} (${email}): ${message}`); // Logging received data
    res.status(200).json({ status: 'success', message: 'Message received' }); // Sending response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
