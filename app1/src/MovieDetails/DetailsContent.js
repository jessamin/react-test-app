import React from 'react'
import './css/MovieDetails.css'

function DetailsContent(props) {
  return (
    <div className="movie-details" key={props.id}>
      <img src={process.env.PUBLIC_URL + '/img/' + props.image} width="250px"/>
      <h1>{props.title}</h1>
      <div>{props.rating}</div>
      <div>{props.reward}</div>
      <p>{props.date}</p>
      <p>{props.duration}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default DetailsContent