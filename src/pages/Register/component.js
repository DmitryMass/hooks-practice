import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import Input from '../../components/Input';
import './index.scss';
import { registerUser } from '../../api';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register page</h1>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        onSubmit={async (values, formikHelpers) => {
          const formData = new FormData();

          Object.entries(values).forEach((item) => {
            formData.append(item[0], item[1]);
          });
          await registerUser(formData);
          formikHelpers.resetForm();
          location.pathname = `/login`;
        }}
        validationSchema={yup.object().shape({
          username: yup.string().min(4).max(30).required(),
          email: yup.string().min(4).max(30).email().required(),
          password: yup.string().min(4).max(30).required(),
        })}
      >
        <Form>
          <div className="form">
            <Field name="username" label="Username" component={Input} />
            <Field type="email" label="Email" name="email" component={Input} />
            <Field
              type="password"
              label="Password"
              name="password"
              component={Input}
            />
            <button type="submit">Register</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
