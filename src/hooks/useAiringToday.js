import { useDispatch } from "react-redux";
import { AIRING_TODAY, OPTIONS } from "../utils/TMDBConstants";
import { enrichAiringTodayTvSHow } from "../store/movieDataSlice";
import { useEffect } from "react";

const useAiringToday = () => {
  const dispatch = useDispatch();

  const getTvShowDetails = async () => {
    const result = await fetch(AIRING_TODAY, OPTIONS);
    const data = await result.json();
    dispatch(enrichAiringTodayTvSHow(data));
  };

  useEffect(() => {
    getTvShowDetails();
  }, []);
};

export default useAiringToday;
