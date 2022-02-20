import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreator from "../store/action_Creator/user";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreator, dispatch);
};
