import React from"react";
import PropTypes from "prop-types";
import './Button.less';

export default function Button (props) {
    return <button className={props.class}>{props.title}</button>;
}

Button.propTypes = {
    title: PropTypes.string,
    class: PropTypes.string
}
