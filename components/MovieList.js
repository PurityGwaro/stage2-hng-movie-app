import MovieItem from "./MovieItem";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites, addToFavorites } from "@/redux/moviesSlice";

function MovieList({movies}) {
  const favorites = useSelector((state) => state.movies.favorites);
  const dispatch = useDispatch();

   const handleAddToFavorites = (movie) => {
    dispatch(addToFavorites(movie));
  };

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };
  return (
    <div className="flex flex-col mb-20 md:mb-60">
      <div className="flex items-center justify-between px-4">
        <h1 className="my-10 text-2xl font-bold">Featured Movie</h1>
        <Link href="/movies" className="text-[#BE123C] hover:underline">
          See More
        </Link>
      </div>
      <Link href="/favorites" className="text-[#BE123C] hover:underline mb-4 font-bold">Go to Favorites</Link>
      <section className="flex flex-col items-center md:flex-wrap md:items-start md:flex-row">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} isFavorite={favorites.some((favMovie) => favMovie.id === movie.id)}
          addToFavorites={handleAddToFavorites}
          removeFromFavorites={handleRemoveFromFavorites}/>
        ))}
      </section>
    </div>
  );
}

export default MovieList;
