import logo from "./logo.svg";
import "./App.css";
import ClockFunctional from "./components/clockFunctional";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClockFunctional></ClockFunctional>
      </header>
    </div>
  );
}

export default App;
