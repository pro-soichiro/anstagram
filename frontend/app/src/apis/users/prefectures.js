import axios from "axios";
import { prefectureUsersIndex } from "../../urls/index";

export const fetchPrefectureUsers = (prefectureId) => {
  return axios
    .get(prefectureUsersIndex(prefectureId))
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
