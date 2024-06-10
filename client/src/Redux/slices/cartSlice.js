import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    quantity: 0,
    isLoggedIn: true,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddToCart: (state, action) => {
            // Check if cartItems is an array before updating
            if (Array.isArray(state.cartItems)) {
                state.cartItems = [...state.cartItems, action.payload];
            } else {
                console.error("cartItems is not an array", state.cartItems);
                // You can optionally reset it to an array if it's not
                state.cartItems = [action.payload];
            }
            // Optionally update the quantity
            state.quantity += 1;
        },
        RemoveFromCart: (state, action) => {
            // Add your logic for removing an item from the cart here
        },
    },
});

export const { AddToCart, RemoveFromCart } = cartSlice.actions;
export default cartSlice.reducer;
