import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TaskItem from './TaskItem';
import TaskContext from '../../context/task/taskContext';

const Tasks = () => {
  const taskContext = useContext(TaskContext);

  const { tasks, filtered } = taskContext;

  tasks.map((task) => console.log(task.description));

  if (tasks.length === 0) {
    return <h4>Please add a task...</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((task) => (
              <CSSTransition key={task.id} timeout={500} classNames="item">
                <TaskItem task={task} />
              </CSSTransition>
            ))
          : tasks.map((task) => (
              <CSSTransition key={task.id} timeout={500} classNames="item">
                <TaskItem task={task} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Tasks;
