import { Box, Image, Heading } from "grommet";
import React, { ReactNode } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
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
    <>
      <Box direction="column" pad="large">
        <Link className={style.item} key={index} to={`/card/${index}`}>
          <Image fit="cover" src={picture} alt={name} />
          <Heading level={3}>{name}</Heading>
          <Heading level={4}>{email}</Heading>
        </Link>
        <Box direction="row">
          <button className={style.button} type="button" onClick={onLike}>
            <FaHeart color={isLiked ? "red" : "gray"} size={24} />
          </button>
          {"\u00A0"}
          <button className={style.button} onClick={onDelete}>
            <FaTrash />
          </button>
        </Box>
      </Box>
      {"\t"}
    </>
  );
};

export default Card;
