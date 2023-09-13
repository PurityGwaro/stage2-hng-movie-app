import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getGenres } from "@/app/api/getMovies";
import SecondNav from "./SecondNav";

function Description({ movie }) {
  console.log("movie itself", movie);
  const [genres, setGenres] = useState([]);

  const imageSrc = (movie, imageSize = "w185") => {
    const imgBaseUrl = "https://image.tmdb.org/t/p/";
    if (movie?.poster_path) {
      return `${imgBaseUrl}${imageSize}${movie?.poster_path}`;
    } else {
      return "";
    }
  };
  // const videoSrc = (movie) => {
  //   const imgBaseUrl = "https://image.tmdb.org/t/p/";
  //   if (movie?.poster_path) {
  //     return `${imgBaseUrl}${imageSize}${movie?.backdrop_path}`;
  //   } else {
  //     return "";
  //   }
  // };
  // console.log("video src", videoSrc(movie));
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
      ?.map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
      })
      .filter(Boolean)
      .join(", ");
  };
  return <div>movie description</div>;
}

export default Description;
