import React, {useState} from "react";

export const CounterButton = ({onIncrement,numberOfClicks}) => {
    console.log("Rendering CounterButton");

    return (
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <button onClick={onIncrement}>Click Me!</button>
        </>
    )
}