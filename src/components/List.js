import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const List = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => {
        const deleteHandler = () => deleteTask(task.id);

        return (
          <li
            style={{
              textDecoration: task.isCompleted ? 'line-through' : 'none',
            }}
            key={task.id}
          >
            {task.name} - {task.description}
            <button onClick={deleteHandler}>x</button>
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default List;
