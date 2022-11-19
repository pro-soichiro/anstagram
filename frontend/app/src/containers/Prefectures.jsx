import { useEffect, useReducer } from "react";
import { fetchPrefectures } from "../apis/prefectures";
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
} from "@chakra-ui/react";

// reducers
import {
  initialState,
  prefecturesActionTypes,
  prefecturesReducer,
} from "../reducers/prefectures";

// constants
import { REQUEST_STATE } from "../constants";

export const Prefectures = () => {
  const [state, dispatch] = useReducer(prefecturesReducer, initialState);

  useEffect(() => {
    dispatch({ type: prefecturesActionTypes.FETCHING });

    fetchPrefectures()
      .then((data) => {
        dispatch({
          type: prefecturesActionTypes.FETCH_SUCCESS,
          payload: {
            prefectures: data.prefectures,
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
        都道府県別
      </Heading>
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>都道府県名</Th>
            </Tr>
          </Thead>
          {state.fetchState === REQUEST_STATE.LOADING ? (
            <Tbody>
              <Tr>
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
                </Tr>
              ))}
            </Tbody>
          )}
        </Table>
      </TableContainer>
    </>
  );
};
