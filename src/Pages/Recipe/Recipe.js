import React, { useState, useEffect } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import styles from "./Recipe.module.css";

const Recipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Fetch categories and initial meals
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await fetch(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        const categoryData = await categoryResponse.json();
        setCategories(categoryData.meals);

        const mealResponse = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const mealData = await mealResponse.json();
        setRecipeData(mealData.meals || []);
        setFilteredData(mealData.meals || []);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [searchTerm]);

  // Fetch and enrich meals by category
  useEffect(() => {
    const fetchFilteredMeals = async () => {
      if (filterCategory) {
        try {
          const categoryMealsResponse = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filterCategory}`
          );
          const categoryMealsData = await categoryMealsResponse.json();

          const enrichedMeals = await Promise.all(
            categoryMealsData.meals.map(async (meal) => {
              const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
              );
              const data = await response.json();
              return data.meals[0];
            })
          );

          setFilteredData(enrichedMeals);
        } catch (error) {
          console.error("Error fetching meals by category:", error.message);
        }
      } else {
        setFilteredData(recipeData);
      }
    };

    fetchFilteredMeals();
  }, [filterCategory, recipeData]);

  // Filter meals by search term
  useEffect(() => {
    if (searchTerm) {
      const filteredMeals = (filterCategory ? filteredData : recipeData).filter(
        (meal) => meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredMeals);
    } else if (!filterCategory) {
      setFilteredData(recipeData);
    }
  }, [searchTerm, recipeData]);
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
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recipe;
