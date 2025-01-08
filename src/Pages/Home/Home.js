import styles from "./Home.module.css";
import React from "react";
import Recipe from "../Recipe/Recipe.js";
import FeaturedRecipes from "../FeaturedRecipes/FeaturedRecipes.js";
import CreateRecipe from "../CreateRecipe/CreateRecipe.js";

const Home = () => {
  console.log("home");
  return (
    <div className={styles.homepage} id="homeSection">
      <div className={styles.featuredRecipes} id="featuredSection">
        <FeaturedRecipes />
      </div>
      <div className={styles.createRecipe} id="createSection">
        <CreateRecipe />
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
