// import logo from './logo.svg';
import './App.css';
// import AsyncExample from './components/pure/AsyncExample';
// import ObservableExample from './components/pure/ObservableExample';
// import FetchExample from './components/pure/FetchExample';
// import AxiosExample from './components/pure/AxiosExample';
import AxiosCRUDExample from './components/pure/AxiosCRUDExample';
// import Father from './components/container/father';
// import GreetingStyled from './components/pure/greetingStyled';
// import Ejemplo4 from './hooks/Ejemplo4';
// import TaskListComponent from './components/container/task_list';
// import LoginFormik from './components/pure/forms/loginFormik';
// import RegisterFormik from './components/pure/forms/registerFormik';
// import OptionalRender from './components/pure/optionalRender';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Greeting from './components/pure/greeting';
// import GreetingF from '/components/pure/greetingF';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Componente propio Greeting.jsx */}
      {/* <Greeting name="Anthony"></Greeting> */}
      {/* Componente de ejemplo funcional */}
      {/* <GreetingF name="Anthony"></GreetingF> */}
      {/* Componente de Listado de Tareas */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* Ejemplos de uso de Hooks */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* Todo lo que hay aquí, es tratado como props.children */}
      {/* <Ejemplo4 nombre="Anthony">
          <h3>Contenido del props.children</h3>
        </Ejemplo4> */}
      {/* <GreetingStyled name="Anthony"></GreetingStyled> */}
      {/* </header> */}
      {/* Gestión de eventos */}
      {/* <Father></Father> */}

      {/* Ejemplo de Renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Ejemplos de uso de Formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}

      {/* Ejemplos de procesos asíncronos */}
      {/* <AsyncExample /> */}
      {/* <ObservableExample /> */}
      {/* <FetchExample />  */}
      {/* <AxiosExample /> */}
      <AxiosCRUDExample />
      {/* Proyecto Final */}
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
