import {ACTION} from './types'
import {
  fetchMoviesListApi,
  addMovieApi,
  fetchMovieApi,
  saveMovieApi,
  deleteMovieApi
} from './api'

// Main fetch function.
function fetchMoviesListAction(action, filter) {
  return async dispatch => {
    dispatch({
      type: action,
      payload: filter
    })

    const uriPath = Object.entries(filter)
      .filter(([key, value]) => value !== false && value !== '')
      .map(([key, value]) => {
        return value ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}` : ''
      })
      .join("&")

    try {
      const response = await fetchMoviesListApi(uriPath)
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
export function AddMovieAction(movie, filterQuery) {
  return async (dispatch) => {
    dispatch(addMovieInit(movie))

    try {
      const response = await addMovieApi(movie)
      dispatch(addMovieSuccess(response.data))
      dispatch(fetchMoviesListAction(ACTION.FETCH_MOVIES_INIT, filterQuery))
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
export function fetchMovieAction(movieId) {
  return async (dispatch) => {
    dispatch(fetchMovieInitAction(movieId))

    try {
      const response = await fetchMovieApi(movieId)
      dispatch(fetchMovieSuccessAction(response.data))
    } catch (error) {
      dispatch(fetchMovieErrorAction(error))
      throw error;
    }
  }
}

export const fetchMovieInitAction = movieId => ({
  type: ACTION.FETCH_MOVIE_INIT,
  payload: movieId
})

export const fetchMovieSuccessAction = movie => ({
  type: ACTION.FETCH_MOVIE_SUCCESS,
  payload: movie
})

export const fetchMovieErrorAction = error => ({
  type: ACTION.FETCH_MOVIE_ERROR,
  payload: error
})


// Edit movie. Submit
export function editMovieAction(movie, filterQuery) {
  return async (dispatch) => {
    dispatch(addMovieInit(movie))

    try {
      const response = await saveMovieApi(movie)
      dispatch(editMovieSuccess(response.data))
      dispatch(fetchMoviesListAction(ACTION.FETCH_MOVIES_INIT, filterQuery))
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
export function deleteMovieAction(movieId, filter) {
  return async (dispatch) => {
    dispatch(deleteMovieInit(movieId, filter))

    try {
      const response = await deleteMovieApi(movieId)
      dispatch(deleteMovieSuccess(response.data))
      dispatch(fetchMoviesListAction(ACTION.SORT_BY, filter))
    } catch (error) {
      dispatch(deleteMovieError(error))
      throw error;
    }
  }
}

export const deleteMovieInit = (movieId, filter) => ({
  type: ACTION.DELETE_MOVIE_INIT,
  payload: movieId,
  filter: filter
})

export const deleteMovieSuccess = movieId => ({
  type: ACTION.DELETE_MOVIE_SUCCESS,
  payload: movieId
})

export const deleteMovieError = error => ({
  type: ACTION.DELETE_MOVIE_ERROR,
  payload: error
})