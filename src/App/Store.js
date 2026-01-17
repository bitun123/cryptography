import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cryptoReducer from "../features/cryptoApi/slice/cryptoSlice";
import { cryptoApi } from "../features/cryptoApi/api/cryptoApi";
import { exchangeApi } from "../features/cryptoApi/api/exchangeApi";
import { newsApi } from "../features/cryptoApi/api/newsApi";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "crypto",
  storage,
};

const persistedCryptoReducer = persistReducer(persistConfig, cryptoReducer);

export const store = configureStore({
  reducer: {
    crypto: persistedCryptoReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [exchangeApi.reducerPath]: exchangeApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      cryptoApi.middleware,
      exchangeApi.middleware,
      newsApi.middleware
    ),
});

export const persistor = persistStore(store);
