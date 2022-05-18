import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Input from '../Input';

const EditModal = ({
  title,
  isOpen,
  name,
  description,
  handleOk,
  id,
  handleCancel,
}) => {
  return isOpen ? (
    <div className="modal">
      <div className="modal__content">
        <h2>{title}</h2>
        <Formik
          initialValues={{ name, description, id }}
          onSubmit={handleOk}
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
            <button>Edit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  ) : null;
};

export default EditModal;
