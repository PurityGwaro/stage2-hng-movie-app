"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "@/redux/moviesSlice";
import { getMovies } from "@/app/api/getMovies";
import Image from "next/image";
import MovieItem from "./MovieItem";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    const moviesData = async () => {
      const data = await getMovies();
      dispatch(setMovies(data));
    };
    moviesData();
  }, [dispatch]);
  console.log("this is the list: ", movies);
 
  return (
    <>
    <section>
      <h1>Featured Movie</h1>
      {/* add a list of popular movies */}
    </section>
    <section className="container flex flex-col items-center justify-between mx-auto md:items-start md:flex-row md:flex-wrap">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie}/>
      ))}
    </section>
    </>
  );
}

export default MovieList;
