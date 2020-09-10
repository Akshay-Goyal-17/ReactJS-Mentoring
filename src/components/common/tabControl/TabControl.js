import React from 'react';
import PropTypes from "prop-types";
import TabItem from "./TabItem";
import './TabControl.less';

export default function TabControl (props) {
    const itemList = props.tabItems.map((item)=>
        <TabItem key={item.id} id={item.id} enabled={item.enabled} class="left-align tab-item" title={item.title}/>);

    return ( 
        <div className="tab-control clearfix">
            {itemList}
            {props.children}
        </div>
    );
}

TabControl.propTypes = {
    tabItems: PropTypes.array.isRequired,
}