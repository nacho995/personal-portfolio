const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const https = require('https');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

let isConnected = false;
async function connectDB() {
  if (!isConnected) {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
  }
}

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/ratings', require('../Backend/routes/ratingRoutes'));

app.post('/api/chat', (req, res) => {
  const { message, context, history } = req.body;
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Chat not configured' });
  }

  const payload = JSON.stringify({
    model: 'llama-3.1-8b-instant',
    messages: [
      { role: 'system', content: context || '' },
      ...(history || []),
      { role: 'user', content: message }
    ],
    max_tokens: 300,
    temperature: 0.7
  });

  const options = {
    hostname: 'api.groq.com',
    path: '/openai/v1/chat/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const groqReq = https.request(options, (groqRes) => {
    let data = '';
    groqRes.on('data', (chunk) => { data += chunk; });
    groqRes.on('end', () => {
      try {
        const parsed = JSON.parse(data);
        if (groqRes.statusCode !== 200) {
          return res.status(groqRes.statusCode).json({ error: parsed.error?.message || 'Groq error' });
        }
        res.json(parsed);
      } catch (e) {
        res.status(500).json({ error: 'Failed to parse response' });
      }
    });
  });

  groqReq.on('error', (error) => {
    res.status(500).json({ error: error.message });
  });

  groqReq.write(payload);
  groqReq.end();
});

module.exports = app;
