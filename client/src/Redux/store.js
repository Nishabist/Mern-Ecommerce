import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
import logger from 'redux-logger';

export const store = configureStore({
    reducer:{
      cart:cartSlice,
      user:userSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger),
});
