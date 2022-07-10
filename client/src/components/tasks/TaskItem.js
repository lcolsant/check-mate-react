import React, { useContext } from 'react';
import TaskContext from '../../context/task/taskContext';

const TaskItem = ({ task }) => {
  const taskContext = useContext(TaskContext);
  const { deleteTask, setCurrent, clearCurrent } = taskContext;
  const { id, description, completed } = task;

  const onDelete = () => {
    deleteTask(id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {description.charAt(0).toUpperCase() + description.slice(1)}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' + (completed === true ? 'badge-success' : 'badge-danger')
          }
        >
          {completed ? 'Completed' : 'Not Completed'}
        </span>
      </h3>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(task)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default TaskItem;
