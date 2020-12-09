import React from 'react'
import image from './img/pulpfiction.png';
import './css/MovieCard.css';


function MovieCard(props) {
  return (
    <div className="movie-card">
      <button className="edit-controls"></button>
      <h3>{props.title}</h3>
      <p>{props.genre}</p>
      <p>{props.date}</p>
      <img src={image} width="250px"/>
    </div>
  )
}

export default MovieCard