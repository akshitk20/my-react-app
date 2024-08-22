import React from "react";

export const ControlledFormPage = () => {
    return (
        <form>
            <h3>Please Enter your information:</h3>
            <div>
                <input type="text" placeholder="Name"></input>
            </div>
            <div>
                <input type="text" placeholder="Email"></input>
            </div>
            <div>
                <input type="text" placeholder="Favorite Color"></input>
            </div>
            <button>Submit</button>
        </form>

    )
}