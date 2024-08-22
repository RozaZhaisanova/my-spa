import React, { useEffect, useState } from "react";
import { useGetUsersQuery } from "../store/apiSlice";
import { FaHeart } from "react-icons/fa";
import Card from "./Card";
const UserList: React.FC = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    if (data && data.results) {
      setUsers(data.results);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users.</div>;
  const handleDelete = (uuid: any) => {
    setUsers(users.filter((user) => user.login.uuid !== uuid));
  };
  return (
    <div>
      <h1>Random Users</h1>
      <ul>
        {users.map((user: any) => (
          <>
            {" "}
            <Card
              key={user.login.uuid}
              name={user.name.first}
              email={user.email}
              picture={user.picture.thumbnail}
            ></Card>
            <button type="button" onClick={() => handleDelete(user.login.uuid)}>
              🗑️delete
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
