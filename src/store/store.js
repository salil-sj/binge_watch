import { configureStore, createStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieDataSlice from "./movieDataSlice";

const store = configureStore(
    {
        reducer:{
            user: userSlice,
            movieData:movieDataSlice
        }
    }
)

export default store