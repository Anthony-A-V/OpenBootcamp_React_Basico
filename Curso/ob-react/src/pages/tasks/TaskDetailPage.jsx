import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const TaskDetailPage = ({ taskList, logged }) => {
  const { id } = useParams();
  const task = taskList.find((task) => task.id === parseInt(id));

  return logged ? (
    <div>
      <h1>Task Detail - {id}</h1>
      <h2>{task.name}</h2>
      <h3>{task.description}</h3>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default TaskDetailPage;
