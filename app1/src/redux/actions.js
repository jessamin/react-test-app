import {ACTION} from './types'
import axios, { apiUrl } from './client'

// Main fetch function.
function fetchMoviesListAction(action, filter) {
  return async dispatch => {
    dispatch({
      type: action,
      payload: filter
    })

    const uriPath = Object.entries(filter)
      .filter(([key, value]) => value !== false || value !== '')
      .map(([key, value]) => {
        return value ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}` : ''
      })
      .join("&")

    try {
      const response = await axios.get(apiUrl + uriPath);
      dispatch(fetchMoviesActionSuccess(response.data))
    } catch (error) {
      dispatch(fetchMoviesActionError(error))
      throw error;
    }
  }
}

// Fetch movies list.
export function onLoadMoviesListAction(filter) {
  return fetchMoviesListAction(ACTION.FETCH_MOVIES_INIT, filter)
}

export function sortByAction(filter) {
  return fetchMoviesListAction(
    ACTION.SORT_BY,
    filter)
}

export function filterAction(filter) {
  return fetchMoviesListAction(
    ACTION.FILTER_BY,
    filter)
}

export function searchAction(filter) {
  return fetchMoviesListAction(
    ACTION.SEARCH,
    filter)
}

export const fetchMoviesActionSuccess = movies => ({
  type: ACTION.FETCH_MOVIES_SUCCESS,
  payload: movies.data,
  count: movies.totalAmount
})

export const fetchMoviesActionError = error => ({
  type: ACTION.FETCH_MOVIES_ERROR,
  payload: error
})


// Add movie.
export function AddMovieAction(movie) {
  return async (dispatch) => {
    dispatch(addMovieInit(movie))

    try {
      const response = await axios.post(apiUrl, movie)
      dispatch(addMovieSuccess(response.data))
      dispatch(fetchMoviesListAction())
    } catch (error) {
      dispatch(addMovieError(error))
      throw error;
    }
  }
}

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
      const response = await axios.get(`${apiUrl}/${id}`);
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
      const response = await axios.put(apiUrl, movie);
      dispatch(editMovieSuccess(response.data))
      dispatch(fetchMoviesListAction())
    } catch (error) {
      dispatch(editMovieError(error))
      throw error;
    }
  }
}

export const editMovieInit = movie => ({
  type: ACTION.EDIT_MOVIE_INIT,
  payload: movie
})

export const editMovieSuccess = movie => ({
  type: ACTION.EDIT_MOVIE_SUCCESS,
  payload: movie
})

export const editMovieError = error => ({
  type: ACTION.EDIT_MOVIE_ERROR,
  payload: error
})


// Delete movie.
export function deleteMovieAction(id) {
  return async (dispatch) => {
    dispatch(deleteMovieInit())

    try {
      const response = await axios.delete(`${apiUrl}/${id}`)
      dispatch(deleteMovieSuccess(response.data))
    } catch (error) {
      dispatch(deleteMovieError(error))
      throw error;
    }
  }
}

export const deleteMovieInit = id => ({
  type: ACTION.DELETE_MOVIE_INIT,
  payload: id
})

export const deleteMovieSuccess = id => ({
  type: ACTION.DELETE_MOVIE_SUCCESS,
  payload: id
})

export const deleteMovieError = error => ({
  type: ACTION.DELETE_MOVIE_ERROR,
  payload: error
})