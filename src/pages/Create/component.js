import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Input from '../../components/Input';
import { createProject } from '../../api';

const CreatePage = () => {
  let navigate = useNavigate();
  return (
    <Formik
      initialValues={{ name: '', description: '' }}
      onSubmit={async (values) => {
        const body = new FormData();

        Object.entries(values).forEach(([key, value]) => {
          body.append(key, value);
        });

        await createProject(body);
        navigate('/');
      }}
      validationSchema={yup.object().shape({
        name: yup.string().min(4).max(30).required(),
        description: yup.string().min(4).max(500).required(),
      })}
    >
      <Form>
        <Field name="name" label="Project name" component={Input} />
        <Field
          name="description"
          label="Project description"
          componentType="textarea"
          component={Input}
        />
        <button>Create</button>
      </Form>
    </Formik>
  );
};

export default CreatePage;
