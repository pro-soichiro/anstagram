import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../apis/users";

export const User = () => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchUser(id)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <>
      <h1>社員詳細</h1>
      <h2>間宮漱一朗</h2>
    </>
  );
};
