import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../apis/users";
// chakra ui
import {
  Spinner,
  Heading,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
} from "@chakra-ui/react";

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
  }, [id]);

  return (
    <>
      <Heading size="md" my={4}>
        社員詳細
      </Heading>
      {state.fetchState === REQUEST_STATE.LOADING ? (
        <Spinner />
      ) : (
        <TableContainer>
          <Table size="sm">
            <Tbody>
              <Tr>
                <Th>しめい</Th>
                <Td>{state.user.full_name_kana}</Td>
              </Tr>
              <Tr>
                <Th>氏名</Th>
                <Td>{state.user.full_name}</Td>
              </Tr>
              <Tr>
                <Th>ニックネーム</Th>
                <Td>{state.user.nickname}</Td>
              </Tr>
              <Tr>
                <Th>性別</Th>
                <Td>{state.user.gender}</Td>
              </Tr>
              <Tr>
                <Th>所属部署</Th>
                <Td>
                  {state.user.departments &&
                    state.user.departments.map((dep) => (
                      <Box key={dep}>{dep}</Box>
                    ))}
                </Td>
              </Tr>
              <Tr>
                <Th>誕生日</Th>
                <Td>
                  {state.user.birthday} {state.user.age}歳
                </Td>
              </Tr>
              <Tr>
                <Th>入社日</Th>
                <Td>{state.user.date_of_join}</Td>
              </Tr>
              <Tr>
                <Th>出身地</Th>
                <Td>
                  {state.user.birthplace_name} {state.user.birthplace_detail}
                </Td>
              </Tr>
              <Tr>
                <Th>趣味</Th>
                <Td>{state.user.hobby}</Td>
              </Tr>
              <Tr>
                <Th>特技</Th>
                <Td>{state.user.skill}</Td>
              </Tr>
              <Tr>
                <Th>座右の銘</Th>
                <Td>{state.user.motto}</Td>
              </Tr>
              <Tr>
                <Th>経歴</Th>
                <Td>{state.user.career}</Td>
              </Tr>
              <Tr>
                <Th>メモ</Th>
                <Td>{state.user.memo}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
