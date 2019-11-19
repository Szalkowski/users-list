import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

export function TextInput({classname, id, name, placeholder}) {
    return (
        <input className={`input input__text ${classname}`}
               id={id}
               type="text"
               name={name}
               placeholder={placeholder}
        />
    )
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

TextInput.defaultProps = {
    placeholder: ""
};
