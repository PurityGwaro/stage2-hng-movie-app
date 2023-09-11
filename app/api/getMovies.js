import axios from 'axios';

const API_KEY = '00c429f22e8422911cceac8a26180fc0';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular/?api_key=${API_KEY}`);
    console.log('this is the response', response)
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
