import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'next/navigation';
import SecondNav from "./SecondNav";
import Description from "./Description";

function MovieDescription() {
    const movies = useSelector((state) => state.movies.movies);
    const params = useParams()
    const movieId = params.id;

    const movie = movies.find(movie => movie.id.toString() === movieId)


  return (
    <div className="container flex pt-10 mx-auto lg:w-[70%] shadow-2xl mt-20">
        <SecondNav />
        <Description movie={movie}/>
    </div>
  )
}

export default MovieDescription
