const https = require('https');

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
        res.setHeader('Access-Control-Allow-Origin', '*');
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
};
