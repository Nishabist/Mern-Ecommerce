import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    quantity:0
}]

const cartSlice = createSlice(
    {
        name:"cart",
        initialState,
        reducers:{
            // addToCart:((state,action)={

            // }),
            // removeFromCart:(state,action)={

            // },
            // incrementQuantity:(state,action)={

            // },
           
        }
    }

)


export const {addToCart}= cartSlice.actions;
export default cartSlice.reducer