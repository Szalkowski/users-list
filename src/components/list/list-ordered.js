import React from "react";
import "./lists.scss";

export function OrderedList({content}) {
    return (
        <ol className="list list__ordered">
            {content}
        </ol>
    )
}
