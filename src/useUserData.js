import { useState, useEffect } from "react";

export const useUserData = () => {
    const [user, setUser] = useState({name: {}});
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://randomuser.me/api');
            const data = await response.json();
            console.log(data);
            setUser(data.results[0]);
        }
        fetchUser();
    }, []);
    // return (
    //     {
    //         name : {first: 'John', last: 'Doe'},
    //         email: 'johndoe@gmail.com',
    //     }
    // )
    return user;
}