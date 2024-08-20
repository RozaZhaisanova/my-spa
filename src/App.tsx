import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardList from "./components/CardList";
import CardDetail from "./pages/CardDetail";
import { Provider } from "react-redux";
import store from "./store/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/card/:id" element={<CardDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
