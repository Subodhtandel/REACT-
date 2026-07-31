import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
})

function FormikLogin() {
  return (
    <div>
      <h2>Formik Login</h2>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({ handleChange, values }) => (
          <Form>

            <Field
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />

            <br />

            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />

            <br />

            <Field
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />

            <br />

            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />

            <br />

            <button type="submit">
              Login
            </button>

          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikLogin