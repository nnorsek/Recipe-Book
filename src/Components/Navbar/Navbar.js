import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>
        <img src="/cook_logo.png" />
      </a>
      <ul className="nav-links">
        <li>
          <a href="/suprise">SUPRISE ME</a>
        </li>
        <li>
          <a href="/recipes">RECIPES</a>
        </li>
        <li>
          <a href="/about">ABOUT US</a>
        </li>
        <li>
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
