import React from "react";
import { Link } from "react-scroll";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styles from "./RecipeDetails.module.css";

const RecipeDetails = () => {
  const { title } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
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

    // Step 1: Remove numbers followed by a period
    const cleanedInstructions = instructions.replace(/\b\d+\.\s*/g, "");

    // Step 2: Split into sentences
    const sentences = cleanedInstructions
      .split(".")
      .filter((sentence) => sentence.trim() !== "");

    // Step 3: Combine related sentences into steps
    const combinedSteps = [];
    let currentStep = "";

    sentences.forEach((sentence) => {
      const trimmed = sentence.trim();

      // If the current step is empty, start a new step
      if (!currentStep) {
        currentStep = trimmed;
      } else if (trimmed[0].toUpperCase() === trimmed[0]) {
        // If the sentence starts with a capital letter, assume it's a new thought
        combinedSteps.push(currentStep);
        currentStep = trimmed;
      } else {
        // Otherwise, continue the current step
        currentStep += ` ${trimmed}`;
      }
    });

    // Push the last step if it exists
    if (currentStep) combinedSteps.push(currentStep);

    // Step 4: Format the steps
    return combinedSteps.map(
      (step, index) => `Step ${index + 1}: ${step.trim()}`
    );
  };
  const steps = formatInstructions(recipeData.strInstructions);

  console.log("Recipe Data:", recipeData);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.buttons}>
          <button className={styles.backButton} onClick={() => navigate("/")}>
            Back to Home
          </button>
          <Link to="content" smooth={true} duration={800} offset={-70}>
            <button className={styles.jumpToRecipe}>Jump to Recipe</button>
          </Link>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <img
          src={recipeData.strMealThumb}
          alt={recipeData.strMeal}
          className={styles.image}
        />
        <div className={styles.information}>
          <p>Origin: {recipeData.strArea}</p>
          <p>Category: {recipeData.strCategory}</p>

          <a href={recipeData.strYoutube} target="_blank">
            YouTube Tutorial
          </a>
        </div>
        <hr></hr>
      </div>
      <div className={styles.content} id="content">
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
