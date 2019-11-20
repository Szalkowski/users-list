import React, {Fragment} from "react";
import {Header} from "../sections/header";
import {Main} from "../sections/main";
import {TextInput} from "../components/input/text-input";
import {UsersList} from "../data/users-list";
import {OrderedList} from "../components/list/ordered-list";

export function MainPage() {
    return (
        <Fragment>
            <Header pageTitle="Users list"/>
            <Main>
                <div className="container">
                    <TextInput type="text"
                               classname="margin-center"
                               id="name-filter"
                               name="filter"
                               placeholder="Search by user name..."
                    />
                    <OrderedList content={UsersList()}/>
                </div>
            </Main>
        </Fragment>
    )
}
