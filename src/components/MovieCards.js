import React, { useState } from "react";
import { POSTER_URL } from "../utils/TMDBConstants";
import { Link } from "react-router-dom";
import CardShimmer from "./Shimmer/CardShimmer";


/*
This is a generic component Which takes movie daata and store name and display movie cards
*/
const MovieCards = ({ movieData , store }) => {
  const { id, overview, backdrop_path, original_title, vote_average } =
    movieData;

  const [isLoading , setIsImageLoading] = useState(true)

    const handleImageLoad = ()=>{
      setIsImageLoading(false)
    }
 
  return (
    <div className="w-[350px] m-3 transition-transform transform  hover:scale-[125%]  h-full relative hover:z-50 max-w-350 max-h-30 ">
      {isLoading && <CardShimmer/>}
      <img className={`rounded-lg    ${isLoading ? 'hidden' : ''}`} src={POSTER_URL + backdrop_path}
      onLoad={handleImageLoad}
      />

      <div className="opacity-0 group hover:opacity-100 ">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent  to-black "></div>
        <div className="absolute top-10 sm:top-6 left-2 sm:left-5 p-1">
          <h1 className="text-2xl sm:text-xl  font-bold text-white mt-2 ">
            {original_title}
          </h1>
          <h1 className="text-yellow-600 font-bold p-1 text-xs ">
            {vote_average}/10
          </h1>
          <h1 className="text-xs   text-white">
            {overview.split(" ").slice(0, 25).join(" ") + " ........."}
          </h1>
          {/* <Link to={"/moreDetails?v=" + id}>
              <button className="bg-white p-1 sm:p-4 mt-4 sm:mt-10 rounded-md font-bold hover:opacity-20 ">
                More Details
              </button>
            </Link> */}
          <Link to={"/browse/moreDetails?v=" + id + "&store="+store}>
            <button className="bg-white p-1 my-2 font-bold rounded-lg text-sm">
              More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
