import { useDispatch, useSelector } from "react-redux";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Poster from "./Poster";
import TrendingMoviesCards from "./TrendingMoviesCards";

const TrendingMovies = () => {
  const movieDetails = useSelector(
    (store) => store.movieData.trendingMovieDetails
  );

  if (movieDetails == null) return null;

  const { original_title, backdrop_path, vote_average, overview, id } =
    movieDetails?.results[2];

  return (
    <div>
      <h1 className="text-white font-bold  text-xl sm:text-3xl ml-4 sm:ml-14 pt-4 px-1  ">
        {" "}
      Movies{" "}
      </h1>
      <Poster
        title={original_title}
        poster={backdrop_path}
        average={vote_average}
        details={overview}
        id={id}
      />

    <h1 className="text-white ml-11 text-2xl font-bold mb-1">Trending Movies</h1>
      <div className="flex overflow-x-scroll px-8 ">
        <div className="flex ">
          {movieDetails.results.map((movie) => {
            return <TrendingMoviesCards movieData={movie} />;
          })}
        </div>
      </div>
      <h1>.</h1>
      <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1>s
    </div>
  );
};

export default TrendingMovies;
