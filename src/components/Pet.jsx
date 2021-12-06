import React from "react";
import OrangeBtn from "./OrangeBtn";
import WhiteBtn from "./WhiteBtn";
import css from "./Pet.module.css";

function Pet({ pet, dob }) {
  const options = {
    dateStyle: "short",
  };

  const currentDate = new Date(dob);
  const petDate = currentDate.toLocaleDateString("lt", options);

  return (
    <div className={css.container}>
      <h3>{pet.name}</h3>
      <h4>{petDate}</h4>
      <h4>{pet.owner}</h4>
      <div>
        <OrangeBtn title='VIEW LOG' />
        <WhiteBtn title='DELETE' />
      </div>
    </div>
  );
}

export default Pet;
