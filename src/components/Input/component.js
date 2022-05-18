import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({ field, form, label, type, componentType }) => {
  const [stateType, setStateType] = useState(type);

  const handleShow = () => {
    setStateType((prevStateType) => {
      if (prevStateType === 'password') return 'text';
      if (prevStateType === 'text') return 'password';
    });
  };

  return (
    <div className="input">
      <label className="input__label">
        {label}
        {componentType === 'textarea' ? (
          <textarea
            onChange={field.onChange}
            onBlur={field.onBlur}
            type={stateType}
            name={field.name}
            value={field.value}
          ></textarea>
        ) : (
          <input
            onChange={field.onChange}
            onBlur={field.onBlur}
            type={stateType}
            name={field.name}
            value={field.value}
          />
        )}
        {type === 'password' && (
          <button type="button" onClick={handleShow}>
            {stateType === 'password' ? 'show' : 'hide'}
          </button>
        )}
      </label>
      {form.errors[field.name] && form.touched[field.name] && (
        <div className="input__error">{form.errors[field.name]}</div>
      )}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  componentType: 'input',
};

export default Input;
