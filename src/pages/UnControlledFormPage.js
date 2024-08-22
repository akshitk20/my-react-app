import React from "react";

export const UncontrolledFormPage = () => {
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
        </form>
    )
}