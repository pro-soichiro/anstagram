import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { fetchPrefectureUsersIndex } from "../apis/users/prefectures";
// chakra ui
import {
  Skeleton,
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
      <Heading size="md" my={4}>
        社員一覧/都道府県別
      </Heading>
      <TableContainer>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              <Th>氏名</Th>
              <Th isNumeric>人数</Th>
              <Th isNumeric></Th>
            </Tr>
          </Thead>
          {state.fetchState === REQUEST_STATE.LOADING ? (
            <Tbody>
              <Tr>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
              </Tr>
            </Tbody>
          ) : (
            <Tbody>
              {state.prefectures.map((prefecture) => (
                <Tr key={prefecture.id}>
                  <Td>{prefecture.name}</Td>
                  <Td isNumeric>{prefecture.total}人</Td>
                  <Td isNumeric>
                    <Link to={`/users/prefectures/${prefecture.id}`}>
                      <Button size="sm" colorScheme="teal" variant="outline">
                        詳細
                      </Button>
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          )}
        </Table>
      </TableContainer>
    </>
  );
};
