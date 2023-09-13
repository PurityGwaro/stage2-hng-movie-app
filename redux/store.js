import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import searchMoviesReducer from './searchMoviesSlice'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    searchMovies: searchMoviesReducer,
  },
});

export default store;
