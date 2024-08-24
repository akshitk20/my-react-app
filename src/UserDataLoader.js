import React, {useState, useEffect} from "react";


export const UserDataLoader = () => {
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://randomuser.me/api');
            const data = await response.json();
            //console.log(data);
            setUser(data.results[0]);
        }
        fetchUser();
    }, []); 
}