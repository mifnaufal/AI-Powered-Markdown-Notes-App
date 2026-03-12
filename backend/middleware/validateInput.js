const validateInput = (req, res, next) => {
  const { text } = req.body;
  const MAX_LENGTH = 5000; 

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Text is required and must be a string' });
  }

  if (text.trim().length === 0) {
    return res.status(400).json({ error: 'Text cannot be empty' });
  }

  if (text.length > MAX_LENGTH) {
    return res.status(400).json({ error: `Text exceeds ${MAX_LENGTH} characters` });
  }

  next();
};

module.exports = validateInput;