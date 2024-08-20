import React, {useEffect} from "react";

export const CounterButton = ({onIncrement,numberOfClicks}) => {
    console.log("Rendering CounterButton");
    useEffect(() => {
        console.log("use Effect function called!")
    },[numberOfClicks]); // this function will only run if the numberOfClicks changes
    return (
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <button onClick={onIncrement}>Click Me!</button>
        </>
    )
}