import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice';
export const store = configureStore({
  reducer: {user : userReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // inorder to avoid browser errors for not serializing our variables (i.e. states)
    }),
});


// watch 'react redux toolkit' yt vedio from piyush garg for better understanding