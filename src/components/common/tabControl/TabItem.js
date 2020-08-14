import React from 'react';
import PropTypes from 'prop-types';
import './TabItem.less';

export default function TabItem(props){
    var classes = props.class;

    if (props.enabled)
        classes += " tab-item-enabled";

    return(
        <div key={props.id} className={classes}>{props.title}</div>
    );
}

TabItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    enabled: PropTypes.bool,
    class: PropTypes.string,
}