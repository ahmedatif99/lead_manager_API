import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Helper setup config with token
export const tokenConfig = (getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};

// Check auth & get user
export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  try {
    const res = await axios
      .get("/api/auth/user", tokenConfig(getState))
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err.response));
    return res;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

// Login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios
        .post("/api/auth/login", data, config)
        .then((res) => res.data)
        .catch((err) => rejectWithValue(err.response));
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Logout
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      const res = await axios
        .post("/api/auth/logout", null, tokenConfig(getState))
        .catch((err) => rejectWithValue(err.response));
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// REGISTER
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios
        .post("/api/auth/register", data, config)
        .then((res) => res.data)
        .catch((err) => rejectWithValue(err.response));
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
