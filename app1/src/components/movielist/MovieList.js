import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import { onLoadMoviesListAction, redirectToAction } from '../../redux/actions'
import './css/MovieList.css'
import MovieCard from '../moviecard/MovieCard'

function MovieList() {
  const dispatch = useDispatch()
  const movieReduxList = useSelector(state => state.filter.movies)
  const totalAmount = useSelector(state => state.filter.count)
  const filterState = useSelector(state => state.filter.query)
  const error = useSelector(state => state.filter.error)

  useEffect(() => {
    dispatch(onLoadMoviesListAction(filterState))
  }, [dispatch]);

  if(!error && totalAmount === 0) {
    dispatch(redirectToAction(true))
    return <Redirect to={'/no-movie-found'} />
  }

  return (
    <>
      <div className="total container"> {totalAmount ? totalAmount : 'No'} movies found</div>
      <div className="main-content container">
        {movieReduxList.map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  )
}

export default MovieList
