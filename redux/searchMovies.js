import { setSearchResults } from './searchMoviesSlice';
import { searchMovies } from '@/app/api/getMovies';

export const performSearch = (query) => async (dispatch) => {
  try {
    const results = await searchMovies(query);
    
    dispatch(setSearchResults(results));
  } catch (error) {
    throw error
  }
};
