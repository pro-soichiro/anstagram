import { useEffect, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchDepartmentUsersShow } from "../apis/users/departments";

// reducer
import {
  initialState,
  departmentsActionTypes,
  departmentsReducer,
} from "../reducers/department_users_show";

// constants
import { REQUEST_STATE } from "../constants";

export const DepartmentUsersShow = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(departmentsReducer, initialState);

  useEffect(() => {
    dispatch({ type: departmentsActionTypes.FETCHING });

    fetchDepartmentUsersShow(id)
      .then((data) => {
        dispatch({
          type: departmentsActionTypes.FETCH_SUCCESS,
          payload: {
            department: data.department,
          },
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }, [id]);
  return (
    <>
      {state.fetchStete === REQUEST_STATE.LOADING ? (
        <p>LOADING...</p>
      ) : (
        <>
          <h2>
            {state.department.name}の社員一覧 / {state.department.total}人
          </h2>
          {state.department.department_users &&
            state.department.department_users.map((user) => (
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
