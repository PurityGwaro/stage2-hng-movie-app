import MovieItem from "./MovieItem";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites, addToFavorites } from "@/redux/moviesSlice";
import Poster from "./Poster";
import { useEffect } from "react";
import { setMovies } from "@/redux/moviesSlice"; 

function MovieList() {
  const favorites = useSelector((state) => state.movies.favorites);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const API_KEY = "00c429f22e8422911cceac8a26180fc0";

  const handleAddToFavorites = (movie) => {
    dispatch(addToFavorites(movie));
  };

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };
  

  useEffect(() => {
    const moviesData = async () => {
      try {
        const api = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
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
  return (
    <>
      <Poster movies={movies} />
      <div className="flex flex-col mb-20 md:mb-60">
        <div className="flex items-center justify-between px-4">
          <h1 className="my-10 text-2xl font-bold">Featured Movie</h1>
          <Link href="/movies" className="text-[#BE123C] hover:underline">
            See More
          </Link>
        </div>
        <Link
          href="/favorites"
          className="text-[#BE123C] hover:underline mb-4 font-bold pl-4"
        >
          Go to Favorites
        </Link>
        <section 
        className="flex flex-col items-center md:flex-wrap md:items-start md:flex-row">
          {movies?.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              isFavorite={favorites.some((fav) => fav.id === movie.id)}
              addToFavorites={handleAddToFavorites}
              removeFromFavorites={handleRemoveFromFavorites}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default MovieList;
