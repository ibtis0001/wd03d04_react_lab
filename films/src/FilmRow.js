import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave';
export default function FilmRow(props) {
    var film = props.title;
    var date = new Date(props.date);

    var handleDetailsClick = (film) =>{
        console.log("Fetching details for " + film);
    }
    return (
        <div className="film-row" onClick={() => handleDetailsClick(film)}>
            <FilmPoster path = {props.path}/>
            <div className="film-summary">
                <h1 className=".film-detail-poster">{film}</h1>
                <p>{date.getFullYear()}</p>
            </div>            
            <Fave />
            <Fave onFaveToggle= {() => props.onFaveToggle(props)} isFave={props.isFave}/>
        </div>
    )
}