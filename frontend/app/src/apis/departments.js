import axios from "axios";
import { departmentsIndex, departmentsShow } from "../urls/index";

export const fetchDepartments = () => {
  return axios
    .get(departmentsIndex)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};

export const postDepartment = (params) => {
  return axios
    .post(departmentsIndex, params)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};

export const fetchDepartment = (id) => {
  return axios
    .get(departmentsShow(id))
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};

export const patchDepartment = (id, params) => {
  return axios
    .patch(departmentsShow(id), params)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};

export const deleteDepartment = (id) => {
  return axios
    .delete(departmentsShow(id))
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
