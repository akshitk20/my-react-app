import React from "react";
import { Greeting } from "../Greeting";

export const HomePage = () => {
    return (
        <>
        <h1>Home Page</h1>
        <Greeting name="Akshit" numberOfMessages={10} />
        </>
    )
}