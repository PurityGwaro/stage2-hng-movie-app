import React from "react";
import NavBar from "./NavBar";
import Image from "next/image";

function Poster({ movies }) {
  const getRating = (vote_average) => {
    const rating = `${vote_average.toFixed(1) * 10} / 100`;
    return rating;
  };
  const percentageRating = (vote_average) => {
    const percentage = `${vote_average * 10}%`;
    return percentage;
  };
  return (
    <div className="bg-[url('/Poster.svg')] md:h-[14%] lg:h-[20%] h-[5%] w-100 bg-no-repeat bg-cover text-white md:mt-10 bg-fixed">
      <NavBar />
      <div className="flex flex-col w-[70%] mt-40 ml-20 lg:w-1/4 md:w-1/2">
        <h1 className="text-3xl">John Wick 3 : Parabellum</h1>
        <div className="flex my-4">
          <div className="flex">
            <Image
              src="/imdb-icon.svg"
              alt="imdb icon"
              width={40}
              height={40}
              className="mr-6"
            />
            {/* <span>{getRating(movie.vote_average)}</span> */}
          </div>
          <div className="flex items-center">
            <Image
              src="/tomato-icon.svg"
              alt="imdb icon"
              width={20}
              height={20}
              className="mr-2"
            />
            {/* <span>{percentageRating(movie.vote_average)}</span> */}
          </div>
        </div>
        <p className="text-sm">
          John Wick is on the run after killing a member of the international
          assassins&apos; guild, and with a $14 million price tag on his head,
          he is the target of hit men and women everywhere.
        </p>
        <button className="bg-[#BE123C] flex md:w-1/2 items-center justify-center py-2 rounded mt-4 w-[70%]">
          <Image
            src="/play-icon.svg"
            alt="imdb icon"
            width={20}
            height={20}
            className="mr-2"
          />
          <span>WATCH TRAILER</span>
        </button>
      </div>
    </div>
  );
}

export default Poster;
