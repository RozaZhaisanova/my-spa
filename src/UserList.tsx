import React, { useState } from "react";
import { useGetUsersQuery } from "./store/apiSlice";
import { FaHeart } from "react-icons/fa";

const UserList: React.FC = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked((prev) => !prev);
  };
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
            <p>
              {user.email.length > 15
                ? `${user.email.slice(0, 15)}...`
                : user.email}
            </p>
            <button type="button" onClick={toggleLike}>
              <FaHeart color={liked ? "red" : "gray"} size={24} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
