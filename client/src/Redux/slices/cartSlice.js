import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
   
   quantity:0,
    isLoggedIn:true,
};

const cartSlice =createSlice({
    name:"cart",
initialState,
reducers:{
    
AddToCart:(state,action)=>{
    // state.cartItems.push(action.payload);
    state.cartItems=action.payload;
  
   state.quantity+=1;
},
    RemoveFromCart:(state,action)=>{

    },
   
}
});

export const {AddToCart,RemoveFromCart} = cartSlice.actions;
export default cartSlice.reducer;