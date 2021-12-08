import Input from "./Input";
import css from "./AddPetForm.module.css";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import OrangeBtn from "../OrangeBtn";

const AddMedForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().min(3).max(50).required("This field is required"),
      description: Yup.string().min(5).required("This field is required"),
    }),

    onSubmit: async (values) => {
      const resp = await fetch("http://localhost:4000/v1/meds", {
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
        toast.success("Medication has been added successfully");
      }
    },
  });

  return (
    <div className={css.container}>
      <h1>Add New Medication</h1>
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <Input
          id="'name"
          name='name'
          placeholder='name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.touched.name && formik.errors.name}
        />

        <Input
          id="'description"
          name='description'
          placeholder='description'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          error={formik.touched.description && formik.errors.description}
        />

        <OrangeBtn type='submit' title='Add medication' />
      </form>
    </div>
  );
};

export default AddMedForm;
