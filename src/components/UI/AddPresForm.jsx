import Input from "./Input";
import css from "./AddPresForm.module.css";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import OrangeBtn from "../OrangeBtn";

const AddPresForm = ({ id }) => {
  const [medsArr, setMedsArr] = useState([]);
  const formik = useFormik({
    initialValues: {
      medication_id: "1",
      pet_id: id,
      comment: "",
    },

    validationSchema: Yup.object({
      medication_id: Yup.number().required("This field is required"),
      pet_id: Yup.number().required("This field is required"),
      comment: Yup.string().min(3).required("This field is required"),
    }),

    onSubmit: async (values) => {
      const resp = await fetch(`http://localhost:4000/v1/pres`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await resp.json();

      if (data.error) {
        toast.error("Please check the form");
      }
      if (data.msg) {
        toast.success("Pet has been successfully added");
        window.location.reload();
      }
    },
  });

  const getMeds = async () => {
    const resp = await fetch("http://localhost:4000/v1/meds");
    const data = await resp.json();

    setMedsArr(data.result);
  };

  useEffect(() => {
    getMeds();
  }, []);

  return (
    <div className={css.container}>
      <h1>Add Prescription</h1>
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <label htmlFor='medication_id'>Vaccine:</label>
        {medsArr && (
          <select
            className={css.select}
            id='medication_id'
            name='medication_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={Number(formik.values.medication_id)}
            error={formik.touched.medication_id && formik.errors.medication_id}
          >
            {medsArr?.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        )}
        <Input
          id='comment'
          name='comment'
          placeholder='Comment'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comment}
          error={formik.touched.comment && formik.errors.comment}
        />
        <OrangeBtn type='submit' title='Add' />
      </form>
    </div>
  );
};

export default AddPresForm;
