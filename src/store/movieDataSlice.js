import { createSlice } from "@reduxjs/toolkit";

const movieDataSlice = createSlice(
    {
        name:"movieData",
        initialState:{
            trendingMovieDetails: null,
            popularMovieDetails: null
        },
        reducers:{
            enrichTrendingMovieDetails:(state,action)=>{
                state.trendingMovieDetails = action.payload
            },
            enrichPopularMovieDetails:(state,action)=>{
                state.popularMovieDetails=action.payload
            }
        }
    }
)

export const {enrichTrendingMovieDetails,enrichPopularMovieDetails} = movieDataSlice.actions;
export default movieDataSlice.reducer