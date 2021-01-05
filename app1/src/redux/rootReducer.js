import { combineReducers } from "redux"
import { ACTION } from './types'

const rootReducer = combineReducers({
  movies: movieReducer
})

function movieReducer (state = {movies: []}, action) {
  switch (action.type) {
    case ACTION.INIT_APPLICATION:
      return { ...state, movies: action.payload }
    case ACTION.ADD_MOVIE:
      return { ...state, movies: action.payload }
    case ACTION.FETCH_MOVIES:
      console.log('REDUCER', action.payload)
      return {
        ...state,
        movies: action.payload.data,
        loading: false,
        errors: {}
      }
    // case ACTION.FETCH_MOVIES_FULFILLED:
    //   return {
    //     // ...state, movies: action.payload
    //     ...state,
    //     movies: action.payload.data.data,
    //     loading: false,
    //     errors: {}
    //   }
    // case ACTION.FETCH_MOVIES_PENDING:
    //   return {
    //     ...state,
    //     loading: true,
    //     errors: {}
    //   }
    // case ACTION.FETCH_MOVIES_REJECTED:
    //   return {
    //     ...state,
    //     loading: false,
    //     errors: { global: action.payload.message }
    //   }
    default:
      return state
  }
}

export default rootReducer
