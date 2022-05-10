import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ handleChange, value, name, placeholder, type }) => {
  const onChange = (event) => {
    handleChange(event.target.value);
  };

  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  defaultValue: '',
  placeholder: '',
  type: 'text',
};

export default Input;
