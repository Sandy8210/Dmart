import React from "react";
import TopNav from "./pages/TopNav/TopNav";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
};

export default App;
