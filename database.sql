CREATE DATABASE your_database_name;

USE your_database_name;

CREATE TABLE business_ideas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idea_title VARCHAR(255) NOT NULL,
  idea_description TEXT NOT NULL,
  target_market VARCHAR(255) NOT NULL,
  business_category VARCHAR(100) NOT NULL,
  founder_name VARCHAR(255) NOT NULL,
  founder_experience TEXT NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
