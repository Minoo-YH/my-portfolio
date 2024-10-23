
const express = require('express');
const connection = require('../db'); // Import MySQL connection
const router = express.Router();

// GET all projects
router.get('/', (req, res) => {
  connection.query('SELECT * FROM projects', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching projects');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
