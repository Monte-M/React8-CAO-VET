import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";
import { ThemeContext } from "../store/themeContext";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className={css.container}>
      <img
        src='http://www.petras.slekys.com/images/projects/vetbee.png'
        alt=''
      />
      <nav>
        <NavLink to='/'>Pets</NavLink>
        <NavLink to='/meds'>Medications</NavLink>
        <span onClick={handleThemeToggle}>
          {theme === "light" ? "🌙" : "☀️"}
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
