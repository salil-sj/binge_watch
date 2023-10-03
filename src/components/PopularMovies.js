import React, { useEffect, useState } from 'react'
import { OPTIONS, POPULAR_MOVIES } from '../utils/TMDBConstants'
import TrendingMoviesCards from './MovieCards'
import usePopularMovie from '../hooks/usePopularMovie'
import MovieCards from './MovieCards'
import { useSelector } from 'react-redux'
import CardShimmer from './Shimmer/CardShimmer'

const PopularMovies = () => {

 

  const data = useSelector((store)=>store.movieData.popularMovieDetails)

  if(data==null) return (

    <div>
      <h1 className="text-white ml-11 text-2xl font-bold mb-1">
        Popular Movies
      </h1>
    <div className='flex p-2 mx-5 '>
      <CardShimmer/>
      <CardShimmer/>
      <CardShimmer/>
      <CardShimmer/>
      <CardShimmer/>
      <CardShimmer/>
      
      
    </div>
    </div>
  )
  return (
    <div>
        
      <h1 className="text-white ml-11 text-2xl font-bold mb-1">
        Popular Movies
      </h1>
        <div className="flex overflow-x-scroll px-8 ">
        <div className="flex ">
          
          {data.results.map((movie) => {
            return <MovieCards movieData={movie} store="popularMovieDetails" />;
          })}
        </div>
        <h1>.</h1>
        <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1>
      </div>
    </div>
  )
}

export default PopularMovies