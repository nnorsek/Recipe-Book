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

  // Fetch categories and meals
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching categories
        const categoryResponse = await fetch(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        const categoryData = await categoryResponse.json();
        setCategories(categoryData.meals); // Save categories

        // Fetching meals (if needed)
        const mealResponse = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const mealData = await mealResponse.json();
        setRecipeData(mealData.meals); // Save all meals
        setFilteredData(mealData.meals); // Initially set filtered data to all meals
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  console.log("Filter Cat:", filterCategory);

  // Filtering logic based on search term and selected category
  useEffect(() => {
    let filteredMeals = recipeData;

    // Filter by category if a category is selected
    if (filterCategory) {
      filteredMeals = filteredMeals.filter(
        (meal) => meal.strCategory === filterCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filteredMeals = filteredMeals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filteredMeals);
  }, [searchTerm, filterCategory, recipeData]);

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
                description={meal.strArea + " " + meal.strCategory}
                cookTime={
                  "Cook Time: " +
                  Math.floor(3 + Math.random() * 27) +
                  " Minute(s)"
                }
                image={meal.strMealThumb}
                href="/"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recipe;
