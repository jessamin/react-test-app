import React from 'react'
import { Redirect } from 'react-router-dom'

import './css/MovieList.css'
import MovieCard from '../moviecard/MovieCard'
import useMovieListDispatch from "../customhooks/useMovieListDispatch";

function MovieList() {
  const { movieReduxList, totalAmount, error } = useMovieListDispatch()

  if(error || totalAmount === 0) {
    return <Redirect to={'/no-movie-found'} />
  }

  let result = null
  if(totalAmount > 0) {
    result = movieReduxList.map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ))
  }

  return (
    <>
      <div className="total container"> {totalAmount ? totalAmount : 'No'} movies found</div>
      <div className="main-content container">
        {result}
      </div>
    </>
  )
}

export default MovieList
