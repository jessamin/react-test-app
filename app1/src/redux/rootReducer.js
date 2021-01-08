import { combineReducers } from "redux"
import { ACTION } from './types'

const rootReducer = combineReducers({
  movies: movieReducer
})

function movieReducer (state = {movies: [], error: true, errorMsg: '', loading: false, movie: {}}, action) {
  switch (action.type) {

    case ACTION.FETCH_MOVIES_INIT:
      return {
        ...state,
        error: null
      }
    case ACTION.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        error: null
      }
    case ACTION.FETCH_MOVIES_ERROR:
      return {
        ...state,
        error: true,
      }


    case ACTION.ADD_MOVIE_INIT:
      return {
        ...state,
        error: null,
      }
    case ACTION.ADD_MOVIE_SUCCESS:
      return {
        ...state,
        error: null,
        movies: [...state.movies, action.payload]
      }
    case ACTION.ADD_MOVIE_ERROR:
      return {
        ...state,
        error: true,
        errorMsg: action.payload
      }


    case ACTION.EDIT_MOVIE_INIT:
      return {
        ...state,
        error: null
      }
    case ACTION.EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        error: null,
        movie: action.payload
      }
    case ACTION.EDIT_MOVIE_ERROR:
      return {
        ...state,
        error: true
      }


    case ACTION.DELETE_MOVIE_INIT:
      return {
        ...state,
        error: null
      }
    case ACTION.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.filter( movie => movie.id !== action.payload )
      }
    case ACTION.DELETE_MOVIE_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default rootReducer
