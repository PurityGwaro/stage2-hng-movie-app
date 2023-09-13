import MovieItem from "./MovieItem";
import Link from "next/link";

function MovieList({movies}) {
  
  return (
    <div className="flex flex-col mb-20 md:mb-60">
      <div className="flex items-center justify-between px-4">
        <h1 className="my-10 text-2xl font-bold">Featured Movie</h1>
        <Link href="/movies" className="text-[#BE123C] hover:underline">
          See More
        </Link>
      </div>
      <section className="flex flex-col items-center md:flex-wrap md:items-start md:flex-row">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}

export default MovieList;
