import { createSlice } from "@reduxjs/toolkit";
import { getLeads, deleteLead, addLead } from "./utils";

export const leadsSlice = createSlice({
  name: "leads",
  initialState: { leads: [], isLoading: false, error: null, message: null },
  extraReducers: {
    // GET
    [getLeads.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getLeads.fulfilled]: (state, action) => {
      state.leads = action.payload;
      state.isLoading = false;
    },
    [getLeads.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    // DELETE
    [deleteLead.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteLead.fulfilled]: (state, action) => {
      state.leads = state.leads.filter((lead) => lead.id !== action.payload);
      state.isLoading = false;
      state.message = "The lead was deleted successfuly";
    },
    [deleteLead.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    // ADD
    [addLead.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [addLead.fulfilled]: (state, action) => {
      state.leads = [...state.leads, action.payload];
      state.isLoading = false;
      state.message = "The lead was created successfuly";
    },
    [addLead.rejected]: (state, action) => {
      state.leads = [...state.leads];
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default leadsSlice.reducer;
