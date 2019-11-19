import React from "react";
import {PageTitle} from "../../components/page-title";
import "./header.scss";

export function Header({pageTitle}) {
    return (
        <header className="container">
            <PageTitle title={pageTitle}/>
        </header>
    )
}
