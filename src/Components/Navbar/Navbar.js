import React, { useState } from "react";
import "srcComponentsNavbarNavbar.module.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log("hello");
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          CookBook
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/recipes">RECIPES</a>
          </li>
          <li>
            <a href="/about">ABOUT US</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </nav>
  );
};

export default Navbar;
