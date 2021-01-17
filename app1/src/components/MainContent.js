import React, { useEffect } from 'react'
import MovieCard from './MovieCard';
import { fetchMoviesListAction } from '../redux/actions'
import { useDispatch, useSelector } from "react-redux";

function MainContent() {
  const dispatch = useDispatch()
  const movieReduxList = useSelector(state => state.movies.movies)

  useEffect(() => {
    dispatch(fetchMoviesListAction())
  }, [dispatch]);

  return (
    <div className="main-content">
      {movieReduxList.map(movie => (
        <MovieCard movie={movie} />
      ))}
    </div>
  )
}

export default MainContent