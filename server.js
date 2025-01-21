const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username', // Replace with your MySQL username
  password: 'your_password', // Replace with your MySQL password
  database: 'your_database_name', // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Handle form submission
app.post('/submitBusinessIdea', (req, res) => {
  const {
    ideaTitle,
    ideaDescription,
    targetMarket,
    businessCategory,
    founderName,
    founderExperience,
    contactEmail,
  } = req.body;

  const query = `
    INSERT INTO business_ideas 
    (idea_title, idea_description, target_market, business_category, founder_name, founder_experience, contact_email)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [ideaTitle, ideaDescription, targetMarket, businessCategory, founderName, founderExperience, contactEmail],
    (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Failed to save data');
      } else {
        res.status(200).send('Business idea submitted successfully');
      }
    }
  );
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
