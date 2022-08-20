import { API } from "./type";
import axios from "axios";
export const getApi = () => async (dispatch) => {
  const response = await axios.get("https://dog.ceo/api/breeds/image/random");
  dispatch({
    type: API,
    payload: response.data,
  });
};
