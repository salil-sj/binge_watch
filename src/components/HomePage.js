import React from 'react'
import TrendingMovies from './TrendingMovies'
import PopularMovies from './PopularMovies'
import useTrendingMovies from '../hooks/useTrendingMovies';
import UpCommingMovies from './UpCommingMovies';
import usePopularMovie from '../hooks/usePopularMovie';
import useUpCommingMovies from '../hooks/useUpCommingMovies';
import useAiringToday from '../hooks/useAiringToday';
import AiringTodayTvShow from './AiringTodayTvShow';
import usePopularTvShow from '../hooks/usePopularTvShow';
import PopularTvShow from './PopularTvShow';
import CardShimmer from './Shimmer/CardShimmer';

const HomePage = () => {

  // Getting data from API and setting it to store for further components use:
  useTrendingMovies();
   usePopularMovie();
   useUpCommingMovies();
   useAiringToday()
   usePopularTvShow();

  return (
    <div className='bg-gray-950'>
      
       
        <TrendingMovies/>
        <PopularMovies/>
        <UpCommingMovies/>
        <h1 className='text-white text-6xl font-bold m-4 p-2 ml-7 mt-6 mb-5'>TV Shows</h1>
        <AiringTodayTvShow/>
        <PopularTvShow/>
    </div>
  )
}

export default HomePage