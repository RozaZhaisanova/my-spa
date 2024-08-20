import React from "react";
import { useGetUsersQuery } from "./store/apiSlice";

const UserList: React.FC = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users.</div>;

  return (
    <div>
      <h1>Random Users</h1>
      <ul>
        {data.results.map((user: any) => (
          <li key={user.login.uuid}>
            <img src={user.picture.thumbnail} />
            <p>
              {user.name.first} ${user.name.last}
            </p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
