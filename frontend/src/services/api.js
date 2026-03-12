import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  timeout: 30000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    console.log(`[API Request] ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(`[API Response] ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    let errorMessage = 'Something went wrong';

    if (error.response) {
      const { status, data } = error.response;
      console.error(`[API Error] ${status}`, data);

      switch (status) {
        case 400:
          errorMessage = data?.error || 'Invalid request';
          break;
        case 401:
          errorMessage = 'Unauthorized - Please check your API key';
          break;
        case 429:
          errorMessage = 'Too many requests - Please wait a moment';
          break;
        case 500:
          errorMessage = 'Server error - Please try again later';
          break;
        default:
          errorMessage = data?.error || `Error ${status}`;
      }
    } else if (error.request) {
      console.error('[API Error] No response received');
      errorMessage = 'No response from server - Please check your connection';
    } else {
      console.error('[API Error]', error.message);
      errorMessage = error.message || 'Unexpected error';
    }

    error.userMessage = errorMessage;
    return Promise.reject(error);
  }
);

export const summarizeText = async (text) => {
  const response = await api.post('/ai/summarize', { text });
  return response.data.result;
};

export const rewriteText = async (text, style = 'clear') => {
  const response = await api.post('/ai/rewrite', { text, style });
  return response.data.result;
};

export const checkHealth = async () => {
  const response = await api.get('/');
  return response.data;
};

export default api;