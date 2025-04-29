import { useId } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.scss";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9-]+$/, "Phone number can only include digits and hyphens")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ initialValues, onSubmit }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.contactForm}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field id={nameFieldId} name="name" />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field id={numberFieldId} name="number" type="tel" />
        <ErrorMessage name="number" component="span" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
