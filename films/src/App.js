import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import Fave from './Fave'
import TMDB from './TMDB'
var data = TMDB

export default class App extends Component {
  constructor(){
    super();
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsClick=this.handleDetailsClick.bind(this);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
  }

  handleDetailsClick(film){
    console.log("added "+film.title);

this.setState({current : film});
console.log("jjjjjjjjjjj");

// console.log(this.state.current);
}
 

  handleFaveToggle(films){
    const faves = this.state.faves.slice();
    const filmsIndex = faves.indexOf(films);
    if(filmsIndex<0){
    faves.push(films);
    console.log(`Adding ${films.title} to faves...`)
    }
    else{
      faves.splice(filmsIndex, 1) 
      console.log(`Removing ${films.title} to faves...`)
    }
    this.setState({faves});
  }

  


  render() {
    
    if(this.state.current.length != 0){
      console.log(this.state.current.title)
    }

    return (
      <div className="film-library">
        {/* <h1>{data.films[1].title}</h1> */}
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {data.films.map(item=> {return <FilmListing  handleDetailsClick={this.handleDetailsClick} data={item} isFave={this.state.faves.includes(item)} faves={this.state.faves} films={this.state.films} onFaveToggle={()=>this.handleFaveToggle(item)} />})}
          </div>

        <FilmDetails data={data} film={this.state.current}/>

      </div>
      
    )
  }
}













