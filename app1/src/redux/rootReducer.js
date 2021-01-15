import { combineReducers } from "redux"
import MovieReducer from './reducers/MovieReducer'

const rootReducer = combineReducers({
  movies: MovieReducer
})

export default rootReducer
