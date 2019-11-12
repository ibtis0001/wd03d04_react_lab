mport React from 'react'

const FilmDetails = (props) => {
    // let allFilms = props.TMDB;
    // var films = allFilms.films.map( film => film.title)
    console.log(props.current);
    // const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.films.backdrop_path}`
    // const posterUrl = `https://image.tmdb.org/t/p/w780/${props.films.poster_path}`

    let details = () => {
        if (props.current == undefined) {
            console.log("here");

            return <div className="film-detail">
                    <p>
                        <i className="material-icons">subscriptions</i>
                        <span>No film selected</span>
                    </p>
                </div>
        }else {
            return <div className="film-details is-hydrated">
            <figure className="film-backdrop">
                <img src={`https://image.tmdb.org/t/p/w1280/${props.current.backdrop_path}`} alt="" />
                <h1 className="film-title">{props.current.title}</h1>
            </figure>
            <div className="film-meta">
                <h2 className="film-tagline">{props.current.tagline}</h2>
                <p className="film-detail-overview">
                    <img src={`https://image.tmdb.org/t/p/w780/${props.current.poster_path}`} className="film-detail-poster" alt={props.current.title} />
                    {props.current.overview}
                </p>
            </div>
        </div>
        }
    }
    return (
        <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
          <h1 className="section-title">Details</h1>
          {details}
        </div>
    )
      )
}


export default FilmDetails