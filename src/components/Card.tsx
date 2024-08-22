import React, { ReactNode, useState } from "react";
import { FaHeart } from "react-icons/fa";

interface CardProps {
  name: string;
  picture: string;
  email: string;
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
  onLike: () => void;
  children?: ReactNode;
  isLiked: boolean; // Состояние лайка
}

const Card: React.FC<CardProps> = ({
  name,
  picture,
  email,
  onDelete,
  children,
  onLike,
  isLiked,
}) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked((prev) => !prev);
  };
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
      }}
    >
      <img
        src={picture}
        alt={name}
        style={{ width: "10%", borderRadius: "8px" }}
      />
      <h3>{name}</h3>
      <p>{email.length > 15 ? `${email.slice(0, 15)}...` : email}</p>
      <button type="button" onClick={onLike}>
        <FaHeart color={isLiked ? "red" : "gray"} size={24} />
      </button>
      <button type="button" onClick={onDelete}>
        🗑️delete
      </button>
    </div>
  );
};

export default Card;
