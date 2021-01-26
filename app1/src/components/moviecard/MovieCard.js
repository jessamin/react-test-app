import React from 'react'
import { Link } from 'react-router-dom'
import './css/MovieCard.css'
import MovieCardEditControls from './MovieCardEditControls'
import MovieCardImg from '../MovieCardImg'

function MovieCard({movie}) {
  const link = '/film/' + movie.id
  return (
    <div className='movie-card' data-testid='movie-card'>
      <MovieCardEditControls movieId={movie.id} />
      <MovieCardImg movie={movie}/>
      <div className='group'>
        <Link to={link} className='nav-link'>{movie.title}</Link>
        <div className='vote'>{movie.vote_average}</div>
        {movie.release_date ? <div className='year'>{(new Date(movie.release_date).getFullYear())}</div> : ''}
      </div>
      <div className='genres'>{movie.genres ? movie.genres.map(genre => genre).join(', ') : ''}</div>
    </div>
  )
}

export default MovieCard
