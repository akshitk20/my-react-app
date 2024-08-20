import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting';
import { PeopleList } from './PeopleList';
import { CounterButton } from './CounterButton';

const people = [{
  name: 'John',
  age: 40,
  hairColor: 'brown' 
},{
  name: 'Helga',
  age: 25,
  hairColor: 'red' 
},{
  name: 'Dwayne',
  age: 55,
  hairColor: 'blonde' 
}];

function App() {
  
  const learning = "LEARNING";
  const url = "https://reactjs.org";
  // const displayAlert = () => {
  //   alert('Hello');
  // }
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greeting name="Akshit" numberOfMessages={55}/>
        <PeopleList people={people}/>
        <button onClick={() => alert('Hello')}>Click Me!</button>
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
        </a> */}
      <CounterButton/> 
      <Greeting name="Akshit" numberOfMessages={55}/>
      </header>
    </div>
  );
}

export default App;
