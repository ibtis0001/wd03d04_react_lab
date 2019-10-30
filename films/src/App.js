import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import Fave from './Fave'
import TMDB from './TMDB'
var data = TMDB

export default class App extends Component {
  
  state = {
    films: TMDB.films,
    faves: [],
    current: {}
  }

  handleFaveToggle(){
    const faves = faves.slice() 
    const filmIndex = faves.indexOf()
        this.handleFaveToggle = this.handleFaveToggle.bind(this)
        // console.log(filmIndex)
  }

  render() {
    return (
      <div className="film-library">
        {/* <h1>{data.films[1].title}</h1> */}
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {data.films.map(item=> {return <FilmListing data={item} faves={this.state.current} films={this.state.films} />})}
          </div>

        <FilmDetails data={data} film={this.state.current} />

      </div>
      
    )
  }
}













