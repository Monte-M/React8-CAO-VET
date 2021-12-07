import { useState } from "react";
import Input from "./Input";
import css from "./AddPetForm.module.css";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { useHistory } from "react-router";
import OrangeBtn from "../OrangeBtn";

const AddPetForm = () => {
  const history = useHistory();
  const [formSentSuccess, setFormSentSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      dob: "",
      client_email: "",
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

      if (data.error) {
        toast.error("Please check the form");
      }
      if (data.msg) {
        toast.success("Successfully registered");
        setFormSentSuccess(true);
        history.replace("/login");
      }
    },
  });

  return (
    <div className='container'>
      <div className={css.topSeparate}>
        {formSentSuccess ? (
          <h2 className={css.container}>You have successfully added a pet.</h2>
        ) : (
          <div className={css.container}>
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
                placeholder='clientemail'
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatPassword}
                error={
                  formik.touched.repeatPassword && formik.errors.repeatPassword
                }
              />
              <OrangeBtn type='submit'>REGISTER</OrangeBtn>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPetForm;
