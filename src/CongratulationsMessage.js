import React, { useEffect } from "react";
import { Button } from "./Button";

export const CongratulationsMessage = ({threshold, onHide}) => {
    console.log("Rendering CongratulationsMessage");
    return (
        <>
            <h1>Congratulations! You have reached {threshold} number</h1>
            <Button onClick={onHide}>Hide</Button>
        </> 
    );
}