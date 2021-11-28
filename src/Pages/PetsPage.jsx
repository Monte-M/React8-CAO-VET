import React from "react";
import Pet from "../components/Pet";
import css from "./PetsPage.module.css";

function PetsPage() {
  return (
    <div className="container">
      <h1>Pet list</h1>
      <div className={css.petList}>
        <Pet />
      </div>
    </div>
  );
}

export default PetsPage;
