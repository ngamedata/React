import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cartItems: [],
  message:"",
  status:'',
  amount: 150,
  total: 0,
  isLoading: true,
};
export const getApi = createAsyncThunk(
  "cart/getApi",
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(name);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.amount = state.amount + 50;
    },
  },
  extraReducers: {
    [getApi.pending]: (state) => {
      state.isLoading = true;
    },
    [getApi.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.message = action.payload.message;
      state.status=action.payload.status;
    },
    [getApi.rejected]: (state, action) => {
    //   console.log(action);
      state.isLoading = false;
    },
  },
});
console.log(cartSlice);
export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
