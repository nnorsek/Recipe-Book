import React, { useState, useEffect } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import {
  getCategories,
  getMealDetails,
  getMealsByCategory,
  searchMeals,
} from "../../Utils/api.js";
import styles from "./Recipe.module.css";

const Recipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData = await getCategories();
        setCategories(categoryData.meals);

        const mealData = await searchMeals(searchTerm);
        setRecipeData(mealData.meals || []);
        setFilteredData(mealData.meals || []);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    const fetchFilteredMeals = async () => {
      if (filterCategory) {
        try {
          const categoryMealsData = await getMealsByCategory(filterCategory);

          const enrichedMeals = await Promise.all(
            categoryMealsData.meals.map(async (meal) => {
              const mealDetails = await getMealDetails(meal.idMeal);
              return mealDetails.meals[0];
            })
          );
          setFilteredData(enrichedMeals);
        } catch (error) {
          console.error("Error fetching filtered meals:", error.message);
        }
      } else {
        setFilteredData(recipeData);
      }
    };

    fetchFilteredMeals();
  }, [filterCategory, recipeData]);

  console.log("fetch filtered meals: recipeData", recipeData);
  console.log("fetch filtered meals: filteredData", filteredData);
  return (
    <div className={styles.container}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <div className={styles.recipeList}>
        {filteredData &&
          filteredData.map((meal) => (
            <div key={meal.idMeal}>
              <RecipeCard
                title={meal.strMeal}
                description={`${meal.strArea || "Unknown Area"} - ${
                  meal.strCategory || "Unknown Category"
                }`}
                cookTime={`Cook Time: ${Math.floor(
                  Math.random() * 22
                )} Minute(s)`}
                image={meal.strMealThumb}
                recipeData={meal}
                idMeal={meal.idMeal}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recipe;
