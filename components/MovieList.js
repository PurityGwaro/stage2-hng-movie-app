"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "@/redux/moviesSlice";
import { getMovies } from "@/app/api/getMovies";
import Image from "next/image";
import MovieItem from "./MovieItem";
import Link from 'next/link'

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

  return (
    <>
      <section>{/* add a list of popular movies */}</section>
      <div>
        <div className="flex items-center justify-between">
        <h1 className="my-10 text-2xl font-bold">Featured Movie</h1>
        <Link href='/more-movies' className="text-[#BE123C] hover:underline">See More</Link>
        </div>
        <section className="flex flex-col items-center md:flex-wrap md:items-start md:flex-row">
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </section>
      </div>
    </>
  );
}

export default MovieList;
