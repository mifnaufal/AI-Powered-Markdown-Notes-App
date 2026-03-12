import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const summarizeText = async (text) => {
  const res = await axios.post(`${API_URL}/ai/summarize`, { text });
  return res.data.result;
};

export const rewriteText = async (text, style = 'clear') => {
  const res = await axios.post(`${API_URL}/ai/rewrite`, { text, style });
  return res.data.result;
};