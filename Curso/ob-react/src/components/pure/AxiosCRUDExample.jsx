import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  login,
  getAllUsers,
  getAllPagedUsers,
  getUserByID,
  createUser,
  updateUserByID,
  deleteUserByID,
} from '../../services/axiosCRUDService';

const AxiosCRUDExample = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const initialCredentials = {
    email: '',
    password: '',
  };

  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          alert(JSON.stringify(response.data.token));
          sessionStorage.setItem('token', response.data.token);
        } else {
          sessionStorage.removeItem('token');
          throw new Error('Login failure');
        }
      })
      .catch((error) => {
        alert(`Something went wrong ${error}`);
        sessionStorage.removeItem('token');
      })
      .finally(() => {
        console.log('Login done');
      });
  };

  const obtainAllUsers = () => {
    getAllUsers()
      .then((response) => {
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data.data));
        } else {
          throw new Error(`No users found`);
        }
      })
      .catch((error) => {
        alert(`Something went wrong ${error}`);
      });
  };

  const obtainAllPagedUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data.data));
        } else {
          throw new Error(`No users found in page ${page}`);
        }
      })
      .catch((error) => {
        alert(`Something went wrong ${error}`);
      });
  };

  const obtainUserByID = (id) => {
    getUserByID(id)
      .then((response) => {
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data.data));
        } else {
          throw new Error('User not found');
        }
      })
      .catch((error) => {
        alert(`Something went wrong ${error}`);
      });
  };

  const createNewUser = (name, job) => {
    createUser(name, job)
      .then((response) => {
        if (response.data && response.status === 201) {
          alert(JSON.stringify(response.data));
        } else throw new Error('User not created');
      })
      .catch((error) => {
        alert(`Something went wrong ${error}`);
      });
  };

  const updateUser = (id, name, job) => {
    updateUserByID(id, name, job)
      .then((response) => {
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data));
        } else {
          throw new Error('User not found & no update done');
        }
      })
      .catch((error) => {
        alert(`Something went wrong ${error}`);
      });
  };

  const deleteUser = (id) => {
    deleteUserByID(id)
      .then((response) => {
        if (response.status === 204) {
          alert(`User with id: ${id} sucessfully deleted`);
        } else {
          throw new Error('User not found & no delete done');
        }
      })
      .catch((error) => {
        alert(`Something went wrong ${error}`);
      });
  };

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
          authUser(values);
        }}
      >
        {/* We obtain props from Formik */}

        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="example@email.com"
              type="email"
            />

            {/* Email Errors */}

            {errors.email && touched.email && (
              // <div className="error">
              //   <p>{errors.email}</p>
              // </div>
              <ErrorMessage component="div" name="email"></ErrorMessage>
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />

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
      {/* Example buttons to test API responses */}
      <div>
        <button onClick={obtainAllUsers}>Get All Users with Axios</button>
        <button onClick={() => obtainAllPagedUsers(1)}>
          Get All Paged Users (Page 1) with Axios
        </button>
        <button onClick={() => obtainUserByID(1)}>Get User 1</button>
        <button onClick={() => createNewUser('morpheus', 'leader')}>
          Create User
        </button>
        <button onClick={() => updateUser(1, 'morpheus', 'Developer')}>
          Update User
        </button>
        <button onClick={() => deleteUser(1)}>Delete User</button>
      </div>
    </div>
  );
};

export default AxiosCRUDExample;
