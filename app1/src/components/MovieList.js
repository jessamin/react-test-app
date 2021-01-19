import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { onLoadMoviesListAction } from '../redux/actions'

import './css/MovieList.css'

import MovieCard from './MovieCard'

function MovieList() {
  const dispatch = useDispatch()
  const movieReduxList = useSelector(state => state.filter.movies)
  const totalAmount = useSelector(state => state.filter.count)
  const filterState = useSelector(state => state.filter.query)

  useEffect(() => {
    dispatch(onLoadMoviesListAction(filterState))
  }, [dispatch]);

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