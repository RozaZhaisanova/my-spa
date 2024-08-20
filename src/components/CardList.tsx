import React, { useState } from "react";
import { useGetItemsQuery } from "../store/apiSlice";
import Card from "./Card";

const CardList: React.FC = () => {
  const { data, error, isLoading } = useGetItemsQuery();
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());
  const [showLiked, setShowLiked] = useState(false);

  const handleLike = (id: string) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleDelete = (id: string) => {
    // Логика удаления элемента из списка
  };
  // Проверяем, что data определено
  if (!data) {
    return <div>No items found.</div>;
  }
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading items</div>;
  const filteredData = showLiked
    ? data.filter((item) => likedItems.has(item.id))
    : data;

  return (
    <div>
      <button onClick={() => setShowLiked(!showLiked)}>
        {showLiked ? "Show All" : "Show Liked"}
      </button>
      <div className="card-list">
        {filteredData.map((item) => (
          <Card
            key={item.id}
            item={item}
            onLike={handleLike}
            onDelete={handleDelete}
            isLiked={likedItems.has(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
