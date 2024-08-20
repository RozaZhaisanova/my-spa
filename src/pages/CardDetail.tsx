import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Логика получения данных по id

  return (
    <div>
      {/* Полное содержание карточки */}
      <button onClick={() => navigate("/")}>Вернуться</button>
    </div>
  );
};

export default CardDetail;
