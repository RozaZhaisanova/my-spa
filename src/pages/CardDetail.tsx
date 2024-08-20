import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const fact = useSelector((state: any) =>
    state.facts.facts.find((fact: any) => fact.id === parseInt(id!))
  );

  if (!fact) return <div>Fact not found</div>;

  return (
    <div>
      <h1>{fact.text}</h1>
      <Link to="/">Back to list</Link>
    </div>
  );
};

export default CardDetail;
