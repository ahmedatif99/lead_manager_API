import { configureStore } from "@reduxjs/toolkit";

import leads from "./Leads/leadsSlice";
import auth from "./Auth/authSlice";

export const store = configureStore({
  reducer: { leads, auth },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
