import React, { useEffect } from 'react'
import MovieCard from './MovieCard';
import { onLoadMoviesListAction } from '../redux/actions'
import { useDispatch, useSelector } from "react-redux";

function MainContent() {
  const dispatch = useDispatch()
  const movieReduxList = useSelector(state => state.filter.movies)
  const totalAmount = useSelector(state => state.filter.count)
  const filterState = useSelector(state => state.filter.query)

  useEffect(() => {
    dispatch(onLoadMoviesListAction(filterState))
  }, [dispatch]);

  return (
    <>
      <span> {totalAmount ? totalAmount : 'No'} movies found</span>
      <div className="main-content">
        {movieReduxList.map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  )
}

export default MainContent