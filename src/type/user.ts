export type IUser = {
  date: Date;
  message?: string;
  nickname?: string;
};

export type StateUser = {
  users: IUser[];
  loading: boolean;
  error: null | string;
};

export interface FetchUserAction {
  type: "FETCH_USERS";
}
export interface FetchSuccessAction {
  type: "FETCH_USERS_SUCCESS";
  payload: IUser[];
}
interface FetchErrorAction {
  type: "FETCH_USERS_ERROR";
  payload: string;
}

export type UserAction =
  | FetchUserAction
  | FetchSuccessAction
  | FetchErrorAction;
