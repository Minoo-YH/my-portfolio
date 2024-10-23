
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(bodyParser.json()); // Parses incoming JSON requests

// Email route
app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a transporter using SMTP or Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: 'minoo.yaghoubi@gmail.com', 
        pass: '', 
      },
    });

    
    const mailOptions = {
      from: email, // Sender's email (client's email)
      to: 'minoo.yaghoubi@gmail.com', // Your email to receive the messages
      subject: `Message from ${name}`,
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
