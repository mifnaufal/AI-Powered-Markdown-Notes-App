const openai = require('../config/openai');

const PROMPTS = {
  summarize: (text) => [
    { role: 'system', content: 'You are a helpful assistant that summarizes notes.' },
    { role: 'user', content: `Summarize this markdown text into bullet points:\n\n${text}` }
  ],
  rewrite: (text, style = 'clear') => [
    { role: 'system', content: 'You are an editor improving clarity.' },
    { role: 'user', content: `Rewrite this to be clearer in a ${style} style:\n\n${text}` }
  ],
  simplify: (text) => [
    { role: 'system', content: 'You explain complex topics simply.' },
    { role: 'user', content: `Simplify this text for a beginner:\n\n${text}` }
  ]
};

async function generateContent(type, text, style = null) {
  if (!PROMPTS[type]) {
    const error = new Error('Invalid AI type');
    error.status = 400;
    throw error;
  }

  try {
    const messages = style ? PROMPTS[type](text, style) : PROMPTS[type](text);

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    error.status = error.status || 500;
    throw error;
  }
}

module.exports = { generateContent };