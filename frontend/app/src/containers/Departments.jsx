import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchDepartments } from "../apis/departments";

export const Departments = () => {
  useEffect(() => {
    fetchDepartments()
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <>
      <h1>部署一覧</h1>
      <ul>
        <li>
          <Link to="/users/departments/10">プロダクト本部 開発</Link>
        </li>
      </ul>
    </>
  );
};
