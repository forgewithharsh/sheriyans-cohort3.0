import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  },
  reducers: {
    addToUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    removeToUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { addToUser, removeToUser } = authSlice.actions;
export default authSlice.reducer;
