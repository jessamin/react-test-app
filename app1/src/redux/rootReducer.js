import { combineReducers } from "redux"
import { ACTION } from './types'

const rootReducer = combineReducers({
  movies: movieReducer
})

function movieReducer (state = {
  movies: [],
  val: '',
  error: true,
  msg: '',
  loading: false,
  movie: {}
  }, action) {
  switch (action.type) {
    case ACTION.FETCH_MOVIES_INIT:
      return {
        ...state,
        error: null,
        msg: false
      }
    case ACTION.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        error: null,
        msg: false
      }
    case ACTION.FETCH_MOVIES_ERROR:
      return {
        ...state,
        error: true,
        msg: false
      }


    case ACTION.EDIT_MOVIE_FETCH_INIT:
      return {
        ...state,
        error: null,
        msg: false
      }
    case ACTION.EDIT_MOVIE_FETCH_VALIDATION:
      return {
        ...state,
        val: action.payload,
        error: null,
        msg: false
      }
    case ACTION.EDIT_MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        movie: action.payload,
        msg: false
      }
    case ACTION.EDIT_MOVIE_FETCH_ERROR:
      return {
        ...state,
        error: true,
        errorMsg: action.payload,
        msg: false
      }


    case ACTION.ADD_MOVIE_INIT:
      return {
        ...state,
        error: null,
        msg: false
      }
    case ACTION.ADD_MOVIE_VALIDATION:
      return {
        ...state,
        val: action.payload,
        error: null,
        msg: false
      }
    case ACTION.ADD_MOVIE_SUCCESS:
      return {
        ...state,
        error: null,
        movies: [...state.movies, action.payload],
        msg: '!!!!!Movie successfully ADDED'
      }
    case ACTION.ADD_MOVIE_ERROR:
      return {
        ...state,
        error: true,
        msg: '!!!!!Error: ' + action.payload
      }


    case ACTION.EDIT_MOVIE_INIT:
      return {
        ...state,
        error: null,
        msg: false
      }
    case ACTION.EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        error: null,
        movie: action.payload,
        msg: '!!!!!Movie successfully EDITED'
      }
    case ACTION.EDIT_MOVIE_ERROR:
      return {
        ...state,
        error: true,
        msg: '!!!!!ERROR'
      }


    case ACTION.DELETE_MOVIE_INIT:
      return {
        ...state,
        error: null,
        msg: false
      }
    case ACTION.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.filter( movie => movie.id !== action.payload ),
        msg: '!!!!! Movie successfully DELETED'
      }
    case ACTION.DELETE_MOVIE_ERROR:
      return {
        ...state,
        error: true,
        msg: '!!!ERROR'
      }
    default:
      return state
  }
}

export default rootReducer
