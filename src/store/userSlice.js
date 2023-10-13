import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name: "userDetails",
        initialState:{
            isSlideBarActive: false,
            userDetails:null
        },
        reducers:{
            toggleSideBar:(state)=>{
                state.isSlideBarActive = !state.isSlideBarActive
            },
           
            setUserDetails:(state,action)=>{
                state.userDetails = action.payload
            },
            removeUserDetails:(state)=>{
                state.userDetails=null
            }
            
        }
    }
)

export const {toggleSideBar , setUserDetails, removeUserDetails} = userSlice.actions
export default userSlice.reducer