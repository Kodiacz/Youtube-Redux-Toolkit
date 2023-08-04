import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log(users);
  return (
    <div>
      <h2>List of Users - </h2>
      {users.loading && <div>Loading...</div>}
      {!users.loading && users.error ? <div>Error: {users.error}</div> : null}
      {!users.loading && users.users.length > 0 ? (
        <ul>
          {users.users.map((x) => (
            <li key={x.id}>{x.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
