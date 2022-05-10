import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import CheckBox from './CheckBox';

const Form = ({ addTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(name, description, isCompleted);
    setName('');
    setDescription('');
    setIsCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        handleChange={setName}
        name="name"
        value={name}
        placeholder="Enter name of project"
      />
      <Input
        handleChange={setDescription}
        name="description"
        value={description}
        placeholder="Enter description"
      />
      <CheckBox
        value={isCompleted}
        handleChange={setIsCompleted}
        labelText={'Completed?'}
        name="completed"
      />
      <button>Send</button>
    </form>
  );
};

Form.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Form;
