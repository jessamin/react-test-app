// import { combineReducers } from "redux"
import {INIT_APPLICATION} from './types'

// const rootReducer = combineReducers({
//   movieReducer
// })

function rootReducer (state = {movies: []}, action) {
  switch (action.type) {
    case INIT_APPLICATION:
      return { ...state, movies: action.payload }
    default:
      return state
  }
}

export default rootReducer