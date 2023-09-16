"use client";
import MovieList from '@/components/MovieList'
import Poster from '@/components/Poster'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "@/redux/moviesSlice";

export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const API_KEY = "00c429f22e8422911cceac8a26180fc0";

  useEffect(() => {
    const moviesData = async () => {
      try {
        const api = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated/?api_key=${API_KEY}`
        );
    
        if (!api.ok) throw new Error("Can not fetch the movie data!");
    
        const data = await api.json();
        dispatch(setMovies(data?.results));
      } catch(err) {
        console.log('Error fetching movie data: ', err);
      }
    };

    moviesData();
  }, [dispatch]);
// console.log('movies fetched on home component: ', movies)
  return (
    <main className="container mx-auto">
      <Poster movies={movies}/>
      <MovieList movies={movies}/>
    </main>
  );
}
