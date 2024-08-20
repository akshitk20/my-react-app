import React, { useEffect } from "react";

export const CongratulationsMessage = ({numberOfClicks, threshold, onHide}) => {
    console.log("Rendering CongratulationsMessage");
    useEffect(() => {
        return () => console.log('Congratulations unmounting!');
    }, []);
    return numberOfClicks >= threshold
    ? <>
     <h1>Congratulations! You have reached {threshold} number</h1>
     <button onClick={onHide}>Hide</button>
    </> 
    : null;
}