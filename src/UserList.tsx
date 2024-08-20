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
        {data.data.map((user: any) => (
          <li key={user.length}>
            <p>{user.fact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
