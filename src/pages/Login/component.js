import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import Input from '../../components/Input';
import { loginUser } from '../../api';

const Login = ({ setUserInfo }) => {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, formikHelpers) => {
          const formData = new FormData();

          Object.entries(values).forEach((item) => {
            formData.append(item[0], item[1]);
          });

          const userInfo = await loginUser(formData);
          formikHelpers.resetForm();
          setUserInfo(userInfo);
          localStorage.userInfo = JSON.stringify(userInfo);
        }}
        validationSchema={yup.object().shape({
          password: yup.string().min(4).max(30).required(),
          email: yup.string().min(4).max(30).email().required(),
        })}
      >
        <Form>
          <div className="form">
            <Field name="email" type="email" label="Email" component={Input} />
            <Field
              name="password"
              type="password"
              label="Password"
              component={Input}
            />
            <button type="submit">Login</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
