import React from "react";
import ImageLink from "../ImageLink/ImageLink";
import styles from "../RecipeCard/RecipeCard.module.css";
import StarRating from "../StarRating/StarRating";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({
  title,
  description,
  cookTime,
  image,
  recipeData,
  idMeal,
}) => {
  let navigate = useNavigate();
  const handleOpenRecipe = () => {
    navigate(`/recipes/${title}`, { state: recipeData });
    console.log("Title", title);
  };

  return (
    <div className={styles.card}>
      <div onClick={handleOpenRecipe}>
        {image && (
          <ImageLink src={image} alt={title} className={styles.imageOfFood} />
        )}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.nutrition}>{description}</p>
        <p className={styles.cookTime}>{cookTime} minute(s)</p>
      </div>
      <StarRating idMeal={idMeal} />
    </div>
  );
};
export default RecipeCard;
