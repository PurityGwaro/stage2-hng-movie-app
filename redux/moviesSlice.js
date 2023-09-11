import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  favorites: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    addToFavorites: (state, action) => {
      const movie = action.payload;
      state.favorites.push(movie);
    },
    removeFromFavorites: (state, action) => {
      const movieId = action.payload;
      state.favorites = state.favorites.filter((movie) => movie.id !== movieId);
    },
  },
});

export const { setMovies, addToFavorites, removeFromFavorites } = moviesSlice.actions;
export default moviesSlice.reducer;
