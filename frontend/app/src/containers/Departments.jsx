import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import {
  fetchDepartments,
  postDepartment,
  deleteDepartment,
} from "../apis/departments";
// chakra ui
import {
  Text,
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
  Flex,
  Spacer,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

// formik
import { Field, Form, Formik } from "formik";

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

  const { isOpen, onOpen, onClose } = useDisclosure();

  // validation
  const validateName = (value) => {
    let error;
    if (!value) {
      error = "部署名を入力してください";
    }
    return error;
  };

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
      <Flex my={4}>
        <Heading size="md">部署一覧</Heading>
        <Spacer />
        <Button size="sm" colorScheme="teal" onClick={onOpen}>
          作成
        </Button>
      </Flex>
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
                  <Td>
                    <Text>{department.name}</Text>
                    {department.description && (
                      <Text as="sub">{department.description}</Text>
                    )}
                  </Td>
                  <Td isNumeric>
                    <Link to={`/departments/${department.id}`}>
                      <Button
                        variant="outline"
                        colorScheme="yellow"
                        size="sm"
                        mr={2}
                      >
                        編集
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      colorScheme="red"
                      size="sm"
                      onClick={() =>
                        deleteDepartment(department.id).then(() => {
                          window.location.reload();
                        })
                      }
                    >
                      削除
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          )}
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>部署新規作成</ModalHeader>
          <ModalCloseButton />
          <Formik
            initialValues={{ name: "", description: "" }}
            onSubmit={(values, actions) => {
              console.log(values);
              actions.setSubmitting(false);
              if (values.description === "") {
                delete values.description;
              }
              postDepartment(values).then(() => {
                window.location.reload();
              });
            }}
          >
            {(props) => (
              <>
                <Form>
                  <ModalBody>
                    <Field name="name" validate={validateName}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <FormLabel>部署名</FormLabel>
                          <Input {...field} placeholder="部署名" />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="description">
                      {({ field }) => (
                        <FormControl>
                          <FormLabel mt={2}>説明</FormLabel>
                          <Input {...field} placeholder="説明" />
                        </FormControl>
                      )}
                    </Field>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      size="sm"
                      colorScheme="teal"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      作成
                    </Button>
                  </ModalFooter>
                </Form>
              </>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
};
