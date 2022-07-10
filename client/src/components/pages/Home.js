import React from 'react';
import Tasks from '../tasks/Tasks';
import TaskForm from '../tasks/TaskForm';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <TaskForm />
      </div>
      <div>
        <Tasks />
      </div>
    </div>
  );
};

export default Home;
