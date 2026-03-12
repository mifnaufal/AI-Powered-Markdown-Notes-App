const errorHandler = (err, req, res, next) => {
  console.error(`[Error] ${err.message}`);

  if (err.status === 401) {
    return res.status(401).json({ error: 'Invalid OpenAI API Key' });
  }
  if (err.status === 429) {
    return res.status(429).json({ error: 'OpenAI Rate Limit Exceeded' });
  }

  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
};

module.exports = errorHandler;