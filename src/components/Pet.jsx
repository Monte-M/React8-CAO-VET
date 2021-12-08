import React from "react";
import OrangeBtn from "./OrangeBtn";
import WhiteBtn from "./WhiteBtn";
import css from "./Pet.module.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Pet({ pet, dob }) {
  const options = {
    dateStyle: "short",
  };

  const currentDate = new Date(dob);
  const petDate = currentDate.toLocaleDateString("lt", options);

  const handleDeleteFunction = async () => {
    const id = pet.id;
    const resp = await fetch(`http://localhost:4000/v1/pets/${id}`, {
      method: "DELETE",
    });
    const data = await resp.json();

    if (data.msg === "pet archived") {
      window.location.reload();
      toast.success("Pet successfully archived");
    }
  };

  return (
    <div className={css.container} id={pet.id}>
      <h3>{pet.name}</h3>
      <h4>{petDate}</h4>
      <h4>{pet.client_email}</h4>
      <div>
        <Link to={`/logs/${pet.id}`}>
          <OrangeBtn title='VIEW LOG' />
        </Link>
        <WhiteBtn title='DELETE' handleClick={handleDeleteFunction} />
      </div>
    </div>
  );
}

export default Pet;
