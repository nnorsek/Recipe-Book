import RecipeCard from "../../Components/RecipeCard/RecipeCard.js";
import {
  getMealDetails,
  getCategories,
  getMealsByCategory,
} from "../../Utils/api.js";
import styles from "./Home.module.css";
import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe.js";

const Home = () => {
  const [weeklyMealData, setWeeklyMealData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeeklyMealData = async () => {
      try {
        const storedMeals = JSON.parse(localStorage.getItem("weeklyMeals"));
        const storedTimestamp = localStorage.getItem("mealTimestamp");
        const oneWeek = 7 * 24 * 60 * 1000;
        const now = Date.now();

        if (storedMeals && storedTimestamp && now - storedTimestamp < oneWeek) {
          setWeeklyMealData(storedMeals);
          setLoading(false);
          return;
        }

        const categoryData = await getCategories();
        const categoryList = categoryData.meals || [];
        setCategories(categoryList);

        const randomCategories = categoryList
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        const randomMeals = await Promise.all(
          randomCategories.map(async (category) => {
            const categoryName = category.strCategory;
            const response = getMealsByCategory(categoryName);
            const mealsInCategory = await response;
            const randomMeal =
              mealsInCategory.meals[
                Math.floor(Math.random() * mealsInCategory.meals.length)
              ];
            const mealDetails = await getMealDetails(randomMeal.idMeal);
            return mealDetails.meals[0];
          })
        );

        localStorage.setItem("weeklyMeals", JSON.stringify(randomMeals));
        localStorage.setItem("mealTimestamp", now.toString());

        setWeeklyMealData(randomMeals);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weekly meals:", error.message);
        setLoading(false);
      }
    };

    fetchWeeklyMealData();
  }, []);

  if (loading) {
    return <p>Loading meals...</p>;
  }

  if (!weeklyMealData.length) {
    return <p>No meals found for this week.</p>;
  }
  console.log(weeklyMealData);

  return (
    <div className={styles.homepage} id="homeSection">
      <h1>Weekly Picks</h1>
      <div className={styles.weeklyPicks}>
        <RecipeCard
          title={weeklyMealData[0].strMeal}
          description={`${weeklyMealData[0].strArea || "Unknown Area"} - ${
            weeklyMealData[0].strCategory || "Unknown Category"
          }`}
          cookTime={`Cook Time: ${Math.floor(Math.random() * 22)}`}
          image={weeklyMealData[0].strMealThumb}
          recipeData={weeklyMealData[0]}
          idMeal={weeklyMealData[0].idMeal}
        />
        <RecipeCard
          title={weeklyMealData[1].strMeal}
          description={`${weeklyMealData[1].strArea || "Unknown Area"} - ${
            weeklyMealData[1].strCategory || "Unknown Category"
          }`}
          cookTime={`Cook Time: ${Math.floor(Math.random() * 22)}`}
          image={weeklyMealData[1].strMealThumb}
          recipeData={weeklyMealData[1]}
          idMeal={weeklyMealData[1].idMeal}
        />
        <RecipeCard
          title={weeklyMealData[2].strMeal}
          description={`${weeklyMealData[2].strArea || "Unknown Area"} - ${
            weeklyMealData[2].strCategory || "Unknown Category"
          }`}
          cookTime={`Cook Time: ${Math.floor(Math.random() * 22)}`}
          image={weeklyMealData[2].strMealThumb}
          recipeData={weeklyMealData[2]}
          idMeal={weeklyMealData[2].idMeal}
        />
      </div>
      <div className={styles.recipe} id="recipesSection">
        <h1>Recipe Lookup</h1>
        <Recipe />
      </div>
    </div>
  );
};

export default Home;
