import { REQUEST_STATE } from "../constants";

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  prefectures: [],
};

export const prefecturesActionTypes = {
  FETCHING: "FETCHING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
};

export const prefecturesReducer = (state, action) => {
  switch (action.type) {
    case prefecturesActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case prefecturesActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        prefectures: action.payload.prefectures,
      };
    default:
      throw new Error();
  }
};
