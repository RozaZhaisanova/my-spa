import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../store/apiSlice";
import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  Image,
  TextInput,
} from "grommet";
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
    <Box align={"center"}>
      <Heading level={4}>
        {user.name.title} {user.name.first} {user.name.last}
      </Heading>
      <Image src={user.picture.large} alt={user.name.first} />
      <p>Email: {user.email}</p>

      <Heading level={4}>Phone: {user.phone}</Heading>
      <Button primary onClick={() => navigate("/")}>
        Вернуться к списку
      </Button>
    </Box>
  );
};

export default CardDetail;
