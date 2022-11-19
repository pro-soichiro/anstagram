import axios from "axios";
import { prefectureUsersIndex, prefectureUsersShow } from "../../urls/index";

// index
export const fetchPrefectureUsersIndex = () => {
  return axios
    .get(prefectureUsersIndex)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};

// show
export const fetchPrefectureUsersShow = (prefectureId) => {
  return axios
    .get(prefectureUsersShow(prefectureId))
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
