import React, {useEffect, useState} from "react";
import { CounterButton } from "../CounterButton";
import { CongratulationsMessage } from "../CongratulationsMessage";
import { useParams, useLocation } from "react-router-dom";
import { DisplayIf } from "../DisplayIf";
import { usePersistentState } from "../usePersistentState";

export const CounterButtonPage = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(
      Number(localStorage.getItem('numberOfClicks')) || 0
      );
    //const [numberOfClicks, setNumberOfClicks] = usePersistentState(numberOfClicks,0,Number);
    const [hideMessage, setHideMessage] = useState(false);
    
    useEffect(() => {
      localStorage.setItem('numberOfClicks', numberOfClicks);
    }, [numberOfClicks]);

    const increment = () => setNumberOfClicks(numberOfClicks+1);
  
    
    //const location = useLocation();
    //console.log(queryString.parse(location.search));
    return (
      <>
      <h1> CounterButton Page!</h1>
       <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
        <CongratulationsMessage 
         threshold={10} 
         onHide={() => setHideMessage(true)}/>
        </DisplayIf> 
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/> 
      </>
    );
}