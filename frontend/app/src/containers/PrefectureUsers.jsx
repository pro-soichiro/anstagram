import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPrefectureUsers } from "../apis/users/prefectures";

export const PrefectureUsers = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchPrefectureUsers(id)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <>
      <h1>神奈川県出身の社員一覧</h1>
    </>
  );
};
