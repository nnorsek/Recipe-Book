import { useState } from "react";
import ImageLink from "../Components/ImageLink";
import styles from "./Home.module.css";

const DailyRecipe = () => {};

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.dailyPicks}>
        {/* Daily Recipe Images Here */}
        <h1>Favorites of the Week</h1>
        <div className="dailyPicksImages">
          <ImageLink href="/" src="#" alt="Daily Image 1" />
          <ImageLink href="/" src="#" alt="Daily Image 2" />
          <ImageLink href="/" src="#" alt="Daily Image 3" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
