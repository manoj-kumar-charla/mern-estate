import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import {persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // inorder to avoid browser errors for not serializing our variables (i.e. states)
    }),
});

export const persistor = persistStore(store);

// watch 'react redux toolkit' yt vedio from piyush garg for better understanding
