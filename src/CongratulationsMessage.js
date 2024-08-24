import React, { useEffect } from "react";

export const CongratulationsMessage = ({threshold, onHide}) => {
    console.log("Rendering CongratulationsMessage");
    return (
        <>
            <h1>Congratulations! You have reached {threshold} number</h1>
            <button onClick={onHide}>Hide</button>
        </> 
    );
}