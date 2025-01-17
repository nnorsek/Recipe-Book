import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateRecipe.module.css";

const CreateRecipe = () => {
  const navigate = useNavigate();
  console.log("Create Recipe");
  return (
    <div>
      <h1 className={styles.title}>Recipe Builder</h1>
      <div className={styles.description}>
        <p>Build and customize recipes to suit your taste.</p>
      </div>
      <button
        className={styles.createButton}
        onClick={() => navigate("/create")}
      >
        Create Recipe
      </button>
    </div>
  );
};

export default CreateRecipe;
