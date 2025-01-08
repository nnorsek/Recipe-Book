import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/recipes/:title" element={<RecipeDetails />} />
    </Routes>
  );
};

export default AppRoutes;
