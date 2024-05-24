import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userDetail:{},
   
    isLoggedIn:false,
};

const userSlice =createSlice({
    name:"user",
initialState,
reducers:{
    setLoginDetails:(state,action)=>{
       
        return{
            ...state,
            userDetail:action.payload,
            isLoggedIn:true
        }

    },
    handleLogout:(state)=>{

    }
}
});

export const {setLoginDetails,handleLogout} = userSlice.actions;
export default userSlice.reducer;