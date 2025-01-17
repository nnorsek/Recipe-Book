import React, { useEffect, useState } from "react";
import styles from "./RecipeBuilder.module.css";
import Cloud from "../../Components/Cloud/Cloud.js";
import { getCategories } from "../../Utils/api.js";
import TimePicker from "react-time-picker";
import { useNavigate } from "react-router-dom";

const RecipeBuilder = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    recipeName: "",
    origin: "",
    category: "",
    cookTime: "",
    image: "",
    instructions: [],
    ingredients: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData = await getCategories();
        setCategories(categoryData);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchData();
  });
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recipe Builder</h1>
      <Cloud />
      <button className={styles.backButton} onClick={() => navigate("/")}>
        Back
      </button>
      <div className={styles.recipeForm}>
        <form>
          <label>Recipe Name</label>
          <input
            type="text"
            name="recipeName"
            value={formData.recipeName}
            onChange={handleChange}
          />
          <label>Origin</label>
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
          />
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            {categories.meals &&
              categories.meals.map((category, index) => (
                <option key={index} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
          </select>
          <label>Cook Time</label>
          <TimePicker
            onChange={(value) =>
              setFormData((prevState) => ({ ...prevState, cookTime: value }))
            }
            value={formData.cookTime}
            disableClock={true} // Hides the clock dropdown
            format="HH:mm" // Shows only hours and minutes
            clearIcon={null} // Removes the clear icon
            hourPlaceholder="HH"
            minutePlaceholder="MM"
          />
          <label>Image</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <label>Instructions</label>
          <input
            type="text"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
          />
          <label>Ingredients</label>
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default RecipeBuilder;
