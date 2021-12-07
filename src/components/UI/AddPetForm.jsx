import Input from "./Input";
import css from "./AddPetForm.module.css";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import OrangeBtn from "../OrangeBtn";

const AddPetForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "Vasia",
      dob: "2020-05-04",
      client_email: "test@gmail.com",
    },

    validationSchema: Yup.object({
      name: Yup.string().min(3).max(50).required("This field is required"),
      dob: Yup.date().required("This field is required"),
      client_email: Yup.string().email().required("This field is required"),
    }),

    onSubmit: async (values) => {
      const resp = await fetch("http://localhost:4000/v1/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await resp.json();
      console.log(data);

      if (data.error) {
        toast.error("Please check the form");
      }
      if (data.msg) {
        toast.success("Pet has been successfully added");
      }
    },
  });

  return (
    <div className={css.container}>
      <h1>Add New Pet</h1>
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
          id="'dob"
          name='dob'
          placeholder='dob'
          type='date'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dob}
          error={formik.touched.dob && formik.errors.dob}
        />
        <Input
          id='client_email'
          name='client_email'
          placeholder='Client email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.client_email}
          error={formik.touched.client_email && formik.errors.client_email}
        />
        <OrangeBtn type='submit' title='Register' />
      </form>
    </div>
  );
};

export default AddPetForm;
