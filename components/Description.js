import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getGenres, getMovieById } from "@/app/api/getMovies";
import SecondNav from "./SecondNav";

function Description({ movie }) {
  console.log("movie itself", movie);
  const movies = useSelector((state) => state.movies.movies);
  const [genres, setGenres] = useState([]);
  const [movieFromRedux, setMovieFromRedux] = useState([]);
  const [singleMovie, setSingleMovie] = useState([]);

  const imageSrc = (movie, imageSize = "w185") => {
    const imgBaseUrl = "https://image.tmdb.org/t/p/";
    if (movie?.backdrop_path) {
      return `${imgBaseUrl}${imageSize}${movie?.backdrop_path}`;
    } else {
      return "";
    }
  };

  const getYear = (year) => {
    return year?.split("-")[0];
  };
  const getRating = (vote_average) => {
    const rating = `${vote_average?.toFixed(1) * 10} / 100`;
    return rating;
  };
  const percentageRating = (vote_average) => {
    const percentage = `${vote_average * 10}%`;
    return percentage;
  };
  const params = useParams();
  useEffect(() => {
    const movieId = params.id;

    const getSingleMovie = async (movieId) => {
      const movieData = await getMovieById(movieId);
      setSingleMovie(movieData);
    };
    getSingleMovie(movieId);

    const movieFromRedux = movies.find(
      (movie) => movie.id.toString() === movieId
    );
    setMovieFromRedux(movieFromRedux);

    async function fetchGenreData() {
      const genreData = await getGenres();
      setGenres(genreData);
    }

    fetchGenreData();
  }, []);
  console.log("movie data from new fetch", singleMovie);
  const getGenreNames = (genreIds) => {
    return genreIds
      ?.map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
      })
      .filter(Boolean)
      .join(", ");
  };
  function formatRuntime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedRuntime = `${hours}h ${remainingMinutes}m`;

    return formattedRuntime;
  }
   
  const date = singleMovie?.release_date ? new Date(singleMovie?.release_date).toISOString() : ''
  
  return (
    <div className="grid grid-cols-1 px-4 pt-10">
      <div
        className="w-full bg-center bg-no-repeat bg-cover border"
        style={{
          backgroundImage: `url(${imageSrc(singleMovie)})`,
        }}
      ></div>
      <div className="flex flex-col items-start pt-4 pl-4 pr-6 md:pl-0">
        <div className="flex items-center mb-2">
          <p className="mr-2 text-2xl">{singleMovie?.title}</p>
          <p className="text-[#9CA3AF] font-bold text-2xl mr-2">
            {date}
          </p>
          <p className="mr-2 text-2xl font-bold">
            {singleMovie?.runtime}m
          </p>
          <p className="text-[#9CA3AF]">
            {getGenreNames(movieFromRedux?.genre_ids)}
          </p>
        </div>
        <div className="flex mb-2">
          <div className="flex mr-2">
            <Image
              src="/imdb-icon.svg"
              alt="imdb icon"
              width={40}
              height={40}
              className="w-auto h-auto mr-6"
            />
            <span>{getRating(singleMovie?.vote_average)}</span>
          </div>
          <div className="flex items-center justify-between">
            <Image
              src="/tomato-icon.svg"
              alt="imdb icon"
              width={20}
              height={20}
              className="w-auto h-auto mr-2"
            />
            <span>{percentageRating(singleMovie?.vote_average)}</span>
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm">{singleMovie?.overview}</p>
          <div>
            <button>
              <Image 
              src='/Two-Tickets.svg'
              alt='two tickets'
              width={20}
              height={20}
              />
              <span>See Showtimes</span>
            </button>
            <button>
            <Image 
              src='/List.svg'
              alt='list'
              width={20}
              height={20}
              />
              <span>More watch options</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
