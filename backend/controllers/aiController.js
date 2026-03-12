const { generateContent } = require('../services/openaiService');

module.exports.summarize = async (req, res, next) => {
  try {
    const { text } = req.body;
    const result = await generateContent('summarize', text);
    res.json({ result });
  } catch (error) {
    next(error); 
  }
};

module.exports.rewrite = async (req, res, next) => {
  try {
    const { text, style } = req.body;
    const result = await generateContent('rewrite', text, style || 'clear');
    res.json({ result });
  } catch (error) {
    next(error); 
  }
};

