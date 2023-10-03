
import { GetError, AddNewSignUp } from "../Type";
import { useInsertData } from "../../HooksAxios/useInsertData";
import axios from "axios";

//create new user
export const createNewUser = (data) => async (dispatch) => {
  try {
    let config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/v1/auth/signup`,
      data
    );
    console.log(response);
    dispatch({
      type: AddNewSignUp,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: AddNewSignUp,
      payload: e.response,
    });
  }
};
