import RecipeCard from "../../Components/RecipeCard/RecipeCard.js";
import styles from "./Home.module.css";
import React from "react";

const Home = () => {
  return (
    <div className={styles.homepage}>
      <h1>Favorites of the Week</h1>
      <div className={styles.dailyPicks}>
        {/* Daily Recipe Images Here */}

        <RecipeCard
          title="Pork Carnitas"
          nutrition="130 cal / 30g protein / 15g fat / 23 carbs"
          cookTime="Cook Time: (20 min)"
          image="./foodImages/pork-carnitas.jpg"
        />
        <RecipeCard
          title="Acai Breakfast"
          nutrition="150 cal / 6g protein / 3g fat / 12g carbs"
          cookTime="Cook Time: (5 min)"
          image="./foodImages/acai-breakfast.jpg"
        />
        <RecipeCard
          title="Spaghetti Puttanesca"
          nutrition="200 cal / 15g protein / 23g fat / 30g carbs"
          cookTime="Cook Time: (15 min)"
          image="./foodImages/spaghetti-puttanesca.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
