import React from 'react'
import './css/MovieCard.css'
import MovieCardEditControls from './MovieCardEditControls'


function MovieCard({movie}) {
  return (
    <div className="movie-card"
         key={movie.id}>
      <MovieCardEditControls mid={movie.id}/>
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
      <p>{movie.release_date}</p>
      <img alt={movie.title} src={movie.poster_path} width="250px"/>
    </div>
  )
}

export default MovieCard