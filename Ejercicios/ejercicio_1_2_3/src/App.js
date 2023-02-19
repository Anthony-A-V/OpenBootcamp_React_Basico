import logo from './logo.svg';
import './App.css';
import ContactComponent from './components/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactComponent></ContactComponent>
      </header>
    </div>
  );
}

export default App;
