import React from "react";
import PropTypes from "prop-types";
import './ContextMenu.less';

export default function ContextMenu (props) {
    const itemList = props.items.map((item)=>
        <div className="context-menu-item" key={item.id} >{item.text}</div>);

        return (
        <div className="context-menu-container">
            <span className="context-menu-close">x</span>
            {itemList}
        </div>
    );
}
  
ContextMenu.propTypes = {
    items: PropTypes.array,
}