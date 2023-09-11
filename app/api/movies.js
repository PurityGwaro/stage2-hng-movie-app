import axios from 'axios';

const API_KEY = 'MY_API_KEY';
const BASE_URL = '';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
