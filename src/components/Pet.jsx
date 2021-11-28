import React from "react";
import OrangeBtn from "./OrangeBtn";
import WhiteBtn from "./WhiteBtn";
import css from "./Pet.module.css";

function Pet() {
  return (
    <div className={css.container}>
      <h3>Levis</h3>
      <h4>2001-12-25</h4>
      <h4>petras@petras.lt</h4>
      <div>
        <OrangeBtn />
        <WhiteBtn />
      </div>
    </div>
  );
}

export default Pet;
