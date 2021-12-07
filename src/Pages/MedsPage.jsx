import React, { useEffect, useState } from "react";
import Medications from "../components/Medications";
import css from "./MedsPage.module.css";

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
      <h1>Medications list:</h1>
      <div className={css.medsList}>
        {medsArr.map((medication) => (
          <Medications key={medication.id} medication={medication} />
        ))}
      </div>
    </div>
  );
}

export default MedsPage;
