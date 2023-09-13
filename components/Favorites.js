"use client";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
import Link from "next/link";
import Image from "next/image";

function Favorites() {
  const favorites = useSelector(
    (state) => state.movies.favorites
  );
  return (
    <div className="flex flex-col pt-10">
      
      <div className="flex items-center mb-10">
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
      <h1 className='mb-4 text-2xl font-bold text-[#BE123C]'>Your Favorite Movies</h1>
      <div className="flex flex-wrap">
      {favorites.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
      </div>
    </div>
  );
}

export default Favorites;
