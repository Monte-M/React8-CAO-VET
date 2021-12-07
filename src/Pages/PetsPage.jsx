import React, { useEffect, useState } from "react";
import Pet from "../components/Pet";
import css from "./PetsPage.module.css";
import OrangeBtn from "../components/OrangeBtn";

function PetsPage() {
  const [petsArr, setPetsArr] = useState([]);
  const getPets = async () => {
    const resp = await fetch("http://localhost:4000/v1/pets");
    const data = await resp.json();
    setPetsArr(data.result);
  };

  useEffect(() => {
    getPets();

    return () => {
      setPetsArr([]);
    };
  }, []);

  return (
    <div className='container'>
      <div className={css.addPet}>
        <h1>Pet list:</h1>
        <OrangeBtn title='ADD PET' />
      </div>
      <div className={css.petList}>
        {petsArr.map((pet) => (
          <Pet key={pet.id} pet={pet} dob={pet.dob} />
        ))}
      </div>
    </div>
  );
}

export default PetsPage;
