import { Task } from '../../../Curso/ob-react/src/models/task.class';
import './App.css';
import TaskListComponent from './components/container/task_list';
import TaskForm from './components/pure/forms/taskForm';
import TaskComponent from './components/pure/task';

function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
