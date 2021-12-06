import React, { useEffect, useState } from "react";
import Medications from "../components/Medications";
import css from "./MedsPage.module.css";
import OrangeBtn from "../components/OrangeBtn";
import WhiteBtn from "../components/WhiteBtn";

function MedsPage() {
  const [medsArr, setMedsArr] = useState([]);
  const getMeds = async () => {
    const resp = await fetch("http://localhost:4000/v1/meds");
    const data = await resp.json();
    console.log(data.result);
    setMedsArr(data.result);
  };

  useEffect(() => {
    getMeds();

    return () => {
      setMedsArr([]);
    };
  }, []);
  return (
    <div className='container'>
      <div className={css.addPrescription}>
        <h1>Name: Health Records</h1>
        <div className={css.topButtons}>
          <OrangeBtn title='ADD PRESCRIPTION' />
          <WhiteBtn title='ADD LOG' />
        </div>
      </div>
      <div className={css.displayButtons}>
        <h3>Display:</h3>
        <OrangeBtn title='LOGS ✓' />
        <OrangeBtn title='PRESCRIPTIONS ✓' />
      </div>
      <div className={css.medsList}>
        {medsArr.map((medication) => (
          <Medications medication={medication} />
        ))}
      </div>
    </div>
  );
}

export default MedsPage;
