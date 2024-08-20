import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting';

function App() {
  
  const learning = "LEARNING";
  const url = "https://reactjs.org";
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Akshit" numberOfMessages={5}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My first REACT {learning} App
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
