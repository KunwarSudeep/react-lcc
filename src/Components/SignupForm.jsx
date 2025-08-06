import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      address: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <style>{`
        form {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px 25px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.08);
          font-family: Arial, sans-serif;
        }
        label {
          display: block;
          margin-bottom: 6px;
          font-weight: bold;
          color: #333;
        }
        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 14px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        input:focus {
          outline: none;
          border-color: #4a90e2;
          box-shadow: 0 0 5px rgba(74, 144, 226, 0.4);
        }
        .error {
          color: red;
          font-size: 0.85rem;
          margin-bottom: 10px;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #4a90e2;
          border: none;
          border-radius: 5px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.2s ease-in-out;
        }
        button:hover {
          background-color: #3a7bc8;
        }
        button:disabled {
          background-color: #b0c4de;
          cursor: not-allowed;
        }
      `}</style>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="error">{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="error">{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="error">{formik.errors.address}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignupForm;
