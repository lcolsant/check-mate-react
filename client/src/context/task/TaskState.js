import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';

import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_TASKS,
  CLEAR_FILTER,
} from '../types';

const TaskState = (props) => {
  const initialState = {
    tasks: [
      {
        id: 'b7049153-3b86-4fd5-906f-88f7c31f32ff',
        description: 'pick up groceries',
        completed: 'false',
      },
      {
        id: '07b806d4-ac02-4b75-8349-965ec87d9db5',
        description: 'laundry',
        completed: 'true',
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  //add task
  const addTask = (task) => {
    task.id = uuidv4();
    dispatch({ type: ADD_TASK, payload: task });
  };

  //delete task
  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };

  //set current task
  const setCurrent = (task) => {
    dispatch({ type: SET_CURRENT, payload: task });
  };

  //clear current task
  const clearCurrent = () => {
    dispatch({ type: SET_CURRENT });
  };

  //update task
  const updateTask = (task) => {
    dispatch({ type: UPDATE_TASK, payload: task });
  };

  //filter tasks

  //clear filter

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        current: state.current,
        addTask,
        deleteTask,
        setCurrent,
        clearCurrent,
        updateTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
