import { useEffect, useReducer } from "react";
import { fetchPrefectures } from "../apis/prefectures";

// reducers
import {
  initialState,
  prefecturesActionTypes,
  prefecturesReducer,
} from "../reducers/prefectures";

// constants
import { REQUEST_STATE } from "../constants";

export const Prefectures = () => {
  const [state, dispatch] = useReducer(prefecturesReducer, initialState);

  useEffect(() => {
    dispatch({ type: prefecturesActionTypes.FETCHING });

    fetchPrefectures()
      .then((data) => {
        dispatch({
          type: prefecturesActionTypes.FETCH_SUCCESS,
          payload: {
            prefectures: data.prefectures,
          },
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <>
      <h1>都道府県別</h1>
      {state.fetchState === REQUEST_STATE.LOADING ? (
        <p>LOADING...</p>
      ) : (
        <ul>
          {state.prefectures.map((prefecture) => (
            <li key={prefecture.id}>{prefecture.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};
