import React, { useEffect, useContext } from 'react';
import Tasks from '../tasks/Tasks';
import TaskForm from '../tasks/TaskForm';
import TaskFilter from '../tasks/TaskFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    authContext.loadUser(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid-2">
      <div>
        <TaskForm />
      </div>
      <div>
        <TaskFilter />
        <Tasks />
      </div>
    </div>
  );
};

export default Home;
