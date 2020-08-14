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

function onShowContextMenuClicked() {
    // remove hidden class from ContextMenu div
}

export default function MovieCard(props) {
    var id = "movie_" + props.movie.id;

    return (
        <div id={id} className="movie-poster-container left-align clearfix">
            <img className="movie-poster-image" src={props.movie.image}/>
            <div className="movie-poster-more" onClick={() => onShowContextMenuClicked()}>&#8226; &#8226; &#8226;</div>
            <div className="movie-poster-info">
                <div className="left-align">
                    <p className="movie-poster-info-title">{props.movie.title}</p>
                    <p>{props.movie.genre}</p>
                </div>
                <div className="right-align movie-poster-info-year">{props.movie.year}</div>
            </div> 
        </div>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
}