import { useEffect, useState } from "react";
import { OPTIONS, POPULAR_MOVIES } from "../utils/TMDBConstants";
import { useDispatch } from "react-redux";
import { enrichPopularMovieDetails } from "../store/movieDataSlice";

const usePopularMovie = () => {
  // API call to find movies:

  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const result = await fetch(POPULAR_MOVIES, OPTIONS);
    const data = await result.json();

    dispatch(enrichPopularMovieDetails(data));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovie;
