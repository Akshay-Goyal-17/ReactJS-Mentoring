import React from 'react';
import TabControl from './../tabControl/TabControl';
import TabItem from './../tabControl/TabItem';
import SelectControl from './../selectControl/SelectControl';
import MovieCard from './movieCard/MovieCard';
import './MovieCardControl.less'

const movieCount = 39;
const tabItems = [
    {
        id: 1,
        title: "ALL"
    },
    {
        id: 2,
        title: "DOCUMENTARY"
    },
    {
        id: 3,
        title: "COMEDY"
    },
    {
        id: 4,
        title: "HORROR"
    },
    {
        id: 5,
        title: "CRIME"
    }
];

const movieList = 
[
    {
        id: 1,
        image: "./images/posters/1.jpg",
        title: "Pulp Fiction",
        year: 2004,
        genre: "Action & Adventure"
    },
    {
        id: 2,
        image: "./images/posters/2.jpg",
        title: "Bohemian Rhapsody",
        year: 2003,
        genre: "Drama, Biography, Music"
    },
    {
        id: 3,
        image: "./images/posters/3.jpg",
        title: "Kill Bill: Vol 2",
        year: 1994,
        genre: "Oscar winning Movie"
    },
    {
        id: 4,
        image: "./images/posters/4.jpg",
        title: "Avengers: Infinity War",
        year: 2004,
        genre: "Action & Adventure"
    },
    {
        id: 5,
        image: "./images/posters/5.jpg",
        title: "Inception",
        year: 2003,
        genre: "Action & Adventure"
    },
    {
        id: 6,
        image: "./images/posters/6.jpg",
        title: "Reservoir Dogs",
        year: 1994,
        genre: "Oscar winning Movie"
    }

];

const movieCardList = movieList.map((movie)=>
    <MovieCard key={movie.id} id={movie.id} imgUri={movie.image} title={movie.title} year={movie.year} genre={movie.genre} />);

export default function MovieCardContainer(){
    return(
        <div className="movie-list-container clearfix">
            <TabControl tabItems={tabItems}>
                <SelectControl>
                    <option>RELEASE DATE</option>
                    <option>NAME</option>
                </SelectControl>
                <TabItem id={0} class="right-align tab-item tab-item-not-clickable" title="SORT BY"/>
            </TabControl>
            <>
                <span className="movie-count movie-count-number">{movieCount}</span>
                <span className="movie-count movie-count-message"> movies found</span>
            </>
            <div className="container movie-list-fix">
                {movieCardList}
            </div>
        </div>
    );
}