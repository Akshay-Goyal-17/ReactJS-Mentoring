import React from 'react';
import PropTypes from 'prop-types';
import './TabItem.less';

export default function TabItem(props){
    return(
        <div key={props.id} className={props.class}>{props.title}</div>
    );
}

TabItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    class: PropTypes.string,
}