import React, { useEffect, useState } from "react";
import CardList from "./components/CardList";
import { HashRouter, Routes, Route } from "react-router-dom";
import CardDetail from "./pages/CardDetail";
import { useGetUsersQuery } from "./store/apiSlice";
const App: React.FC = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    if (data && data.results) {
      setUsers(data.results);
    }
  }, [data]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users.</div>;
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/card/:id" element={<CardDetail users={users} />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
