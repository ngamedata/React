import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./feature/cart/cartslice";
import snackbarSlice from "./feature/snackbar/snackbarSlice";

export const store =configureStore({
    reducer:{
        cart:cartslice,
        snackbar:snackbarSlice,
    },

})