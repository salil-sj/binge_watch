import React from 'react'
import { useSelector } from 'react-redux'
import MovieCards from './MovieCards'

const PopularTvShow = () => {
    const data = useSelector((store)=>store.movieData.popularTvSHow)

    if(data==null) return
    return (
      <div>
          
        <h1 className="text-white ml-11 text-2xl font-bold mb-1">
          Popular
        </h1>
          <div className="flex overflow-x-scroll px-8 ">
          <div className="flex ">
            
            {data.results.map((movie) => {
              return <MovieCards movieData={movie} store="popularTvSHow" />;
            })}
          </div>
          <h1>.</h1>
          <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1>
        </div>
      </div>
    )
}

export default PopularTvShow