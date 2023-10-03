import { useEffect } from "react";
import { OPTIONS, UPCOMMING_MOVIES } from "../utils/TMDBConstants";
import { useDispatch } from "react-redux";
import { enrichUpcommingMovies } from "../store/movieDataSlice";

const useUpCommingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpCommingMovies();
  }, []);

  const getUpCommingMovies = async () => {
    const result = await fetch(UPCOMMING_MOVIES, OPTIONS);
    const data = await result.json();
    dispatch(enrichUpcommingMovies(data));
  };

 
};

export default useUpCommingMovies;
