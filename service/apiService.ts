
import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://scribeai-backend.onrender.com/api',
  withCredentials: true,
});

export default apiService;