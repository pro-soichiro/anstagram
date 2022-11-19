import { useEffect, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPrefectureUsersShow } from "../apis/users/prefectures";

// reducers
import {
  initialState,
  prefecturesActionTypes,
  prefecturesReducer,
} from "../reducers/prefecture_users_show";

// constants
import { REQUEST_STATE } from "../constants";

export const PrefectureUsersShow = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(prefecturesReducer, initialState);

  useEffect(() => {
    dispatch({ type: prefecturesActionTypes.FETCHING });

    fetchPrefectureUsersShow(id)
      .then((data) => {
        dispatch({
          type: prefecturesActionTypes.FETCH_SUCCESS,
          payload: {
            prefecture: data.prefecture,
          },
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }, [id]);
  return (
    <>
      {state.fetchState === REQUEST_STATE.LOADING ? (
        <p>LOADING...</p>
      ) : (
        <>
          <h2>
            {state.prefecture.name}の社員一覧 / {state.prefecture.total}人
          </h2>
          {state.prefecture.prefecture_users &&
            state.prefecture.prefecture_users.map((user) => (
              <Link
                key={user.id}
                to={`/users/${user.id}`}
                style={{ textDecoration: "none" }}
              >
                <div>
                  <small>{user.full_name_kana}</small>
                  <br />
                  {user.full_name}
                </div>
              </Link>
            ))}
        </>
      )}
    </>
  );
};
