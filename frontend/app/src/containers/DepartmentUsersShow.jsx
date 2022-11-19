import { useEffect, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchDepartmentUsersShow } from "../apis/users/departments";
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
        <Spinner />
      ) : (
        <>
          <Heading size="md" my={4}>
            {state.department.name}の社員一覧 / {state.department.total}人
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
                {state.department.department_users &&
                  state.department.department_users.map((user) => (
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
