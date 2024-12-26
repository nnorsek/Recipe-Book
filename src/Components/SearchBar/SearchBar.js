import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  categories,
  filterCategory,
  setFilterCategory,
}) => {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a meal..."
      />

      <select
        className={styles.selectCategory}
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.strCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
