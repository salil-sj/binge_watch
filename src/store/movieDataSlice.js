import { createSlice } from "@reduxjs/toolkit";

const movieDataSlice = createSlice(
    {
        name:"movieData",
        initialState:{
            trendingMovieDetails: null,
            popularMovieDetails: null,
            upCommingMovies: null,
            airingTodayTvShow:null,
            popularTvSHow:null
        },
        reducers:{
            enrichTrendingMovieDetails:(state,action)=>{
                state.trendingMovieDetails = action.payload
            },
            enrichPopularMovieDetails:(state,action)=>{
                state.popularMovieDetails=action.payload
            },
            enrichUpcommingMovies:(state,action)=>{
                state.upCommingMovies=action.payload
            },
            enrichAiringTodayTvSHow:(state,action)=>{
                state.airingTodayTvShow=action.payload
            },
            enrichPopularTvShows:(state,action)=>{
                state.popularTvSHow=action.payload
            }
        }
    }
)

export const {enrichTrendingMovieDetails,enrichPopularMovieDetails,enrichUpcommingMovies,enrichAiringTodayTvSHow,enrichPopularTvShows} = movieDataSlice.actions;
export default movieDataSlice.reducer