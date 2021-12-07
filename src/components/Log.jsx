import React from "react";
import css from "./Log.module.css";

function Log({ status, description }) {
  return (
    <div className={css.container}>
      <h4>{description}</h4>
      <h4>Status: {status}</h4>
    </div>
  );
}

export default Log;
