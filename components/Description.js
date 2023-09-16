import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Image from "next/image";

function Description({ movie }) {
  console.log("movie itself", movie);
  const movies = useSelector((state) => state.movies.movies);
  const [genres, setGenres] = useState([]);
  const [movieFromRedux, setMovieFromRedux] = useState([]);
  const [singleMovie, setSingleMovie] = useState([]);

  const API_KEY = "00c429f22e8422911cceac8a26180fc0";
  const BASE_URL = "https://api.themoviedb.org/3";

  const imageSrc = (movie) => {
    const imgBaseUrl = "https://image.tmdb.org/t/p/";
    if (movie?.backdrop_path) {
      return `${imgBaseUrl}original${movie?.backdrop_path}`;
    } else {
      return "";
    }
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

  const getMovieById = async (movieId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`
      );
      const data = await response.json();
      // console.log("This is the response for a single movie:", data);
      return data;
    } catch (error) {
      throw error;
    }
  };

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
  // console.log("movie data from new fetch", singleMovie);
  const getGenreNames = (genreIds) => {
    return genreIds
      ?.map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
      })
      .filter(Boolean)
      .join(", ");
  };

  const date = singleMovie?.release_date
    ? new Date(singleMovie?.release_date).toISOString()
    : "";

  return (
    <div className="grid grid-cols-1 px-4">
      <div
        className="flex flex-col items-center justify-center mt-4 bg-center bg-no-repeat bg-cover rounded-3xl lg:w-[750px] md:h-[450px]"
        style={{
          backgroundImage: `url(${imageSrc(singleMovie)})`,
          // width: '750px',
          // height: '450px'
        }}
      >
        {/* <Image
          src={imageSrc(singleMovie)}
          alt="movie icon"
          width={20}
          height={20}
          className="w-[100%] h-[100%] mr-2 rounded-3xl relative"
        /> */}
        {/* <div className="absolute flex flex-col "> */}
        <div className="bg-[#ada492] w-[6%] rounded-full items-center justify-center p-2">
          <Image
            src="/Play.svg"
            alt="play icon"
            width={40}
            height={40}
            className=""
          />
        </div>
        <span className="text-lg font-bold text-white">Watch Trailer</span>
        {/* </div> */}
      </div>
      <div className="flex flex-col items-start pt-4 pl-4 pr-6 md:pl-0">
        <div className="flex flex-wrap items-center mb-2">
          <p className="mr-2 text-2xl" data-testid="movie-title">{singleMovie?.title}</p>
          <p className="text-[#9CA3AF] font-bold text-sm mr-2" data-testid="movie-release-date">{date}</p>
          <p className="mr-2 text-2xl font-bold" data-testid="movie-runtime">{singleMovie?.runtime}m</p>
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
        <div className="flex flex-col items-center p-2 lg:flex-row">
          <p className="mb-4 text-sm lg:w-[70%] mr-2" data-testid="movie-overview">
            {singleMovie?.overview}
          </p>
          <div className="w-[360px]">
            <button className="bg-[#BE123C] flex items-center mb-4 px- py-2 text-sm rounded-lg w-3/4 justify-center">
              <Image
                src="/Two-Tickets.svg"
                alt="two tickets"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-white">See Showtimes</span>
            </button>
            <button className="flex bg-[#f9e8ec] border-[#BE123C] border w-3/4 items-center mb-4 px-4 py-2 text-sm rounded-lg justify-center">
              <Image
                src="/List.svg"
                alt="list"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>More watch options</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between mb-10 lg:flex-row">
          <div className="mb-4 mr-20 lg:mb-0">
            <div>
              <span>Director:</span>
              <span className="text-[#BE123C] ml-2">Joseph Kosinski</span>
            </div>
            <div>
              <span>Writers:</span>
              <span className="text-[#BE123C] ml-2">
                Jim Cash, Jack Epps Jr, Peter Craig
              </span>
            </div>
            <div>
              <span>Stars:</span>
              <span className="text-[#BE123C] ml-2">
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </div>
            <button className="border border-[#C7C7C7] rounded-xl mt-2 flex items-center">
              <span className="bg-[#BE123C] text-white text-sm py-2 px-6 rounded-xl">
                Top rated movie #65
              </span>
              <span className="flex px-4">
                <span>Awards 9 nominations</span>
                <Image
                  src="/Expand-Arrow.svg"
                  width={20}
                  height={20}
                  alt="dropdown icon"
                  className="w-auto h-auto ml-2"
                />
              </span>
            </button>
          </div>
          <Image
            src="/Group-52.jpg"
            width={300}
            height={300}
            alt="list white icon"
            className="w-[70%] lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Description;
