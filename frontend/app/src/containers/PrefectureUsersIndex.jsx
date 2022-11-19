import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { fetchPrefectureUsersIndex } from "../apis/users/prefectures";

// reducers
import {
  initialState,
  prefecturesActionTypes,
  prefecturesReducer,
} from "../reducers/prefecture_users_index";

// constants
import { REQUEST_STATE } from "../constants";

export const PrefectureUsersIndex = () => {
  const [state, dispatch] = useReducer(prefecturesReducer, initialState);

  useEffect(() => {
    dispatch({ type: prefecturesActionTypes.FETCHING });

    fetchPrefectureUsersIndex()
      .then((data) => {
        dispatch({
          type: prefecturesActionTypes.FETCH_SUCCESS,
          payload: {
            prefectures: data.prefecture_users,
          },
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <>
      <h1>社員一覧/都道府県別</h1>
      {state.fetchState === REQUEST_STATE.LOADING ? (
        <p>LOADING...</p>
      ) : (
        <>
          {state.prefectures.map((prefecture) => (
            <Link
              key={prefecture.id}
              to={`/users/prefectures/${prefecture.id}`}
              style={{ textDecoration: "none" }}
            >
              <div>
                {prefecture.name} : {prefecture.total}人
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
};
