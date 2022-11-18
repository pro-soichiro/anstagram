import axios from "axios";
import { prefecturesIndex } from "../urls/index";

export const fetchPrefectures = () => {
  return axios
    .get(prefecturesIndex)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
