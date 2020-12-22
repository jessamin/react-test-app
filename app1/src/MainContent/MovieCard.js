import React from 'react'
import './css/MovieCard.css'
import MovieCardEditControls from './MovieCardEditControls'


function MovieCard(props) {
  return (
    <div className="movie-card"
         key={props.id}>
      <MovieCardEditControls />
      <h3>{props.title}</h3>
      <p>{props.genre}</p>
      <p>{props.release_date}</p>
      <img alt={props.title} src={props.poster_path} width="250px"/>
    </div>
  )
}

export default MovieCard