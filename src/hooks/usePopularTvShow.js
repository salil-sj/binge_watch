import { useDispatch } from "react-redux";
import { OPTIONS, POPULAR_TV_SHOW } from "../utils/TMDBConstants";
import { enrichPopularTvShows } from "../store/movieDataSlice";
import { useEffect } from "react";

const usePopularTvShow =()=>{

    const dispatch = useDispatch();

    const getPopularTvShows = async()=>{
        const data = await fetch(POPULAR_TV_SHOW,OPTIONS)
        const result = await data.json();
        dispatch(enrichPopularTvShows(result))

    }
    useEffect(()=>{
        getPopularTvShows()
    },[])

}

export default usePopularTvShow;