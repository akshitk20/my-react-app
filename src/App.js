import logo from './logo.svg';
import './App.css';

function App() {
  const isMorning = new Date().getHours();
  let greeting = isMorning < 12 ?
  <h3>Good Morning!</h3> :
  <h3>Good Evening!</h3>;
  const learning = "LEARNING";
  const url = "https://reactjs.org";
  return (
    <div className="App">
      <header className="App-header">
      {greeting}
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
