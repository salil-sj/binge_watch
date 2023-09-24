import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  OPTIONS,
  TREDNING_MOVIES_TRAILER_END,
  TREDNING_MOVIES_TRAILER_START,
} from "../utils/TMDBConstants";

const MovieDetails = () => {
  const [trailerDetails, setTrailerDetails] = useState();
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("v");

  const movieDetais = useSelector(
    (store) => store.movieData.trendingMovieDetails
  )?.results;
  const movieData = movieDetais?.filter((movie) => movie.id == movieId);

  const getMovieTrailerDetails = async () => {
    const data = await fetch(
      TREDNING_MOVIES_TRAILER_START + movieId + TREDNING_MOVIES_TRAILER_END,
      OPTIONS
    );
    const result = await data.json();
    const filterData = result?.results?.filter(
      (movie) => (movie.type = "Trailer")
    )[0];
    setTrailerDetails(filterData);
  };

  console.log("Movie data ");
  console.log(movieData);

  useEffect(() => {
    getMovieTrailerDetails();
  }, []);

  if (movieData == null) return;

  return (
    <div className="relative">
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
      <div className="absolute top-10 sm:top-[400px] left-3 sm:left-24">
        <h1 className="text-2xl sm:text-8xl font-bold text-white">
          {movieData[0].original_title}
        </h1>
        <h1 className="text-2xl sm:text-lg mt-6 w-[70%] text-white">
          {movieData[0].overview}
        </h1>
        <div className="mt-2">
            <button className="opacity-70 hover:opacity-50 hover:bg-slate-400 hover:font-bold bg-gray-600 p-3 rounded-lg mr-3 text-white">Rent HD  ₹500 </button>
            <button className="opacity-70 hover:opacity-50 hover:bg-slate-400 hover:font-bold bg-gray-600 p-3 rounded-lg  text-white">More Purchase Options</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
