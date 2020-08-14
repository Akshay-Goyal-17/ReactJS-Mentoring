import React from "react";
import PropTypes from "prop-types";
import Logo from "../../logo/Logo";
import './MovieCardDetails.less';
import Button from "../../button/Button";

export default function MovieCardDetails(props) {
    return (
        <div className="movie-review-container">
            <div className="clearfix">
                <Logo/>
                <Button title="X" class="btn btn-icon right-align"/>
            </div>
            <div className="clearfix">
                <div className="movie-review-image-container left-align">
                    <img className="movie-review-image" src={props.movie.image}/>
                </div>
                <div className="movie-review-info left-align">
                    <h1 className="movie-review-title">{props.movie.title}</h1>
                    <p className="movie-review-genre">{props.movie.genre}</p>
                    <span className="movie-review-duration">{props.movie.year}</span>
                    <span className="movie-review-duration">{props.movie.duration} min</span>
                    <p className="movie-review-resume">{props.movie.description}</p>
                </div>
            </div>
        </div>
    );
}

MovieCardDetails.propTypes = {
    movie: PropTypes.object.isRequired
};