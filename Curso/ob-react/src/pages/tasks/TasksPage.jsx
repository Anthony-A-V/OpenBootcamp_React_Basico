import React from 'react';
import TaskListComponent from '../../components/container/task_list';
import { Navigate } from 'react-router-dom';

const TasksPage = ({ logged }) => {
  return logged ? (
    <div>
      <TaskListComponent></TaskListComponent>
    </div>
  ) : (
    <div>
      <Navigate to="/login" replace />
    </div>
  );
  // ? Otra forma condicional en el caso se requiera renderizar dentro de un div
  // <div>{logged ? <TaskListComponent /> : <Navigate to="/login" replace />}</div>;
};

export default TasksPage;
