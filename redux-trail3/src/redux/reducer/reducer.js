import { SET_NAME } from "../types/type";

const intail = {
  userName: "hello",
};

export const reducer = (state = intail, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, userName: action.payload };
    default:
      return { state };
  }
};
