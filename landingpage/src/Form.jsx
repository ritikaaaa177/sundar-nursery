import React from "react";
// import { Formik } from "formik";
import "./index.css";

import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  email: "",
  password: "",
};

function FormLogin() {
  return (
    <div className="myForm">
      <Formik initialValues={initialValues}>
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            style={{ border: "2px solid blue" }}
          />
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="password"
            type="password"
            style={{ border: "2px solid blue" }}
          />

          <button
            type="submit"
            style={{
              //   border: "2px solid black",
              margin: "13px",
            }}
          >
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormLogin;
