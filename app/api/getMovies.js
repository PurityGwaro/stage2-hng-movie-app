import axios from "axios";

const API_KEY = "00c429f22e8422911cceac8a26180fc0";
const BASE_URL = "https://api.themoviedb.org/3";
// const BASE_URL = 'https://api.themoviedb.org/3';
// https://api.themoviedb.org/3/movie/top_rated
// export const getMovies = async () => {
//   try {
//     const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated/?api_key=${API_KEY}`);
//     console.log('this is the response for movies', response)
//     return response.data.results;
//   } catch (error) {
//     throw error;
//   }
// };
export const getMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated/?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Fetch request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("this is the response for movies", data);
    return data.results;
  } catch (error) {
    throw error;
  }
};
export const getGenres = async () => {
  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const genres = data.genres;
    return genres;
  } catch (error) {
    console.error("Error fetching genre data:", error);
    return [];
  }
};
export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    console.log("This is the response for movies searching", response);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieById = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`
    );
    console.log("This is the response for a single movie:", response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
