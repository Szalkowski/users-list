import React from "react";
import PropTypes from "prop-types";
import "./main.scss";

export function Main({children}) {
    return(
        <main>
            {children}
        </main>
    )
}

Main.propTypes = {
    children: PropTypes.node.isRequired
};
