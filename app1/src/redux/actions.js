import {ACTION} from './types'
import axios from './client';

export function initAppAction(movieList) {
  return {
    type: ACTION.FETCH_MOVIES,
    payload: movieList
  }
}

// Fetch movies list.
export function fetchMoviesListAction() {
  return dispatch => {
    dispatch(fetchMoviesActionInit());

    // axios.get(`http://localhost:4000/movies?limit=6`)
    axios.get(`http://localhost:4000/movies`)
      .then(result => {
        dispatch(fetchMoviesActionSuccess(result.data.data))
      })
      .catch(error => {
        dispatch(fetchMoviesActionError())
      })
  }
}

export const fetchMoviesActionInit = () => ({
  type: ACTION.FETCH_MOVIES_INIT
})

export const fetchMoviesActionSuccess = movies => ({
  type: ACTION.FETCH_MOVIES_SUCCESS,
  payload: movies
})
export const fetchMoviesActionError = () => ({
  type: ACTION.FETCH_MOVIES_ERROR
})

// Add movie.
export function AddMovieAction(movie) {
  return (dispatch) => {
    dispatch(addMovieInit(movie))

    axios.post('http://localhost:4000/movies', movie)
      .then(respuesta => {
        dispatch(addMovieSuccess(movie))
      })
      .catch(error => {
        dispatch(addMovieError(error))
      })
  }
}

export const addMovieValidation = (movie) => ({
  type: ACTION.ADD_MOVIE_VALIDATION,
  payload: movie
})

export const addMovieInit = (movie) => ({
  type: ACTION.ADD_MOVIE_INIT,
  payload: movie
})

export const addMovieSuccess = movie => ({
  type: ACTION.ADD_MOVIE_SUCCESS,
  payload: movie
})

export const addMovieError = error => ({
  type: ACTION.ADD_MOVIE_ERROR,
  payload: error
})


// Edit movie.
export function editMovieAction(movie) {
  return (dispatch) => {
    dispatch(addMovieInit(movie))

    axios.put('http://localhost:4000/movies', movie)
      .then(result => {
        dispatch(editMovieSuccess(result.data))
      })
      .catch(error => {
        dispatch(editMovieError(error))
      })
  }
}

export const editMovieInit = (movie) => ({
  type: ACTION.ADD_MOVIE_INIT,
  payload: movie
})

export const editMovieSuccess = movie => ({
  type: ACTION.ADD_MOVIE_SUCCESS,
  payload: movie
})

export const editMovieError = error => ({
  type: ACTION.ADD_MOVIE_ERROR,
  payload: error
})


// Delete movie.
export function deleteMovieAction(id) {
  return (dispatch) => {
    dispatch(deleteMovieInit())

    axios.delete(`http://localhost:4000/movies/${id}`)
      .then(result => {
        dispatch(deleteMovieSuccess(id))
      })
      .catch(error => {
        dispatch(deleteMovieError())
      })
  }
}

export const deleteMovieInit = () => ({
  type: ACTION.DELETE_MOVIE_INIT
})

export const deleteMovieSuccess = id => ({
  type: ACTION.DELETE_MOVIE_SUCCESS,
  payload: id
})

export const deleteMovieError = () => ({
  type: ACTION.DELETE_MOVIE_ERROR
})

