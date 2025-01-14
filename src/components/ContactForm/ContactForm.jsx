import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" as="span" />
        </label>
        <label className={css.label}>
          Number
          <Field type="text" name="number" />
          <ErrorMessage name="number" as="span" />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
