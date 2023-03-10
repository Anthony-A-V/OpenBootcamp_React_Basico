import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();

  return (
    <div>
      <h4>Login Form</h4>
      <Formik
        // ** Initial values that the form will take **
        initialValues={initialCredentials}
        // ** Yup Validation Schema **
        validationSchema={loginSchema}
        // ** onSubmit Event **
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          alert(JSON.stringify(values, null, 2));
          // We save the data in the localStorage
          await localStorage.setItem('credentials', values);
          navigate('/profile');
        }}
      >
        {/* We obtain props from Formik */}

        {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="example@email.com" type="email" />

            {/* Email Errors */}

            {errors.email && touched.email && (
              // <div className="error">
              //   <p>{errors.email}</p>
              // </div>
              <ErrorMessage component="div" name="email"></ErrorMessage>
            )}

            <label htmlFor="password">Password</label>
            <Field id="password" name="password" placeholder="password" type="password" />

            {/* Password Errors */}

            {errors.password && touched.password && (
              // <div className="error">
              //   <p>{errors.password}</p>
              // </div>
              <ErrorMessage component="div" name="password"></ErrorMessage>
            )}

            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
