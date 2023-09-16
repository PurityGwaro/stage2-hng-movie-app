import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function MovieItem({ movie, isFavorite, addToFavorites, removeFromFavorites }) {
  const [genres, setGenres] = useState([]);
  const API_KEY = "00c429f22e8422911cceac8a26180fc0";
  const BASE_URL = "https://api.themoviedb.org/3";


  const imageSrc = (movie, imageSize = "w185") => {
    const imgBaseUrl = "https://image.tmdb.org/t/p/";
    if (movie.poster_path) {
      return `${imgBaseUrl}${imageSize}${movie.poster_path}`;
    } else {
      return "";
    }
  };

  const getRating = (vote_average) => {
    const rating = `${vote_average.toFixed(1) * 10} / 100`;
    return rating;
  };
  const percentageRating = (vote_average) => {
    const percentage = `${vote_average * 10}%`;
    return percentage;
  };

  const getGenres = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      return data.genres;
    } catch (error) {
      console.error("Error fetching genre data:", error);
      return [];
    }
  };

  useEffect(() => {
    async function fetchGenreData() {
      const genreData = await getGenres();
      setGenres(genreData);
    }

    fetchGenreData();
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
  const date = movie?.release_date
  ? new Date(movie?.release_date).toISOString()
  : "";
  
  return (
    <div className="flex flex-col items-center justify-center w-full mb-10 md:pl-0" data-testid="movie-card shadow-3xl">
      <div className="relative">
        <Image
          src={imageSrc(movie)}
          alt="movie image"
          height={350}
          width={350}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/imdb-icon.svg";
            e.target.style.width = "370px";
            e.target.style.height = "370px";
          }}
          data-testid="movie-poster"
        />
        {isFavorite ? (
          <Image
            src="/Favorite.svg"
            alt="favourite icon"
            height={60}
            width={60}
            className="absolute w-auto h-auto bg-blue-700 top-2 right-2"
            onClick={() => removeFromFavorites(movie.id)}
          />
        ) : (
          <Image
            src="/Favorite.svg"
            alt="favourite icon"
            height={60}
            width={60}
            className="absolute w-auto h-auto top-2 right-2"
            onClick={() => addToFavorites(movie)}
          />
        )}
      </div>
      <div className="flex flex-col items-start pt-4 pl-4 pr-6 md:pl-0">
        <p className="text-[#9CA3AF] font-bold text-sm" data-testid="movie-release-date">
        {date}
        </p>
        <Link href={`/movies/${movie.id}`}>
          <p className="text-2xl font-bold" data-testid="movie-title">{movie.title}</p>
        </Link>
        <div className="flex md:justify-between">
          <div className="flex justify-between">
            <Image
              src="/imdb-icon.svg"
              alt="imdb icon"
              width={40}
              height={40}
              className="w-auto h-auto mr-6"
            />
            <span>{getRating(movie.vote_average)}</span>
          </div>
          <div className="flex items-center justify-between">
            <Image
              src="/tomato-icon.svg"
              alt="imdb icon"
              width={20}
              height={20}
              className="w-auto h-auto mr-2"
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
