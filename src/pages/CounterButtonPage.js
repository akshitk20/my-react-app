import React, {useState} from "react";
import { CounterButton } from "../CounterButton";
import { CongratulationsMessage } from "../CongratulationsMessage";
import { useParams, useLocation } from "react-router-dom";
import queryString from 'query-string';

export const CounterButtonPage = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [hideMessage, setHideMessage] = useState(false);
    
    const increment = () => setNumberOfClicks(numberOfClicks+1);
  
    const {name} = useParams();
    const location = useLocation();
    //console.log(queryString.parse(location.search));
    return (
      <>
      <h1>{name}'s CounterButton Page!</h1>
         {hideMessage ? null 
         : <CongratulationsMessage numberOfClicks={numberOfClicks} 
         threshold={10} 
         onHide={() => setHideMessage(true)}/>} 
         
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/> 
      </>
    );
}