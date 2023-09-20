import { createSlice } from "@reduxjs/toolkit";

const movieDataSlice = createSlice(
    {
        name:"movieData",
        initialState:{
            trendingMovieDetails: null
        },
        reducers:{
            enrichTrendingMovieDetails:(state,action)=>{
                state.trendingMovieDetails = action.payload
            }
        }
    }
)

export const {enrichTrendingMovieDetails} = movieDataSlice.actions;
export default movieDataSlice.reducer