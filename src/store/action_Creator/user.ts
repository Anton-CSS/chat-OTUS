import { Dispatch } from "redux";
import {
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
} from "../reducers/userReducer";
import { UserAction } from "../../type/user";
import { getMessagesList } from "../../connection/connection";

export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: FETCH_USERS });
    const response = await getMessagesList();
    dispatch({ type: FETCH_USERS_SUCCESS, payload: response });
  } catch (e) {
    dispatch({ type: FETCH_USERS_ERROR, payload: `Error ${e}` });
  }
};
