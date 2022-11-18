import axios from "axios";
import { usersIndex, usersShow } from "../urls/index";

export const fetchUsers = () => {
  return axios
    .get(usersIndex)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};

export const fetchUser = (userId) => {
  return axios
    .get(usersShow(userId))
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};