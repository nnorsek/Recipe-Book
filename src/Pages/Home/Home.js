import RecipeCard from "../../Components/RecipeCard/RecipeCard.js";
import {
  getMealDetails,
  getCategories,
  getMealsByCategory,
} from "../../Utils/api.js";
import styles from "./Home.module.css";
import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe.js";
import FeaturedRecipes from "../FeaturedRecipes/FeaturedRecipes.js";

const Home = () => {
  return (
    <div className={styles.homepage} id="homeSection">
      <div className={styles.createRecipe} id="createSection">
        <FeaturedRecipes />
      </div>
      <div className={styles.createRecipe} id="createSection">
        <h1>Create Recipe</h1>
      </div>
      <div className={styles.recipe} id="recipesSection">
        <Recipe />
      </div>
      <div id="aboutSection">
        <h2>About</h2>
      </div>
    </div>
  );
};

export default Home;
