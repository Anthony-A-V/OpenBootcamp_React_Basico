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
  // ? Otra forma condicional en el caso se requiera renderizar dentro de un div
  // ? Se pueden usar los "fragmentos" de React para envoler el html
  // <div>
  //   {logged ? (
  //     <>
  //       <h1>Task Detail - {id}</h1>
  //       <h2>{task.name}</h2>
  //       <h3>{task.description}</h3>
  //     </>
  //   ) : (
  //     <Navigate to="/login" replace />
  //   )}
  // </div>;
};

export default TaskDetailPage;
