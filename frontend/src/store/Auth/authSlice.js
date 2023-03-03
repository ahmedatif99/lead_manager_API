import { createSlice } from "@reduxjs/toolkit";
import { getUser, loginUser, logoutUser, registerUser } from "./utils";

export const auth = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    errorauth: null,
    messageauth: null,
  },
  extraReducers: {
    // GET
    [getUser.pending]: (state, action) => {
      state.isLoading = true;
      state.errorauth = null;
    },
    [getUser.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload;
      state.messageauth = "The user get successfuly";
    },
    [getUser.rejected]: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.errorauth = action.payload;
    },

    // LOGIN
    [loginUser.pending]: (state, action) => {
      state.isLoading = true;
      state.errorauth = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.messageauth = "The user logged in successfuly";
    },
    [loginUser.rejected]: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.errorauth = action.payload;
    },
  },

  // LOGOUT
  [logoutUser.pending]: (state, action) => {
    state.isLoading = true;
    state.errorauth = null;
  },
  [logoutUser.fulfilled]: (state, action) => {
    state.token = null;
    localStorage.removeItem("token");
    state.isAuthenticated = false;
    state.isLoading = false;
    state.user = null;
    state.errorauth = null;
    state.messageauth = "The user logged out successfuly";
  },
  [logoutUser.rejected]: (state, action) => {
    state.isLoading = false;
    state.errorauth = action.payload;
  },

  // REGISTER
  [registerUser.pending]: (state, action) => {
    state.isAuthenticated = false;
    state.isLoading = true;
    state.errorauth = null;
  },
  [registerUser.fulfilled]: (state, action) => {
    localStorage.setItem("token", action.payload.token);
    state.token = action.payload.token;
    state.user = action.payload.user;
    state.isAuthenticated = true;
    state.isLoading = false;
    state.messageauth = "The user created successfuly";
  },
  [registerUser.rejected]: (state, action) => {
    localStorage.removeItem("token");
    state.token = null;
    state.user = null;
    state.isAuthenticated = false;
    state.isLoading = false;
    state.errorauth = action.payload;
  },
});

export default auth.reducer;
