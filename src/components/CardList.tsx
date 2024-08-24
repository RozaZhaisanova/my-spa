import React, { useEffect, useState } from "react";
import { useGetUsersQuery } from "../store/apiSlice";
import { FaHeart } from "react-icons/fa";
import Card from "./Card";
const UserList: React.FC = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  const [users, setUsers] = useState<any[]>([]);
  const [likedUsers, setLikedUsers] = useState<Set<string>>(new Set());
  const [showLikedOnly, setShowLikedOnly] = useState(false);
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
  const handleLikeUser = (userId: string) => {
    setLikedUsers((prevLiked) => {
      const newLiked = new Set(prevLiked);
      if (newLiked.has(userId)) {
        newLiked.delete(userId); // Убираем лайк
      } else {
        newLiked.add(userId); // Добавляем лайк
      }
      return newLiked;
    });
  };
  const toggleShowLiked = () => {
    setShowLikedOnly((prev) => !prev);
  };
  const displayedUsers = showLikedOnly
    ? users.filter((user) => likedUsers.has(user.login.uuid))
    : users;
  return (
    <div>
      <h1>Random Users</h1>
      <button onClick={toggleShowLiked}>
        {showLikedOnly ? "Показать всех" : "Показать только залайканные"}
      </button>
      <ul>
        {displayedUsers.map((user: any, index: number) => (
          <>
            <Card
              index={index}
              key={user.login.uuid}
              name={user.name.first}
              email={user.email}
              picture={user.picture.thumbnail}
              onDelete={() => handleDelete(user.login.uuid)}
              onLike={() => handleLikeUser(user.login.uuid)}
              isLiked={likedUsers.has(user.login.uuid)}
              id={user.login.uuid}
            ></Card>
          </>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
