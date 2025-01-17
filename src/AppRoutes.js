import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails.js";
import RecipeBuilder from "./Pages/RecipeBuilder/RecipeBuilder.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/recipes/:title" element={<RecipeDetails />} />
      <Route path="/create" element={<RecipeBuilder />} />
    </Routes>
  );
};

export default AppRoutes;
