import React from "react";

import css from "./Medications.module.css";

function Pet({ medication }) {
  return (
    <div className={css.container}>
      <h3>{medication.name}</h3>
      <h4>{medication.description}</h4>
      <h4>{medication.date}</h4>
    </div>
  );
}

export default Pet;
