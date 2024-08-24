import { Box, Image, Heading } from "grommet";
import React, { ReactNode } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
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
    <Box>
      <Link className={style.item} key={index} to={`/card/${index}`}>
        <Image src={picture} alt={name} />
        <Heading level={3}>{name}</Heading>
        <Heading level={4}>
          {email.length > 15 ? `${email.slice(0, 15)}...` : email}
        </Heading>
      </Link>
      <button type="button" onClick={onLike}>
        <FaHeart color={isLiked ? "red" : "gray"} size={24} />
      </button>
      <button onClick={onDelete}>🗑️delete</button>
    </Box>
  );
};

export default Card;
