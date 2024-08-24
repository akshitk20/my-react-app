import React from "react";
import { CounterButtonCB } from "./CounterButtonCB";
import { CongratulationsMessageCB } from "./CongratulationsMessageCB";

export class CounterButtonPageCB extends React.Component {
    render() {
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
}