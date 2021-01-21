import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux"
import { fetchMovieAction, setCurrentModuleAction } from "../redux/actions";

import './css/Movie.css'

import MovieCardImg from "./MovieCardImg";
import MovieList from "./MovieList";
import MenuPanel from "./MenuPanel";

function Movie() {
  let { movieId } = useParams()
  const dispatch = useDispatch()
  const movie = useSelector(state => state.movies.movie)
  const error = useSelector((state) => state.movies.error)
  const errorMsg = useSelector((state) => state.movies.msg)

  useEffect(() => {
    document.body.classList = ['page-film']
    dispatch(setCurrentModuleAction('movie', '/film/' + movieId))
    dispatch(fetchMovieAction(movieId))
  }, [movieId])

  return (
    <>
      <div className='movie-area container'>
        {error ?
          <div id='movie-message-area'>{errorMsg ? errorMsg : null}</div>
          :
          <>
            <MovieCardImg movie={movie}/>
            <div className='content'>
              <div className='title'>
                <h1>{movie.title}</h1>
                {movie.vote_average ? <span className='vote'>{movie.vote_average}</span> : ''}
              </div>
              {movie.tagline ? <div>{movie.tagline}</div> : ''}
              <div className='date'>
                {movie.release_date ? <p>{(new Date(movie.release_date).getFullYear())}</p> : ''}
                {movie.runtime ? <p>{movie.runtime} min</p> : ''}
              </div>
              <div className='overview'>{movie.overview}</div>
            </div>
          </>
        }
      </div>
      <MenuPanel />
      <MovieList />
    </>
  )
}

export default Movie
