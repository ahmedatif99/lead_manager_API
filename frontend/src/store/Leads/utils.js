import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tokenConfig } from "../Auth/utils";

export const getLeads = createAsyncThunk(
  "leads/getLeads",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      const res = axios
        .get("/api/leads/", tokenConfig(getState))
        .then((res) => res.data)
        .catch((err) => rejectWithValue(err.response));
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteLead = createAsyncThunk(
  "leads/deleteLead",
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      const res = await axios
        .delete(`/api/leads/${id}/`, tokenConfig(getState))
        .then((res) => id)
        .catch((err) => rejectWithValue(err.response));
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addLead = createAsyncThunk(
  "leads/addLead",
  async (lead, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      const res = await axios
        .post("/api/leads/", lead, tokenConfig(getState))
        .then((res) => res.data)
        .catch((err) => rejectWithValue(err.response));
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
