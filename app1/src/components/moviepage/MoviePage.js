import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux"
import { fetchMovieAction } from "../../redux/actions"

import useClassAndModuleSet from "../customhooks/useClassAndModuleSet";
import './css/MoviePage.css'

import MovieCardImg from "../MovieCardImg";
import MovieList from "../movielist/MovieList";
import MenuPanel from "../menu/MenuPanel";
import Footer from "../footer/Footer";
import ShortHeader from "../header/ShortHeader";
import { useAlert } from "react-alert";

function MoviePage() {
  let { movieId } = useParams()
  const dispatch = useDispatch()
  const alert = useAlert()
  const movie = useSelector(state => state.movies.movie)
  const error = useSelector((state) => state.movies.error)
  const errorMsg = useSelector((state) => state.movies.msg)

  useClassAndModuleSet('movie', '/film/' + movieId, dispatch)

  useEffect(() => {
    dispatch(fetchMovieAction(movieId))
  }, [movieId])

  if(error) {
    alert.error(errorMsg.toString())
  }

  return (
    <>
      <div className='movie-area container'>
        <ShortHeader />
        <div className='content-wrapper'>
          <MovieCardImg movie={movie}/>
          <div className='content'>
            <div className='title'>
              <h1>{movie.title}</h1>
              {movie.vote_average ? <span className='vote'>{movie.vote_average}</span> : ''}
            </div>
            {movie.tagline ? <div className='tagline'>{movie.tagline}</div> : ''}
            <div className='date'>
              {movie.release_date ? <span>{(new Date(movie.release_date).getFullYear())}</span> : ''}
              {movie.runtime ? <span>{movie.runtime} min</span> : ''}
            </div>
            <div className='overview'>{movie.overview}</div>
          </div>
        </div>
      </div>
      <MenuPanel />
      <MovieList />
      <Footer />
    </>
  )
}

export default MoviePage
