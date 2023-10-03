import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  OPTIONS,
  TREDNING_MOVIES_TRAILER_END,
  TREDNING_MOVIES_TRAILER_START,
} from "../utils/TMDBConstants";

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
  AiOutlinePlus,
} from "react-icons/ai";
import { MdOutlineLocalMovies } from "react-icons/md";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

/*This movie details will take two params from route
1. Movie Id- using which it makes rest call to get trailer
2. Store Name- using which it searches on basis of it like trending movie data , popular movie data etc
*/
const MovieDetails = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("v");
  const storeName = searchParams.get("store");
  const movieDetais = useSelector(
    (store) => store.movieData[storeName]
  )?.results;
  const movieData = movieDetais?.filter((movie) => movie.id == movieId);

  //Custom Hook:
  const trailerDetails = useMoviesTrailer(movieId);

  {console.log("*******************")}
  {console.log(trailerDetails)}

  if (movieData == null) return;

  return (
    <div className="relative">
      <div className="hidden sm:block">
        <iframe
          className="h-screen w-screen p-4"
          src={
            "https://www.youtube.com/embed/" +
            trailerDetails?.key +
            "?autoplay=1&?rel=0&amp;fs=0&amp;showinfo=0&controls=0"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent  to-black "></div>
        <div className="absolute top-10 sm:top-[300px]  left-3 sm:left-24">
          <h1 className="text-2xl sm:text-8xl font-bold text-white">
            {movieData[0].original_title}
          </h1>
          <h1 className="text-2xl sm:text-8xl font-bold text-white">
            {movieData[0].original_name}
          </h1>
          <h1 className="text-2xl sm:text-lg mt-6 w-[70%] text-white">
            {movieData[0].overview}
          </h1>
          <div className="mt-6">
            <button className="opacity-70 hover:opacity-50 hover:bg-slate-400 hover:font-bold bg-gray-600 p-3 rounded-lg mr-3 text-white">
              Rent HD ₹500{" "}
            </button>
            <button className="opacity-70 hover:opacity-50 hover:bg-slate-400 hover:font-bold bg-gray-600 p-3 rounded-lg  text-white">
              More Purchase Options
            </button>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <iframe
          className="h-1/2 w-screen p-2 rounded-sm  "
          src={
            "https://www.youtube.com/embed/" +
            trailerDetails?.key +
            "?autoplay=1&?rel=0&amp;fs=0&amp;showinfo=0&controls=0"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="text-white text-4xl ml-1 font-bold p-1">
          {movieData[0].original_title}
        </h1>

        <div className="flex flex-col mx-6 mt-3 ">
          <button className="bg-white mb-2 p-2 rounded-xl font-bold hover:bg-slate-700 hover:opacity-70">
            Watch with Prime
          </button>
          <button className="bg-white opacity-20 mb-2 p-2 rounded-xl font-bold hover:bg-slate-700 hover:opacity-70">
            Rent
          </button>
          <button className="bg-white opacity-20 mb-2 p-2 rounded-xl font-bold hover:bg-slate-700 hover:opacity-70">
            More Purchase Options
          </button>
        </div>
        <h1 className="text-yellow-600 ml-4 text-sm mt-3">
          {movieData[0].vote_average + "/10"}
        </h1>
        <div className="flex">
          <h1 className="text-white ml-4 text-sm font-bold">
            {"Released on:"}
          </h1>
          <h1 className="text-white ml-4 text-sm">
            {movieData[0].release_date}
          </h1>
        </div>
        <h1 className="text-white text-sm ml-1  p-3">
          {movieData[0].overview}
        </h1>

        <div className="text-white flex text-3xl justify-center ">
          <div className="m-2 p-1 ">
            <MdOutlineLocalMovies className=" m-2" />
            <h1 className="text-white text-sm font-bold">Trailer</h1>
          </div>
          <div className="m-2 p-1 ">
            <AiOutlinePlus className=" m-2" />
            <h1 className="text-white text-sm font-bold">WatchList</h1>
          </div>
          <div className="m-2 p-1 ">
            <AiOutlineLike className=" m-2" />
            <h1 className="text-white text-sm font-bold ml-2">Like</h1>
          </div>
          <div className="m-2 p-1 ">
            <AiOutlineDislike className=" m-2 text-center" />
            <h1 className="text-white text-sm font-bold text-center">
              Dislike
            </h1>
          </div>
          <div className="m-2 p-1 ">
            <AiOutlineShareAlt className=" m-2" />
            <h1 className="text-white text-sm font-bold">Share</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
