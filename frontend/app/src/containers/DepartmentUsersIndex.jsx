import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { fetchDepartmentUsersIndex } from "../apis/users/departments";
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
      <Heading size="md" my={4}>社員一覧/部署別</Heading>
      <TableContainer>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              <Th>氏名</Th>
              <Th isNumeric>所属人数</Th>
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
              {state.departments.map((department) => (
                <Tr key={department.id}>
                  <Td>{department.name}</Td>
                  <Td isNumeric>{department.total}人</Td>
                  <Td isNumeric>
                    <Link to={`/users/departments/${department.id}`}>
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
