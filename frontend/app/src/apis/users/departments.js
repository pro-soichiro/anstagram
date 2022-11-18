import axios from "axios";
import { departmentUsersIndex } from "../../urls/index";

export const fetchDepartmentUsers = (departmentId) => {
  return axios
    .get(departmentUsersIndex(departmentId))
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};