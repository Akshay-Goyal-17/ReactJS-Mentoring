import React from "react";
import './SelectControl.less';

export default function SelectControl(props) {
    return (
        <div className="select-box right-align">
            <select>{props.children}</select>
        </div>
    );
}