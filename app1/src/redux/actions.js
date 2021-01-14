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
  return async dispatch => {
    dispatch(fetchMoviesActionInit());

    try {
      const response = await axios.get(`http://localhost:4000/movies`);
      dispatch(fetchMoviesActionSuccess(response.data.data))
    } catch (error) {
      dispatch(fetchMoviesActionError(error))
      throw error;
    }
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
  return async (dispatch) => {
    dispatch(addMovieInit(movie))

    try {
      const response = await axios.post('http://localhost:4000/movies', movie)
      dispatch(addMovieSuccess(response.data))
    } catch (error) {
      dispatch(addMovieError(error))
      throw error;
    }
  }
}

export const addMovieValidation = movie => ({
  type: ACTION.ADD_MOVIE_VALIDATION,
  payload: movie
})

export const addMovieInit = movie => ({
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


// Edit movie. Fetch.
export function editMovieFetchAction(id) {
  return async (dispatch) => {
    dispatch(editMovieFetchInit())

    try {
      const response = await axios.get(`http://localhost:4000/movies/${id}`);
      dispatch(editMovieFetchSuccess(response.data))
    } catch (error) {
      dispatch(editMovieFetchError(error))
      throw error;
    }
  }
}

export const editMovieFetchInit = id => ({
  type: ACTION.EDIT_MOVIE_FETCH_INIT,
  payload: id
})

export const editMovieFetchSuccess = movie => ({
  type: ACTION.EDIT_MOVIE_FETCH_SUCCESS,
  payload: movie
})

export const editMovieFetchError = error => ({
  type: ACTION.EDIT_MOVIE_FETCH_ERROR,
  payload: error
})


// Edit movie. Submit
export function editMovieAction(movie) {
  return async (dispatch) => {
    dispatch(addMovieInit(movie))

    try {
      const response = await axios.put('http://localhost:4000/movies', movie);
      dispatch(editMovieSuccess(response.data))
    } catch (error) {
      dispatch(editMovieError(error))
      throw error;
    }
  }
}

export const editMovieInit = movie => ({
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
  return async (dispatch) => {
    dispatch(deleteMovieInit())

    try {
      const response = await axios.delete(`http://localhost:4000/movies/${id}`)
      dispatch(deleteMovieSuccess(response.data))
    } catch (error) {
      dispatch(deleteMovieError(error))
      throw error;
    }
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

