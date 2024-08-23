import React from "react";

export const UnControlledFormPage = () => {
    const nameInput = React.createRef();
    const emailInput = React.createRef();
    const favouriteColorInput = React.createRef();

    return (
        <form>
            <h3>Please Enter your information:</h3>
            <div>
                <input ref={nameInput}
                type="text" 
                placeholder="Name"/>
            </div>
            <div>
                <input ref={emailInput}
                type="text" 
                placeholder="Email"/>
            </div>
            <div>
                <input ref={favouriteColorInput} 
                type="text" 
                placeholder="Favorite Color"/>
            </div>
            <button onClick={e => {
                alert(`
                Your name is ${nameInput.current.value},
                Your email is ${emailInput.current.value},
                Your fav color is ${favouriteColorInput.current.value}
                `);
                e.preventDefault();
            }}>Submit</button>
        </form>
    )
}