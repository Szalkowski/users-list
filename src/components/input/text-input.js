import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

export function TextInput({type, classname, id, name, placeholder}) {
    return (
        <input className={`input input__text ${classname}`}
               id={id}
               type={type}
               name={name}
               placeholder={placeholder}
        />
    )
}

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password"]).isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

TextInput.defaultProps = {
    placeholder: ""
};
