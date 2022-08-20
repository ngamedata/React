import { Actiontypes } from "../ActionTypes/actionTypes";

export const setProducts = (products) => {
  return {
    type: Actiontypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: Actiontypes.SELECTED_PRODUCT,
    payload: product,
  };
};

