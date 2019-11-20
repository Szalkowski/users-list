import React, {useState, useEffect} from "react";
import {fetchData} from "../api/fetch";

export function UsersList() {
    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        async function getList() {
            setUsersList(await fetchData("https://jsonplaceholder.typicode.com/users"));
        }

        getList();
    }, []);

    return (
        usersList.map(user =>
            <li key={user.id} className="list__ordered--item">
                <span className="name">{user.name}</span>
                <span className="username">@{user.username}</span>
            </li>
        )
    )
}
