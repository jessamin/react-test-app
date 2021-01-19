import React from 'react'
import './css/MovieCard.css'
import MovieCardEditControls from './MovieCardEditControls'
import MovieCardImg from "./MovieCardImg";

function MovieCard({movie}) {

  return (
    <div className="movie-card">
      <MovieCardEditControls movieId={movie.id} />
      <h3>{movie.title}</h3>
      <p>{movie.vote_average}</p>
      <p>{movie.genres.map(genre => genre).join(", ")}</p>
      <p>{movie.release_date}</p>
      <MovieCardImg movie={movie}/>
    </div>
  )
}

export default MovieCard