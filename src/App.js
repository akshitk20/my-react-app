import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting';
import { PeopleList } from './PeopleList';
import { CounterButton } from './CounterButton';
import { CongratulationsMessage } from './CongratulationsMessage';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage, ControlledFormPage, UnControlledFormPage, UserProfilePage } from './pages'; 
import { NavBar } from './NavBar';
import { FormsNavBar } from './FormsNavBar';
import { UserDataLoader } from './UserDataLoader';
import { ThemeContext } from './ThemeContext';

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
    <ThemeContext.Provider value='light'>
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
          <Link to="/counter">Go to Counter Page</Link>
          <Link to="/people-list">Go to People Link page</Link>
          <NavBar/>
          <div className='App-header'>
          <Routes>
                <Route path="/" exact element={ <HomePage/>} />
                <Route path="/counter" element={<CounterButtonPage/>} />
                <Route path="/people-list" element={ <PeopleListPage/>} />
                <Route path="/protected" element={ <ProtectedPage/>} />
                <Route path="/user" element={<UserProfilePage/>} />
                <Route path='/forms/controlled' element={ <ControlledFormPage/>}></Route>
                {/*<Route path="/forms">
                  
                  <Route path='/forms/un-controlled' element={ <UnControlledFormPage/>}></Route>
                </Route>*/}
                <Route element={ <NotFoundPage/>} />
          </Routes>
          </div>
      </Router>
    </div>
    </ThemeContext.Provider>
  
  );
}

export default App;
