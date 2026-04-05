const https = require('https');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, context, history } = req.body || {};
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY not set' });
  }

  if (!message) {
    return res.status(400).json({ error: 'message is required' });
  }

  return new Promise((resolve) => {
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
            res.status(groqRes.statusCode).json({ error: parsed.error?.message || 'Groq error' });
          } else {
            res.status(200).json(parsed);
          }
        } catch (e) {
          res.status(500).json({ error: 'Parse error' });
        }
        resolve();
      });
    });

    groqReq.on('error', (error) => {
      res.status(500).json({ error: error.message });
      resolve();
    });

    groqReq.write(payload);
    groqReq.end();
  });
};
