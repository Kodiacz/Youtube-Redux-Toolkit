import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const UserView = () => {
  const users = useSelector((state) => state.user.users);

  return (
    <div>
      <h2>List of Users - {users} </h2>
    </div>
  );
};
