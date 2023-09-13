"use client";
import MovieList from '@/components/MovieList'
import Poster from '@/components/Poster'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "@/redux/moviesSlice";
import { getMovies } from "@/app/api/getMovies";



export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    const moviesData = async () => {
      const data = await getMovies();
      dispatch(setMovies(data));
    };
    moviesData();
  }, [dispatch]);
  return (
    <main className="container mx-auto">
      <Poster movies={movies}/>
      <MovieList movies={movies}/>
    </main>
  )
}
