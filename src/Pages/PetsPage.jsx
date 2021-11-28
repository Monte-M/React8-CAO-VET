import React from "react";
import Pet from "../components/Pet";
import css from "./PetsPage.module.css";
import OrangeBtn from "../components/OrangeBtn";

function PetsPage() {
  return (
    <div className="container">
      <div className={css.addPet}>
        <h1>Pet list</h1>
        <OrangeBtn title="ADD PET" />
      </div>
      <div className={css.petList}>
        <Pet />
      </div>
    </div>
  );
}

export default PetsPage;
