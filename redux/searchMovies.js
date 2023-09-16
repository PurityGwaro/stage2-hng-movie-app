import { setSearchResults } from './searchMoviesSlice';
// import { searchMovies } from '@/app/api/getMovies';

export const performSearch = (query) => async (dispatch) => {
  const API_KEY = "00c429f22e8422911cceac8a26180fc0";
  const BASE_URL = "https://api.themoviedb.org/3";
  try {
   
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const data = await response.json()
    console.log('response for search: ', data)
    dispatch(setSearchResults(data?.results));
  
  } catch (error) {
    throw error
  }
};
