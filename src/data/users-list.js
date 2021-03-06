import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {useObserver} from "mobx-react";
import {UsersStore} from "../stores/user-store"
import {OrderedList} from "../components/list/ordered-list";

export function UsersList({name}) {
    const usersStore = UsersStore();

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
