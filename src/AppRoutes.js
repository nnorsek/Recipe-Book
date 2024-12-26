import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import Recipe from "./Pages/Recipe/Recipe.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/recipes" element={<Recipe />} />
    </Routes>
  );
};

export default AppRoutes;
