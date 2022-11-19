import { useEffect, useReducer } from "react";
import { fetchDepartments } from "../apis/departments";
// chakra ui
import {
  Skeleton,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

// reducer
import {
  initialState,
  departmentsActionTypes,
  departmentsReducer,
} from "../reducers/departments";

// constants
import { REQUEST_STATE } from "../constants";

const editAction = (id) => {
  console.log(id, "click edit");
};


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
      <Heading size="md" my={4}>部署一覧</Heading>
      <TableContainer>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              <Th>部署</Th>
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
              </Tr>
            </Tbody>
          ) : (
            <Tbody>
              {state.departments.map((department) => (
                <Tr key={department.id}>
                  <Td>{department.name}</Td>
                  <Td isNumeric>
                    <Button
                      variant="outline"
                      colorScheme="yellow"
                      size="sm"
                      onClick={() => editAction(department.id)}
                    >
                      編集
                    </Button>
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
