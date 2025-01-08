import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  console.log("navbar");
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  const isRecipeDetailsPageOpen = location.pathname.includes("/recipes");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isRecipeDetailsPageOpen) {
    return null;
  }

  return (
    <nav className={`${styles.navbar} ${scrolling ? styles.scrolled : ""}`}>
      <a href="/" className={styles.logo}>
        <img src="/cook_logo.png" />
      </a>
      <ul className="nav-links">
        <li>
          <Link to="featuredSection" smooth={true} duration={500} offset={-70}>
            FEATURED
          </Link>
        </li>
        <li>
          <Link to="createSection" smooth={true} duration={500} offset={-70}>
            CREATE
          </Link>
        </li>
        <li>
          <Link to="recipesSection" smooth={true} duration={500} offset={-70}>
            RECIPES
          </Link>
        </li>
        <li>
          <Link to="aboutSection" smooth={true} duration={500} offset={-70}>
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
