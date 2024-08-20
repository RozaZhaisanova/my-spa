import React from "react";
import IconButton from "@mui/material/IconButton";

import { Delete, Favorite } from "@mui/icons-material";

interface CardProps {
  item: any;
  onLike: (id: string) => void;
  onDelete: (id: string) => void;
  isLiked: boolean;
}

const Card: React.FC<CardProps> = ({ item, onLike, onDelete, isLiked }) => {
  return (
    <div className="card">
      <img src={item.imageUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description.slice(0, 100)}...</p>
      <IconButton onClick={() => onLike(item.id)}>
        <Favorite color={isLiked ? "secondary" : "action"} />
      </IconButton>
      <IconButton onClick={() => onDelete(item.id)}>
        <Delete />
      </IconButton>
    </div>
  );
};

export default Card;
