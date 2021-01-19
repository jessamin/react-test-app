import React from 'react'
import {Link} from "react-router-dom"
import './css/MovieCard.css'
import MovieCardEditControls from './MovieCardEditControls'
import MovieCardImg from "./MovieCardImg"

function MovieCard({movie}) {
  const link = '/film/' + movie.id
  return (
    <div className="movie-card">
      <MovieCardEditControls movieId={movie.id} />
      <h3><Link to={link} className='nav-link'>{movie.title}</Link></h3>
      <p>{movie.vote_average}</p>
      <p>{movie.genres ? movie.genres.map(genre => genre).join(', ') : ''}</p>
      <p>{movie.release_date}</p>
      <MovieCardImg movie={movie}/>
    </div>
  )
}

export default MovieCard