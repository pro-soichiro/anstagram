import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../apis/users";

// reducer
import { initialState, userActionTypes, userReducer } from "../reducers/user";

// constants
import { REQUEST_STATE } from "../constants";

export const User = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    dispatch({ type: userActionTypes.FETCHING });

    fetchUser(id)
      .then((data) => {
        dispatch({
          type: userActionTypes.FETCH_SUCCESS,
          payload: {
            user: data.user,
          },
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <>
      <h1>社員詳細</h1>
      {state.fetchState === REQUEST_STATE.LOADING ? (
        <p>LOADING...</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>しめい</th>
              <td>{state.user.full_name_kana}</td>
            </tr>
            <tr>
              <th>氏名</th>
              <td>{state.user.full_name}</td>
            </tr>
            <tr>
              <th>ニックネーム</th>
              <td>{state.user.nickname}</td>
            </tr>
            <tr>
              <th>性別</th>
              <td>{state.user.gender}</td>
            </tr>
            <tr>
              <th>所属部署</th>
              <td>
                {state.user.departments &&
                  state.user.departments.map((dep) => (
                    <div key={dep}>{dep}</div>
                  ))}
              </td>
            </tr>
            <tr>
              <th>誕生日</th>
              <td>
                {state.user.birthday} {state.user.age}歳
              </td>
            </tr>
            <tr>
              <th>入社日</th>
              <td>{state.user.date_of_join}</td>
            </tr>
            <tr>
              <th>出身地</th>
              <td>
                {state.user.birthplace_name} {state.user.birthplace_detail}
              </td>
            </tr>
            <tr>
              <th>趣味</th>
              <td>{state.user.hobby}</td>
            </tr>
            <tr>
              <th>特技</th>
              <td>{state.user.skill}</td>
            </tr>
            <tr>
              <th>座右の銘</th>
              <td>{state.user.motto}</td>
            </tr>
            <tr>
              <th>経歴</th>
              <td>{state.user.career}</td>
            </tr>
            <tr>
              <th>メモ</th>
              <td>{state.user.memo}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};
