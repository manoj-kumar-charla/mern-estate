import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user", // is the name of the action performed, can be liking, commenting, signin, etc,.. this name can also used to refer the state of the slice, 'initialState' object here
  initialState,
  reducers: {
    signInStart: (state) => {
      // 'state' is initially 'initialState'
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
      state.loading = false;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signInStart, signInFailure, signInSuccess } = userSlice.actions;
export default userSlice.reducer;
