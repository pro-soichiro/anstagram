import { useEffect, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPrefectureUsersShow } from "../apis/users/prefectures";
// chakra ui
import {
  Spinner,
  Heading,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";

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
        <Spinner />
      ) : (
        <>
          <Heading size="md" my={4}>
            {state.prefecture.name}の社員一覧 / {state.prefecture.total}人
          </Heading>
          <TableContainer>
            <Table variant="striped" size="sm">
              <Thead>
                <Tr>
                  <Th>氏名</Th>
                  <Th>かな</Th>
                  <Th isNumeric></Th>
                </Tr>
              </Thead>
              <Tbody>
                {state.prefecture.prefecture_users &&
                  state.prefecture.prefecture_users.map((user) => (
                    <Tr key={user.id}>
                      <Td>{user.full_name}</Td>
                      <Td>{user.full_name_kana}</Td>
                      <Td isNumeric>
                        <Link to={`/users/${user.id}`}>
                          <Button
                            size="sm"
                            colorScheme="teal"
                            variant="outline"
                          >
                            詳細
                          </Button>
                        </Link>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};
