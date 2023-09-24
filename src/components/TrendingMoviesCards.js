import React from 'react'
import { POSTER_URL } from '../utils/TMDBConstants'

const TrendingMoviesCards = ({movieData}) => {


    const {id , overview , backdrop_path , original_title , vote_average } = movieData
    console.log(movieData)
    return (
    <div className='w-[350px] m-3 '>
     <img
            className="rounded-lg"
            src={POSTER_URL + backdrop_path}
          />
    </div>
  )
}

export default TrendingMoviesCards