import { useDispatch, useSelector } from "react-redux";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Poster from "./Poster";

const TrendingMovies = () => {
  const movieDetails = useSelector(
    (store) => store.movieData.trendingMovieDetails
  );

  if (movieDetails == null) return null;

  console.log(movieDetails);
  const { original_title, backdrop_path , vote_average , overview } = movieDetails?.results[2];



  return (
    <div>
      <h1 className="text-white font-bold text-xl ml-4 pt-4 px-1 pb-1 ">
        {" "}
        Trending Movies{" "}
      </h1>
      <Poster title ={original_title} poster={backdrop_path} average ={vote_average} details ={overview}/>
    </div>
  );
};

export default TrendingMovies;
