import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { fetchDepartmentUsersIndex } from "../apis/users/departments";

// reducer
import {
  initialState,
  departmentsActionTypes,
  departmentsReducer,
} from "../reducers/department_users_index";

// constants
import { REQUEST_STATE } from "../constants";

export const DepartmentUsersIndex = () => {
  const [state, dispatch] = useReducer(departmentsReducer, initialState);

  useEffect(() => {
    dispatch({ type: departmentsActionTypes.FETCHING });

    fetchDepartmentUsersIndex()
      .then((data) => {
        dispatch({
          type: departmentsActionTypes.FETCH_SUCCESS,
          payload: {
            departments: data.department_users,
          },
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <>
      <h1>社員一覧/部門別</h1>
      {state.fetchState === REQUEST_STATE.LOADING ? (
        <p>LOADING...</p>
      ) : (
        <>
          {state.departments.map((department) => (
            <Link
              key={department.id}
              to={`/users/departments/${department.id}`}
              style={{ textDecoration: "none" }}
            >
              <div>
                {department.name} : {department.total}人
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
};
