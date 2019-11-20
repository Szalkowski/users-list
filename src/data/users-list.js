import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {useObserver, useLocalStore} from "mobx-react";
import {fetchData} from "../api/fetch";
import {OrderedList} from "../components/list/ordered-list";

export function UsersList({name}) {
    const usersStore = useLocalStore(() => ({
        usersList: [],
        filteredList: [],
        async loadList() {
            usersStore.usersList = await fetchData("https://jsonplaceholder.typicode.com/users");
            usersStore.filteredList = usersStore.usersList;
        },
        filterUsersByName(name) {
            const regex = new RegExp(name);
            usersStore.filteredList = usersStore.usersList.filter(user => regex.test(user.name));
        }
    }));

    useEffect(() => {
        usersStore.loadList();
    }, [usersStore]);

    useEffect(() => {
        usersStore.filterUsersByName(name);
    }, [usersStore, name]);

    const createNamesList = () => {
        return usersStore.filteredList.map(user =>
            <li key={user.id} className="list__ordered--item">
                <span className="name">{user.name}</span>
                <span className="username">@{user.username}</span>
            </li>
        )
    };

    return useObserver(() =>
        <OrderedList content={createNamesList()}/>
    )
}

UsersList.propTypes = {
    name: PropTypes.string
};

UsersList.defaultProps = {
    name: ""
};
