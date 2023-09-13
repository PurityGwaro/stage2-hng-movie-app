import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getGenres } from "@/app/api/getMovies";

function MovieItem({ movie }) {
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
    <div className="flex flex-col w-full px-10 mb-10 md:w-1/3 lg:w-1/5 md:px-0">
      <Image
        src={imageSrc(movie)}
        alt="movie image"
        height={360}
        width={360}
      />
      <div className="flex flex-col items-start pt-4 pl-4 pr-6 md:pl-0">
        <p className="text-[#9CA3AF] font-bold">
          USA, {getYear(movie.release_date)}
        </p>
        <p className="text-2xl font-bold">{movie.title}</p>
        <div className="flex md:justify-between">
          <div className="flex justify-between">
          <Image src="/imdb-icon.svg" alt="imdb icon" width={40} height={40} className="mr-6"/>
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
