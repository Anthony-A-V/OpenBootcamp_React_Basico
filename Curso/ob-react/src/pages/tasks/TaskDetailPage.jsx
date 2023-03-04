import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = ({ taskList }) => {
  const { id } = useParams();
  const task = taskList.find((task) => task.id === parseInt(id));

  return (
    <div>
      <h1>Task Detail - {id}</h1>
      <h2>{task.name}</h2>
      <h3>{task.description}</h3>
    </div>
  );
};

export default TaskDetailPage;
