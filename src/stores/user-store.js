import {useLocalStore} from "mobx-react"
import {fetchData} from "../api/fetch";

export const UsersStore = () => {
    const localStore = useLocalStore(() => ({
        usersList: [],
        filteredList: [],

        async loadList() {
            localStore.usersList = await fetchData("https://jsonplaceholder.typicode.com/users");
            localStore.filteredList = localStore.usersList;
        },

        filterUsersByName(name) {
            const regex = new RegExp(name.toLowerCase());
            localStore.filteredList = localStore.usersList.filter(user =>
                regex.test(user.name.toLowerCase())
            );
        }
    }));

    return localStore;
};
