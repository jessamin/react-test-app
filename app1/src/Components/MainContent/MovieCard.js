import React from 'react'
import './css/MovieCard.css'
import DetailsContent from '../MovieDetails/DetailsContent';

function MovieCard(props) {
  return (
    <div className="movie-card">
      <DetailsContent {...props} />
      <button className="edit-controls">...</button>
      <h3>{props.title}</h3>
      <p>{props.genre}</p>
      <p>{props.date}</p>
      <img src={process.env.PUBLIC_URL + '/img/' + props.image} width="250px"/>
    </div>
  )
}

export default MovieCard