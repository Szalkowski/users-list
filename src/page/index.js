import React, {Fragment} from "react";
import {Header} from "../sections/header";
import {Main} from "../sections/main";
import {TextInput} from "../components/input/text-input";

export function MainPage() {
    return (
        <Fragment>
            <Header pageTitle="Users list"/>
            <Main>
                <div className="container">
                    <TextInput id="name-filter"
                               classname="centered"
                               name="filter"
                               placeholder="Search by user name..."
                    />
                </div>
            </Main>
        </Fragment>
    )
}
