import React, { useEffect } from "react";
import { OPTIONS, TRENDING_MOVIES_API_URL } from "../utils/TMDBConstants";

const TrendingMovies = () => {
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const result = await fetch(TRENDING_MOVIES_API_URL, OPTIONS);
    const trendingmovies = await result.json();
    console.log(trendingmovies);
    console.log(trendingmovies?.results[0])
  };

  return (
    <div className="h-screen">
      <h1 className="text-xl  sm:text-3xl font-bold  p-2  sm:p-2 ml-2 sm:ml-8 text-white">
        {" "}
        Movies
      </h1>
    </div>
  );
};

export default TrendingMovies;
