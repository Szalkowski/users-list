import React, {useState, useEffect} from "react";

export function UsersList() {
    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        async function getList() {
            const fetchData = await fetch("https://jsonplaceholder.typicode.com/users");
            setUsersList(await fetchData.json());
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
