import React from 'react';
import PropTypes from 'prop-types';

export default function MovieCard({movie}){
    return(
        <article>
            <img src={movie.imgSrc} alt="image"/>
            <span>{movie.title}</span><span>{movie.releaseDate}</span>
            <p>{movie.genre}</p>
        </article>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        imgSrc: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        releaseDate: PropTypes.number.isRequired,
    }).isRequired,
};