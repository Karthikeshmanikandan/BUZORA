const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // Import fetch for API requests

const app = express();
const PORT = 5000;
const API_KEY = 'AIzaSyDTGkw9dh4GCfbcAeFviMIiCfHx6pQQolo'; // Replace with your real API key

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request body

// Route to handle chatbot requests
app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body.message;
    console.log('User Input:', userInput);
    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: { text: userInput },
        temperature: 0.9,
        maxTokens: 256,
      }),
    });

    const data = await response.json();
    if (data.candidates && data.candidates.length > 0) {
      res.json({ reply: data.candidates[0].output });
    } else {
      res.json({ reply: "I couldn't process your request." });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ reply: 'Error fetching response.' });
  }
});

app.get('/chat', async (req, res) => {
  try {
    // Fetching from DummyJSON (Dummy API)
    const response = await fetch('https://dummyjson.com/products/1', {
      method: 'GET', // Changed to GET
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();

    // Example: Adjust response format based on API structure
    res.json({ reply: data.title || 'Response format unexpected' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ reply: 'Error fetching response...' });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
