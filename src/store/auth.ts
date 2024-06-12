import { createSlice } from "@reduxjs/toolkit";

export type TAuthState = { isAuthenticated: boolean };

const initialAuthState: TAuthState = { isAuthenticated: false };

export const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
