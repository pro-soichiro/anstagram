import { useParams } from "react-router-dom";

export const User = () => {
  const { id } = useParams();
  console.log(id)

  return (
    <>
    </>
  );
};
