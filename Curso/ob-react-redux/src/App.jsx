import './App.css';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import Filteroptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <TodosContainer />
      <TodoFormContainer />
      <Filteroptions />
    </div>
  );
}

export default App;
