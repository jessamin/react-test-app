import React from 'react'

function MovieCardImg({movie}) {

  return (
    <img
      alt={movie.title}
      src={movie.poster_path}
      onError={(e) => {
        e.target.onerror = null
        e.target.src = "/img/default.png"
      }}
      width="250px" />
  )
}

export default MovieCardImg