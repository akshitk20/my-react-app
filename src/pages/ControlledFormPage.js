import React, {useState} from "react";
import { Button } from "../Button";
import { SuccessButton } from "../Button";

export const ControlledFormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [favouriteColor, setFavoriteColor] = useState('');

    return (
        <form>
            <h3>Please Enter your information:</h3>
            <div>
                <input type="text" 
                placeholder="Name"
                value={name} 
                onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <input type="text" 
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <input type="text" 
                placeholder="Favorite Color"
                value={favouriteColor}
                onChange={e => setFavoriteColor(e.target.value)}
                />
            </div>
            <SuccessButton 
            onClick={e => {
                alert(`
                    Your name is ${name}
                    Your email is ${email}
                    Your Fav color is ${favouriteColor}
                `)
                e.preventDefault(); // to prevent this event from bubbling up the higher component
            }}>Submit</SuccessButton>
        </form>
    )
}