import { REQUEST_STATE } from "../constants";

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  user: [],
};

export const userActionTypes = {
  FETCHING: "FETCHING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case userActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case userActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        user: action.payload.user,
      };
    default:
      throw new Error();
  }
};
