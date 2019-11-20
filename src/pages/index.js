import React, {Fragment, useState} from "react";
import {Header} from "../sections/header";
import {Main} from "../sections/main";
import {TextInput} from "../components/input/text-input";
import {UsersList} from "../data/users-list";

export function MainPage() {
    const [updateValue, setUpdateValue] = useState("");
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
                               onChange={value => setUpdateValue(value)}
                    />
                    <UsersList name={updateValue}/>
                </div>
            </Main>
        </Fragment>
    )
}
