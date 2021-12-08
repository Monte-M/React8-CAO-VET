import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Medications from "../components/Medications";
import css from "./MedsPage.module.css";
import OrangeBtn from "../components/OrangeBtn";

function MedsPage() {
  const [medsArr, setMedsArr] = useState([]);
  const getMeds = async () => {
    const resp = await fetch("http://localhost:4000/v1/meds");
    const data = await resp.json();

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
      <div className={css.addMed}>
        <h1>Medication list:</h1>
        <Link to='/addMed'>
          <OrangeBtn title='ADD MEDICATION' />
        </Link>
      </div>
      <div className={css.medsList}>
        {medsArr.map((medication) => (
          <Medications key={medication.id} medication={medication} />
        ))}
      </div>
    </div>
  );
}

export default MedsPage;
