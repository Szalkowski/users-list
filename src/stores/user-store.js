import {useLocalStore} from "mobx-react"
import {fetchData} from "../api/fetch";

export const UsersStore = () => {
    const store = useLocalStore(() => ({
        usersList: [],
        filteredList: [],

        async loadList() {
            store.usersList = await fetchData("https://jsonplaceholder.typicode.com/users");
            store.filteredList = store.usersList;
        },

        filterUsersByName(name) {
            const regex = new RegExp(name.toLowerCase());
            store.filteredList = store.usersList.filter(user =>
                regex.test(user.name.toLowerCase())
            );
        }
    }));

    return store;
};
