import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import List from './List';
import Form from './Form';

const Application = () => {
  const initialState = JSON.parse(localStorage.tasks || `[]`);
  const [tasks, setTasks] = useState(initialState);
  useEffect(() => {
    localStorage.tasks = JSON.stringify(tasks);
    console.log('useEffect');
  }, [tasks]);

  const addTask = (name, description, isCompleted) => {
    setTasks((prevTasks) => {
      return [...prevTasks, { name, description, isCompleted, id: nanoid() }];
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  const testHandler = () => {
    setTasks((prevTasks) => {
      const { name, isCompleted, id } = prevTasks[0];
      return [
        { name, description: 'tset', isCompleted, id },
        ...prevTasks.slice(1),
      ];
    });
  };

  return (
    <div onClick={testHandler}>
      <Form addTask={addTask} />
      <List tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default Application;
