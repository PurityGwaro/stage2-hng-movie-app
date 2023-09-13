import { createSlice } from '@reduxjs/toolkit';

const searchMoviesSlice = createSlice({
  name: 'searchMovies',
  initialState: {
    searchResults: [],
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchResults } = searchMoviesSlice.actions;
export default searchMoviesSlice.reducer;
