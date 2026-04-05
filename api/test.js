module.exports = (req, res) => {
  res.status(200).json({ ok: true, key: process.env.GROQ_API_KEY ? 'set' : 'missing' });
};
