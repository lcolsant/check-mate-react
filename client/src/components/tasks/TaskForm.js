import React, { useState, useContext, useEffect } from 'react';
import TaskContext from '../../context/task/taskContext';

const TaskForm = () => {
  const taskContext = useContext(TaskContext);

  const { addTask, updateTask, current, clearCurrent } = taskContext;

  useEffect(() => {
    if (current !== null && current !== undefined) {
      setTask(current);
    } else {
      setTask({
        description: '',
        completed: '',
      });
    }
  }, [taskContext, current]);

  const [task, setTask] = useState({
    description: '',
    completed: '',
  });

  const { description, completed } = task;

  const onChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (current === null) {
      addTask(task);
    } else {
      updateTask(task);
    }

    setTask({
      description: '',
      completed: '',
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Update Task' : 'Update Task'}
      </h2>
      <input
        type="text"
        placeholder="task"
        name="description"
        value={description}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="completed"
        name="completed"
        value={completed}
        onChange={onChange}
      />
      <div>
        <input
          type="submit"
          value={current ? 'Update Task' : 'Update Task'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default TaskForm;
