import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { fetchDepartment, patchDepartment } from "../apis/departments";

// chakra ui
import {
  Spinner,
  Heading,
  Button,
  FormControl,
  Input,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";

// formik
import { Field, Form, Formik} from "formik";

// reducer
import {
  initialState,
  departmentActionTypes,
  departmentReducer,
} from "../reducers/department";

// constants
import { REQUEST_STATE } from "../constants";

export const DepartmentEdit = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(departmentReducer, initialState);

  // validation
  const validateName = (value) => {
    let error;
    if (!value) {
      error = "部署名を入力してください";
    }
    return error;
  };

  useEffect(() => {
    dispatch({ type: departmentActionTypes.FETCHING });

    fetchDepartment(id)
      .then((data) => {
        dispatch({
          type: departmentActionTypes.FETCH_SUCCESS,
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
            部署の編集
          </Heading>
          <Formik
            enableReinitialize={true}
            initialValues={{name: state.department.name ||= '', description: state.department.description ||= ''}}
            onSubmit={(values, actions) => {
              console.log(values);
              actions.setSubmitting(false);
              if (values.description === "") {
                delete values.description;
              }
              patchDepartment(state.department.id, values).then(() => {
                window.location.replace('/departments');
              });
            }}
          >
            {(props) => (
              <>
                <Form>
                  <Field name="name" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel>部署名</FormLabel>
                        <Input {...field} placeholder="部署名" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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

                  <Button
                    size="sm"
                    colorScheme="teal"
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    変更
                  </Button>
                </Form>
              </>
            )}
          </Formik>
        </>
      )}
    </>
  );
};
