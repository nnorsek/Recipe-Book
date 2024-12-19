import React from "react";
import ImageLink from "../ImageLink";
import styles from "../RecipeCard/RecipeCard.module.css";

const RecipeCard = ({ title, description, image, href }) => {
  return (
    <div className={styles.card}>
      {image && (
        <ImageLink
          src={image}
          alt={title}
          href={href}
          className={styles.image}
        />
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
export default RecipeCard;
