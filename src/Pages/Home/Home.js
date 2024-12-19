import ImageLink from "../../Components/ImageLink.js";
import RecipeCard from "../../Components/RecipeCard/RecipeCard.js";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.dailyPicks}>
        {/* Daily Recipe Images Here */}
        <h1>Favorites of the Week</h1>
        <div className="dailyPicksImages">
          <RecipeCard
            title="French Fries"
            description="description"
            image="#"
            href="/"
          />
          <RecipeCard
            title="French Fries"
            description="description"
            image="#"
            href="/"
          />
          <RecipeCard
            title="French Fries"
            description="description"
            image="#"
            href="/"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
