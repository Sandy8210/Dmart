import React from "react";
import TopNav from "./pages/TopNav/TopNav";
import Form from "./pages/Form/Form";
import { Route, Routes } from "react-router-dom";
import Forgot from "./pages/Forgot/Forgot";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </div>
  );
};

export default App;
