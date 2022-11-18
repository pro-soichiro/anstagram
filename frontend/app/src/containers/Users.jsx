import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../apis/users";

// reducer
import {
  initialState,
  usersActionTypes,
  usersReducer,
} from "../reducers/users";

// constants
import { REQUEST_STATE } from "../constants";

export const Users = () => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    dispatch({ type: usersActionTypes.FETCHING });

    fetchUsers()
      .then((data) => {
        dispatch({
          type: usersActionTypes.FETCH_SUCCESS,
          payload: {
            users: data.users,
          },
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <>
      <h1>社員一覧</h1>
      {state.fetchState === REQUEST_STATE.LOADING ? (
        <p>LOADING...</p>
      ) : (
        <>
          {state.users.map((user) => (
            <Link
              to={`/users/${user.id}`}
              key={user.id}
              style={{ textDecoration: "none" }}
            >
              <small>{user.full_name_kana}</small>
              <p>{user.full_name}</p>
            </Link>
          ))}
        </>
      )}
    </>
  );
};
