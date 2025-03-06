import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Newsletter.scss";

const Newsletter = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <div className="newsletter">
      <h2 className="newsletter__heading">Subscribe to Newsletter</h2>
      <form className="newsletter__form" onSubmit={formik.handleSubmit}>
        <div className="newsletter__input-group">
          {/* Name Field */}
          <div className="newsletter__field">
            <label htmlFor="name" className="newsletter__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="newsletter__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>
          {formik.touched.name && formik.errors.name && (
            <div className="newsletter__error">{formik.errors.name}</div>
          )}

          {/* Email Field */}
          <div className="newsletter__field">
            <label htmlFor="email" className="newsletter__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="newsletter__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className="newsletter__error">{formik.errors.email}</div>
          )}
        </div>

        <button type="submit" className="newsletter__button">
          Subscribe
        </button>
      </form>
      <p className="newsletter__disclaimer">
        I don't like spam, so I will send you only 1 mail per month
      </p>
    </div>
  );
};

export default Newsletter;
