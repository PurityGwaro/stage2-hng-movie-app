"use client";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
import Link from "next/link";
import Image from "next/image";

function SearchResults() {
  const searchResults = useSelector(
    (state) => state.searchMovies.searchResults
  );
  return (
    <div className="flex flex-wrap pt-10">
      <div className="flex items-center justify-between">
        <Image
          src="/tv.svg"
          alt="tv logo"
          width={40}
          height={40}
          className="mr-4"
        />
        <Link href="/" className="mr-10 text-3xl font-bold text-black md:mr-0">
          MovieBox
        </Link>
      </div>
      {searchResults.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </div>
  );
}

export default SearchResults;
