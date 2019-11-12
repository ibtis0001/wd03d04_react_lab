

import React, { Component } from 'react'
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB'
import Axios from "axios"

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)

  }

  handleDetailsClick = (film) => {
    console.log("Fetching details for " + film.title);
    // const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}`
    Axios.get(`https://api.themoviedb.org/3/movie/${film.id}?api_key=6828febc97923cd2bf72aa77211b30b6`)
    .then((response) => {
      this.setState(this.current = response.data)
      // console.log(this.current)
    })

  }
  handleFaveToggle = (film) =>{

    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
     if (filmIndex < 0){
      faves.push(film)
      console.log (`Adding ${film.title} to faves...`)
      console.log(faves)
    }
    else
    {
      faves.splice(filmIndex,1)
      console.log (`Removing ${film.title} from faves...`)
      console.log(faves)
    }

    this.setState({faves});
  }  

  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing TMDB={TMDB.films} films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} />
          <FilmDetails TMDB={TMDB.films} current={this.state.current} />
          <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} onDetailsClick={this.handleDetailsClick}/>
          <FilmDetails current={this.current} />
        </div>
      </div>
    )
  }
}










