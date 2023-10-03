import React from 'react'
import { useSelector } from 'react-redux';
import MovieCards from './MovieCards';
import Poster from './Poster';

const UpCommingMovies = () => {
    
    const movieDetails = useSelector((store)=>store.movieData.upCommingMovies)
    
      if (movieDetails == null) return null;

      {console.log("Up comming")}
      {console.log(movieDetails)}
    
      const { original_title, backdrop_path, vote_average, overview, id } =
        movieDetails?.results[2];
    
      return (
        <div>
    
          <h1 className="text-white ml-11 text-2xl font-bold mb-1">
            Up-comming Movies
          </h1>
          <div className="flex overflow-x-scroll px-8 ">
            <div className="flex ">
              {movieDetails.results.map((movie) => {
                return <MovieCards movieData={movie} store="upCommingMovies" />;
              })}
            </div>
          </div>
        </div>
      );
}

export default UpCommingMovies