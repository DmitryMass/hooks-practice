import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ labelText, name, value, handleChange }) => {
  const onChange = (event) => {
    handleChange(event.target.checked);
  };

  return (
    <label>
      {labelText}
      <input onChange={onChange} type="checkbox" name={name} checked={value} />
    </label>
  );
};

CheckBox.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

CheckBox.defaultProps = {
  defaultValue: false,
};

export default CheckBox;
