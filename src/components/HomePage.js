import React from 'react'
import TrendingMovies from './TrendingMovies'
import PopularMovies from './PopularMovies'
import useTrendingMovies from '../hooks/useTrendingMovies';

const HomePage = () => {

  // Getting data from API and setting it to store for further components use:
  useTrendingMovies();
  return (
    <div>
        <TrendingMovies/>
        <PopularMovies/>
    </div>
  )
}

export default HomePage