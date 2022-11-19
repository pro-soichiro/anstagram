import axios from "axios";
import { departmentUsersIndex, departmentUsersShow } from "../../urls/index";

// index
export const fetchDepartmentUsersIndex = () => {
  return axios
    .get(departmentUsersIndex)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};

// show
export const fetchDepartmentUsersShow = (departmentId) => {
  return axios
    .get(departmentUsersShow(departmentId))
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
