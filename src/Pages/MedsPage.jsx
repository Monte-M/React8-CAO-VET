import React from "react";
import Medications from "../components/Medications";
import css from "./MedsPage.module.css";
import OrangeBtn from "../components/OrangeBtn";
import WhiteBtn from "../components/WhiteBtn";

function MedsPage() {
  return (
    <div className="container">
      <div className={css.addPrescription}>
        <h1>Name: Health Records</h1>
        <div className={css.topButtons}>
          <OrangeBtn title="ADD PRESCRIPTION" />
          <WhiteBtn title="ADD LOG" />
        </div>
      </div>
      <div className={css.displayButtons}>
        <h3>Display:</h3>
        <OrangeBtn title="LOGS ✓" />
        <OrangeBtn title="PRESCRIPTIONS ✓" />
      </div>
      <div className={css.medsList}>
        <Medications />
      </div>
    </div>
  );
}

export default MedsPage;
