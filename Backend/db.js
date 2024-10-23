// db.js
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',       // XAMPP will run MySQL locally
  user: 'root',            // XAMPP's default MySQL user is 'root'
  password: '',            // XAMPP default has no password for root
  database: 'portfolioDB'   // Name of the database you created in phpMyAdmin
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

module.exports = connection;
