import { useEffect } from "react";
import { OPTIONS, TRENDING_MOVIES_API_URL } from "../utils/TMDBConstants";
import { enrichTrendingMovieDetails } from "../store/movieDataSlice";
import { useDispatch } from "react-redux";

const useTrendingMovies = ()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        getTrendingMovies()
    },[])

    const getTrendingMovies= async ()=>{
        // Get Trending movies from TMDB API
        const data = await fetch(TRENDING_MOVIES_API_URL ,OPTIONS);
        const result = await data.json();

        //Store trending movies in redux store
        dispatch(enrichTrendingMovieDetails(result))
        
    }

}

export default useTrendingMovies;