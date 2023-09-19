import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name: "userDetails",
        initialState:{
            isSlideBarActive: false
        },
        reducers:{
            toggleSideBar:(state)=>{
                state.isSlideBarActive = !state.isSlideBarActive
            }
        }
    }
)

export const {toggleSideBar} = userSlice.actions
export default userSlice.reducer