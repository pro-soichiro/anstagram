import { REQUEST_STATE } from "../constants";

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  department: [],
};

export const departmentActionTypes = {
  FETCHING: "FETCHING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
};

export const departmentReducer = (state, action) => {
  switch (action.type) {
    case departmentActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case departmentActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        department: action.payload.department,
      };
    default:
      throw new Error();
  }
};
