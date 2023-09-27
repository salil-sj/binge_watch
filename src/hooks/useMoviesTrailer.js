import { useEffect, useState } from "react";
import {
  OPTIONS,
  TREDNING_MOVIES_TRAILER_END,
  TREDNING_MOVIES_TRAILER_START,
} from "../utils/TMDBConstants";

const useMoviesTrailer = (movieId) => {
  const [trailerDetails, setTrailerDetails] = useState();

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

  useEffect(() => {
    getMovieTrailerDetails();
  }, []);

  return trailerDetails;
};

export default useMoviesTrailer;
