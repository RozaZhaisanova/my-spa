import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../store/apiSlice";
import { Box, Button, Heading, Image, Text } from "grommet";
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
    <Box pad="large" align="center">
      <Heading level={3}>
        {user.name.title} {user.name.first} {user.name.last}
      </Heading>
      <Image src={user.picture.large} alt={user.name.first} />
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>
        Location: country - {user.location.country}, state -{" "}
        {user.location.state}, city - {user.location.city}, street{" "}
        {user.location.street.name} - {user.location.street.number}
      </Text>
      <Heading level={3}> </Heading>
      <Button
        color="#015965"
        size="medium"
        label={"Вернуться к списку"}
        primary
        onClick={() => navigate("/")}
      ></Button>
    </Box>
  );
};

export default CardDetail;
