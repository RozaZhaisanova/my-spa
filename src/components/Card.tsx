import React, { ReactNode } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CardProps {
  index: number;
  name: string;
  picture: string;
  email: string;
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
  onLike: () => void;
  children?: ReactNode;
  isLiked: boolean; // Состояние лайка
  id: string; // Добавляем id для маршрутизации
}

const Card: React.FC<CardProps> = ({
  index,
  name,
  picture,
  email,
  onDelete,
  children,
  onLike,
  isLiked,
  id,
}) => {
  return (
    <>
      <Link key={index} to={`/card/${index}`}>
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
        </div>
      </Link>
      <button type="button" onClick={onLike}>
        <FaHeart color={isLiked ? "red" : "gray"} size={24} />
      </button>
      <button type="button" onClick={onDelete}>
        🗑️delete
      </button>
    </>
  );
};

export default Card;
