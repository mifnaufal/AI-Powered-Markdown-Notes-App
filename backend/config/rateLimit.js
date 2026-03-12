const rateLimit = require('express-rate-limit');

const aiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 10, 
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = aiLimiter;