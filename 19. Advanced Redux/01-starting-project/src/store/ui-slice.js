import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },

  reducers: {
    toggle(state) {
      state.CartIsVisible = !state.CartIsVisible;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
