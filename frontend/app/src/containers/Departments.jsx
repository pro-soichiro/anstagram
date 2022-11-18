import { useEffect, useReducer } from "react";
import { fetchDepartments } from "../apis/departments";

// reducer
import {
  initialState,
  departmentsActionTypes,
  departmentsReducer,
} from "../reducers/departments";

// constants
import { REQUEST_STATE } from "../constants";

export const Departments = () => {
  const [state, dispatch] = useReducer(departmentsReducer, initialState);

  useEffect(() => {
    dispatch({ type: departmentsActionTypes.FETCHING });

    fetchDepartments()
      .then((data) => {
        dispatch({
          type: departmentsActionTypes.FETCH_SUCCESS,
          payload: {
            departments: data.departments,
          },
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <>
      <h1>部署一覧</h1>
      {state.fetchState === REQUEST_STATE.LOADING ? (
        <p>LOADING...</p>
      ) : (
        <ul>
          {state.departments.map((department) => (
            <li key={department.id}>{department.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};
