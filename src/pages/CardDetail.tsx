import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../store/apiSlice";

const CardDetail: React.FC<{ users: any[] }> = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetUsersQuery();
  const { id } = params;

  if (!id) {
    return <div>ID not found!</div>;
  }

  const user = data.results[Number(id)];
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users.</div>;
  if (!user) return <div>User not foukkknd.{String(id)}</div>;

  return (
    <div>
      <h1>
        {user.name.title} {user.name.first} {user.name.last}
      </h1>
      <img src={user.picture.large} alt={user.name.first} />
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={() => navigate("/")}>Вернуться к списку</button>
    </div>
  );
};

export default CardDetail;
