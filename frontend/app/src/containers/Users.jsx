import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../apis/users";
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
      <Heading size="md" my={4}>
        社員一覧
      </Heading>
      <TableContainer>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              <Th>氏名</Th>
              <Th>しめい</Th>
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
              {state.users.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.full_name}</Td>
                  <Td>{user.full_name_kana}</Td>
                  <Td isNumeric>
                    <Link to={`/users/${user.id}`}>
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
