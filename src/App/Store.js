import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../features/cryptoApi/api/cryptoApi";
import cryptoReducer from "../features/cryptoApi/slice/cryptoSlice";

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});
