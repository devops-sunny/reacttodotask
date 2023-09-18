import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: false,
  registerUserData: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user = {};
      state.isAuthenticated = false;
    },
    registerUser: (state, action) => {
      const newregisterUserData = action.payload;
      state.registerUserData = [...state.registerUserData, newregisterUserData];
    },
  },
});

export const { loginUser, logoutUser, registerUser } = authSlice.actions;
export default authSlice.reducer;
