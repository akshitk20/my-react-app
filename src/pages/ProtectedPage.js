import React from "react";
import { Navigate} from "react-router-dom";

export const ProtectedPage = () => {
    const isAuthed = true;
    //const history = useHistory();
    return isAuthed ? (
        <h1>Only authenicated users should be able to see this!</h1>
    ):(
        <Navigate to="/"/>
    ); 
   
}