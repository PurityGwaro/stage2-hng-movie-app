"use client";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites, addToFavorites } from "@/redux/moviesSlice";
import MovieItem from "./MovieItem";
import Link from "next/link";
import Image from "next/image";

function Favorites() {
  const favorites = useSelector(
    (state) => state.movies.favorites
  ); 
  const dispatch = useDispatch();

   const handleAddToFavorites = (movie) => {
    dispatch(addToFavorites(movie));
  };

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };
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
      <div className="grid items-start justify-center max-w-full grid-cols-1 gap-10 lg:grid-cols-5 md:grid-cols-3 lg:pl-10 lg:mt-10 place-content-center">
      {favorites.map((movie, index) => (
        <MovieItem key={index} movie={movie} isFavorite={favorites.some((favMovie) => favMovie.id === movie.id)}
        addToFavorites={handleAddToFavorites}
        removeFromFavorites={handleRemoveFromFavorites}/>
      ))}
      </div>
    </div>
  );
}

export default Favorites;
