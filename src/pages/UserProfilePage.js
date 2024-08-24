import React, {useState, useEffect} from "react";

export const UserProfilePage = () => {
    const [user, setUser] = useState({name: {}});

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://randomuser.me/api');
            const data = await response.json();
            //console.log(data);
            setUser(data.results[0]);
        }
        fetchUser();
    }, []); // empty array so that the data loading flow only happens once when the user opens this page for first time
    return (
        <div>
            <h3>Name: {user.name.first} {user.name.last}</h3>
            <p>Email: {user.email}</p>
        </div>
    );
}