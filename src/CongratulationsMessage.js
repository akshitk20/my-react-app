import React from "react";

export const CongratulationsMessage = ({numberOfClicks, threshold}) => {
    console.log("Rendering CongratulationsMessage");
    return numberOfClicks >= threshold
    ? <h1>Congratulations! You have reached {threshold} number</h1>
    : null;
}