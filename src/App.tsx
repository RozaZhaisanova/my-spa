import React, { useEffect, useState } from "react";
import CardList from "./components/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetail from "./pages/CardDetail";
import { useGetUsersQuery } from "./store/apiSlice";
const App: React.FC = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  const [users, setUsers] = useState<any[]>([]);
  const [likedUsers, setLikedUsers] = useState<Set<string>>(new Set());
  const [showLikedOnly, setShowLikedOnly] = useState(false);
  useEffect(() => {
    if (data && data.results) {
      setUsers(data.results);
    }
  }, [data]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/card/:id" element={<CardDetail users={users} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
