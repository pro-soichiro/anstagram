import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../apis/users";

export const Users = () => {
  useEffect(() => {
    fetchUsers()
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <>
      <h1>社員一覧</h1>
      <ul>
        <li>
          <Link to="/users/3">間宮漱一朗</Link>
        </li>
      </ul>
    </>
  );
};
