import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={css.container}>
      <img
        src="http://www.petras.slekys.com/images/projects/vetbee.png"
        alt=""
      />
      <nav>
        <NavLink to="/pets">Pets</NavLink>
        <NavLink to="/meds">Medications</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
