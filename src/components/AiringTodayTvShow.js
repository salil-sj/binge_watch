import React from "react";
import { useSelector } from "react-redux";
import MovieCards from "./MovieCards";
import CardShimmer from "./Shimmer/CardShimmer";

const AiringTodayTvShow = () => {
  const data = useSelector((store) => store.movieData.airingTodayTvShow);

  if (data == null)
    return (
      <div>
        <h1 className="text-white ml-11 text-2xl font-bold mb-1">
          Airing Today
        </h1>
        <div className="flex p-2 mx-5 ">
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
        </div>
      </div>
    );

  return (
    <div>
      <h1 className="text-white ml-11 text-2xl font-bold mb-1">Airing Today</h1>
      <div className="flex overflow-x-scroll px-8 ">
        <div className="flex ">
          {data.results.map((movie) => {
            return <MovieCards movieData={movie} store="airingTodayTvShow" />;
          })}
        </div>
        <h1>.</h1>
        <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1>{" "}
        <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1>{" "}
        <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1>{" "}
        <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1>
      </div>
    </div>
  );
};

export default AiringTodayTvShow;
