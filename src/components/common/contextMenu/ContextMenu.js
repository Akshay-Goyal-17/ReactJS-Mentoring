import React from "react";
import PropTypes from "prop-types";
import './ContextMenu.less';

export default function ContextMenu (props) {
    var items = props.items;
    var itemList = items.map((item)=>
        <div className="context-menu-item" key={item.id} >{item.text}</div>);

    return (
        <div className="context-menu-container hidden">
            <span className="context-menu-close">x</span>
            {itemList}
        </div>
    );
}
  
ContextMenu.propTypes = {
    items: PropTypes.array,
}