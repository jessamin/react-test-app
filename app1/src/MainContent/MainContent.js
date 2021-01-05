import React, { useEffect } from 'react'
import MovieCard from './MovieCard';
import { fetchMoviesAction } from '../redux/actions'
import { useDispatch, useSelector } from "react-redux";

function MainContent() {
  const dispatch = useDispatch()
  const movieReduxList = useSelector((state) => {
    return state.movies.movies
  })

  useEffect(() => {
    dispatch(fetchMoviesAction())
  }, [dispatch]);

  return (
    <div className="main-content">
      {movieReduxList.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          genres={movie.genres}
          budget={movie.budget}
          overview={movie.overview}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          revenue={movie.revenue}
          runtime={movie.runtime}
          tagline={movie.tagline}
          vote_average={movie.vote_average}
          vote_count={movie.vote_count}
        />
      ))}
    </div>
  )
}

export default MainContent