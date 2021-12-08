import Input from "./Input";
import css from "./AddLogForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import OrangeBtn from "../OrangeBtn";

const AddLogForm = ({ id }) => {
  const formik = useFormik({
    initialValues: {
      pet_id: id,
      description: "",
      status: "",
    },

    validationSchema: Yup.object({
      pet_id: Yup.number().required("This field is required"),
      description: Yup.string().min(5).required("This field is required"),
      status: Yup.string().min(3).required("This field is required"),
    }),

    onSubmit: async (values) => {
      const resp = await fetch(`http://localhost:4000/v1/logs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await resp.json();
      console.log(data);
      console.log(values);

      if (data.error) {
        toast.error("Please check the form");
      }
      if (data.msg) {
        toast.success("Pet has been successfully added");
        window.location.reload();
      }
    },
  });

  return (
    <div className={css.container}>
      <h1>Add Log</h1>
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <label htmlFor='status'>Status:</label>
        <select
          className={css.select}
          id='status'
          name='status'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.status}
          error={formik.touched.status && formik.errors.status}
        >
          <option value='Finished'>Finished</option>
          <option value='Unfinished'>Unfinished</option>
        </select>
        <Input
          id='description'
          name='description'
          placeholder='Description'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          error={formik.touched.description && formik.errors.description}
        />

        <OrangeBtn type='submit' title='Add' />
      </form>
    </div>
  );
};

export default AddLogForm;
