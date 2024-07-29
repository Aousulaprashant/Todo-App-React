import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homs from "./pages/Home/Homs.js";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homs />} />
      </Routes>
    </Router>
  );
};

export default App;
