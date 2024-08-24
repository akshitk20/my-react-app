import React from "react";
import { CounterButtonCB } from "./CounterButtonCB";
import { CongratulationsMessageCB } from "./CongratulationsMessageCB";

export class CounterButtonPageCB extends React.Component {
    state = {
        hideMessage: false,
        numberOfClicks: 0
    }

    increment = () => {
        this.setState({numberOfClicks: this.state.numberOfClicks + 1});
    }
    render() {
        const {hideMessage, numberOfClicks} = this.state;
        return (
            <>
            <h1> CounterButton Page!</h1>
             <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
              <CongratulationsMessage 
               threshold={10} 
               onHide={() => this.setState({hideMessage : true})}/>
              </DisplayIf> 
              <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/> 
            </>
          );
    }
}