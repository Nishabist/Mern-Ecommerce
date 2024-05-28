import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';


const persistConfig = {
  key: 'root',
  storage,
}
const reducer = combineReducers({
  cart:cartSlice,
  user:userSlice,
})
const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
  reducer: persistedReducer,
    
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger),
});


export const persistor = persistStore(store)