import React, { useEffect, useState } from "react";
import { getGenres } from "@/app/api/getMovies";
import Link from "next/link";
import Image from "next/image";

function MovieItem({ movie, isFavorite, addToFavorites, removeFromFavorites }) {
  const [genres, setGenres] = useState([]);

  const imageSrc = (movie, imageSize = "w185") => {
    const imgBaseUrl = "https://image.tmdb.org/t/p/";
    if (movie.poster_path) {
      return `${imgBaseUrl}${imageSize}${movie.poster_path}`;
    } else {
      return "";
    }
  };
  const getYear = (year) => {
    return year.split("-")[0];
  };
  const getRating = (vote_average) => {
    const rating = `${vote_average.toFixed(1) * 10} / 100`;
    return rating;
  };
  const percentageRating = (vote_average) => {
    const percentage = `${vote_average * 10}%`;
    return percentage;
  };
  useEffect(() => {
    async function fetchGenreData() {
      const genreData = await getGenres();
      setGenres(genreData);
    }

    fetchGenreData();
    const genres = getGenres();
    console.log("here are the genres: ", genres);
  }, []);
  const getGenreNames = (genreIds) => {
    return genreIds
      .map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
      })
      .filter(Boolean)
      .join(", ");
  };
  return (
    <div className="flex flex-col w-full px-10 mb-10 md:w-1/3 lg:w-1/5 md:pr-6 md:pl-0">
      <div className="relative  h-[80%]">
        <Image
          src={imageSrc(movie)}
          alt="movie image"
          height={350}
          width={350}
          onError={(e) => { e.target.onerror = null; e.target.src = '/imdb-icon.svg'; e.target.style.width = '370px'; e.target.style.height = '370px'; }}
          className=""
        />
          {isFavorite ? (
            <Image
              src="/Favorite.svg"
              alt="favourite icon"
              height={60}
              width={60}
              className="absolute bg-red-700 top-2 right-2"
              onClick={() => removeFromFavorites(movie.id)}
            />
          ) : (
            <Image
              src="/Favorite.svg"
              alt="favourite icon"
              height={60}
              width={60}
              className="absolute top-2 right-2"
              onClick={() => addToFavorites(movie)}
            />
          )}
      </div>
      <div className="flex flex-col items-start pt-4 pl-4 pr-6 md:pl-0">
        <p className="text-[#9CA3AF] font-bold">
          USA, {getYear(movie.release_date)}
        </p>
        <Link href={`/movies/${movie.id}`}
          >
          <p className="text-2xl font-bold">{movie.title}</p>
        </Link>
        <div className="flex md:justify-between">
          <div className="flex justify-between">
            <Image
              src="/imdb-icon.svg"
              alt="imdb icon"
              width={40}
              height={40}
              className="mr-6"
            />
            <span>{getRating(movie.vote_average)}</span>
          </div>
          <div className="flex items-center justify-between">
            <Image
              src="/tomato-icon.svg"
              alt="imdb icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <span>{percentageRating(movie.vote_average)}</span>
          </div>
        </div>
        <p className="text-[#9CA3AF]">{getGenreNames(movie.genre_ids)}</p>
      </div>
    </div>
  );
}

export default MovieItem;
