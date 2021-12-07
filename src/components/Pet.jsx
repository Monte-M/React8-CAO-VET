import React from "react";
import OrangeBtn from "./OrangeBtn";
import WhiteBtn from "./WhiteBtn";
import css from "./Pet.module.css";
import { Link } from "react-router-dom";

function Pet({ pet, dob }) {
  const options = {
    dateStyle: "short",
  };

  const currentDate = new Date(dob);
  const petDate = currentDate.toLocaleDateString("lt", options);

  const handleClickFunction = () => {
    const id = pet.id;
    console.log("clicked on", id);
  };

  const handleDeleteFunction = () => {
    const id = pet.id;
    console.log("delete", id);
  };

  return (
    <div className={css.container} id={pet.id}>
      <h3>{pet.name}</h3>
      <h4>{petDate}</h4>
      <h4>{pet.owner}</h4>
      <div>
        <Link to={`/logs/${pet.id}`}>
          <OrangeBtn title='VIEW LOG' handleClick={handleClickFunction} />
        </Link>
        <WhiteBtn title='DELETE' handleClick={handleDeleteFunction} />
      </div>
    </div>
  );
}

export default Pet;
