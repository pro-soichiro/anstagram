import axios from "axios";
import { departmentsIndex } from "../urls/index";

export const fetchDepartments = () => {
  return axios
    .get(departmentsIndex)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};