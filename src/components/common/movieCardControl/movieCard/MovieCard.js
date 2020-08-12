import React from 'react';
import PropTypes from 'prop-types';
import ContextMenu from './../../contextMenu/ContextMenu';
import './MovieCard.less';

const contextMenuItems = [
    {
        id: 1,
        text: "Edit"
    },
    {
        id: 2,
        text: "Delete"
    }
];

function showContextMenu() {
    // remove hidden class from ContextMenu div
}

export default function MovieCard(props) {
    var id = "movie_" + props.id;

    return (
        <div id={id} className="movie-poster-container left-align clearfix">
            <img className="movie-poster-image" src={props.imgUri}/>
            <div className="movie-poster-more" onClick={() => showContextMenu()}>&#8226; &#8226; &#8226;</div>
            <ContextMenu items={contextMenuItems}/>
            <div className="movie-poster-info">
                <div className="left-align">
                    <p className="movie-poster-info-title">{props.title}</p>
                    <p>{props.genre}</p>
                </div>
                <div className="right-align movie-poster-info-year">{props.year}</div>
            </div> 
        </div>
    );
}

MovieCard.propTypes = {
    id: PropTypes.number,
    imgUri: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string,
}