import React from "react";
import css from "./Prescription.module.css";

function Prescription({ pres, presDate }) {
  const options = {
    dateStyle: "short",
  };

  const currentDate = new Date(presDate);
  const prescriptionDate = currentDate.toLocaleDateString("lt", options);
  return (
    <div className={css.container}>
      <h4>{pres.name}</h4>
      <h4>{pres.description}</h4>
      <h4>{prescriptionDate}</h4>
      <h4>comment: {pres.comment}</h4>
    </div>
  );
}

export default Prescription;
