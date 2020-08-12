import React from 'react';

export default function MovieCardDetails({movie}){
    return(
        <article>
            <image src={movie.imgSrc}/>
            <span>{movie.title}</span><span>{movie.rating}</span>
            <p>{movie.genre}</p>
            <span>{movie.releaseDate}</span><span>{movie.duration} min</span>
            <p>{movie.description}</p>
        </article>
    )
}

MovieCardDetails.propTypes = {
    movie: PropTypes.shape({
        imgSrc: PropTypes.string,
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        releaseDate: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }),
};