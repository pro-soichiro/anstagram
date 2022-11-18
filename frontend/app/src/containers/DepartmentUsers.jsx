import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDepartmentUsers } from "../apis/users/departments";

export const DepartmentUsers = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchDepartmentUsers(id)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <>
      <h1>プロダクト本部 開発の社員一覧</h1>
    </>
  );
};
