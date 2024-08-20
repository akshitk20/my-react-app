import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting';
import { PeopleList } from './PeopleList';
import { CounterButton } from './CounterButton';
import { CongratulationsMessage } from './CongratulationsMessage';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage } from './pages'; 


function App() {
  
  const learning = "LEARNING";
  const url = "https://reactjs.org";
  
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks+1);

  // const displayAlert = () => {
  //   alert('Hello');
  // }
  return (
    <div className="App">
      {/* <header className="App-header">
        { <Greeting name="Akshit" numberOfMessages={55}/>
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
        </a> }
       {hideMessage ? null 
       : <CongratulationsMessage numberOfClicks={numberOfClicks} 
       threshold={10} 
       onHide={() => setHideMessage(true)}/>} 
       
      <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/> 
      </header> */}
   
      <Router>
          <Link to="/counter/:name">Go to Counter Page</Link>
          <Link to="/people-list">Go to People Link page</Link>
          <Routes>
                <Route path="/" exact element={ <HomePage/>} />
                <Route path="/counter/:name" element={<CounterButtonPage/>} />
                <Route path="/people-list" element={ <PeopleListPage/>} />
                <Route path="/protected" element={ <ProtectedPage/>} />
                <Route element={ <NotFoundPage/>} />
          </Routes>
     
      </Router>
    </div>
  );
}

export default App;
