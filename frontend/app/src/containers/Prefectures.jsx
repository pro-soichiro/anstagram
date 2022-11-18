import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPrefectures } from "../apis/prefectures";

export const Prefectures = () => {
  useEffect(() => {
    fetchPrefectures()
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <>
      <h1>都道府県別</h1>
      <ul>
        <li>
          <Link to="/users/prefectures/14">神奈川県</Link>
        </li>
      </ul>
    </>
  );
};
