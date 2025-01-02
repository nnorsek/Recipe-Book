import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./RecipeDetails.module.css";

const RecipeDetails = () => {
  const { title } = useParams();
  const location = useLocation();
  const recipeData = location.state;

  const getIngredients = (recipe) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${ingredient} (${measure || "to taste"})`);
      }
    }
    return ingredients;
  };

  const formatInstructions = (instructions) => {
    if (!instructions) return [];
    return instructions
      .split(".")
      .filter((step) => step.trim() !== "")
      .map((step, index) => `Step ${index + 1}: ${step.trim()}`);
  };
  const steps = formatInstructions(recipeData.strInstructions);

  console.log("Recipe Data:", recipeData);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.information}>
          <img
            src={recipeData.strMealThumb}
            alt={recipeData.strMeal}
            className={styles.image}
          />
          <p>Origin: {recipeData.strArea}</p>
          <p>Category: {recipeData.strCategory}</p>

          <a href={recipeData.strYoutube} target="_blank">
            YouTube Tutorial
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.ingredients}>
          <p>Ingredients</p>
          <ul>
            {recipeData &&
              getIngredients(recipeData).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
          </ul>
        </div>
        <div className={styles.instructions}>
          <p>Instructions</p>
          <ol>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
