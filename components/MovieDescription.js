import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { getGenres } from "@/app/api/getMovies";
import SecondNav from "./SecondNav";
import Description from "./Description";

function MovieDescription() {
    const movies = useSelector((state) => state.movies.movies);
    const params = useParams()
    const movieId = params.id;

    const movie = movies.find(movie => movie.id.toString() === movieId)


  return (
    <div className="container flex items-center justify-between pt-10 mx-auto">
        <SecondNav />
        <Description movie={movie}/>
    </div>
  )
}

export default MovieDescription
