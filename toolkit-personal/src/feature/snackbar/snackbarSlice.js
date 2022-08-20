import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  severity:"success",
  message:"welcome",
  isLoading: false,
};
const snackbarSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    enable: (state,{payload}) => {
      state.isLoading = true;
      state.message=payload.message;
      state.severity=payload.severity;
    },
    disable: (state) => {
      state.isLoading = false;
    },
  },
});
export const { enable,disable } = snackbarSlice.actions;

export default snackbarSlice.reducer;
